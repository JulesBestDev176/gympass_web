# GymPass SN — site vitrine

Projet Next.js App Router, TypeScript et Tailwind CSS. La structure vient de `../design/GymPass-SN-Site.dc.html`. Les aperçus de téléphone reprennent les écrans actuels de `../gympass_sn/lib` avec des données de démonstration : ils ne se connectent pas au backend.

## Lancer

```powershell
cd gympass-site
npm install
npm run dev
```

Ouvrir http://localhost:3000. Si le port est occupé, Next.js affiche le port choisi.

## Vérifier et produire

```powershell
npm run build
npm run typecheck
npm start
```

## Contact

Le contact par défaut est **+221 77 715 10 61**. Copier `.env.example` vers `.env.local` pour définir `NEXT_PUBLIC_WHATSAPP_NUMBER` au format international sans espaces. Le numéro visible et les liens WhatsApp suivent cette configuration.

Le formulaire valide les champs et prépare un lien WhatsApp. Le visiteur ouvre WhatsApp, vérifie et envoie lui-même son message. Aucun prospect n’est enregistré par le site.

## Organisation

- `src/app/page.tsx` : contenu et sections de la vitrine.
- `src/app/globals.css` : thème Tailwind, styles responsive et cadres téléphone.
- `src/components/app-previews.tsx` : aperçus de l’application.
- `src/components/product-sections.tsx` : finances, bracelets, équipe, WhatsApp, tarifs à venir et FAQ.
- `src/components/navigation.tsx` : navigation mobile.
- `src/components/contact-form.tsx` : formulaire de demande de démo.
- `src/lib/contact.ts` : construction des liens WhatsApp.
- `public/` : logo existant, Urbanist pour la vitrine et Inter pour les aperçus (licences OFL jointes).

## Contenu commercial

Les tarifs du service ne sont pas encore définis : la section Tarifs affiche « À venir ». Les montants des aperçus sont des données fictives de démonstration, et non les prix du service. La FAQ fonctionne avec les éléments HTML natifs `details` et `summary`.

Références de configuration : [Next.js](https://nextjs.org/docs/app/getting-started/installation), [Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss).
