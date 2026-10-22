
# Stage 1: Base
FROM node:24-alpine AS base

ENV NEXT_TELEMETRY_DISABLED=1

# Stage 2: Dependencies
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Stage 3: Build Next.js
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production

RUN npm run build

# Fail early if standalone output was not generated
RUN test -f /app/.next/standalone/server.js

# Stage 4: Production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Standalone output contains server.js and traced dependencies
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Static assets required by Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Public assets (optional in some projects)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
