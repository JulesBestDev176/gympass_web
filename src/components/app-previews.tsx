import { ArrowLeft, ArrowUpRight, Bell, Check, CircleCheck, Home, Plus, ScanLine, Search, Settings, Share2, Ticket, Users, Wallet } from "lucide-react";

export type Screen = "dashboard" | "scan" | "registration" | "card" | "payment" | "members" | "scanner" | "finances" | "entries";

export function Portrait({ variant = 0, large = false }: { variant?: number; large?: boolean }) {
  return <span className={`avatar portrait portrait-${variant % 4}${large ? " avatar-large" : ""}`} aria-hidden="true" />;
}

function AppNav({ active = "Accueil" }: { active?: string }) {
  return <div className="app-nav">{[{ label: "Accueil", Icon: Home }, { label: "Adhérents", Icon: Users }, { label: "Scanner", Icon: ScanLine }, { label: "Paiements", Icon: Wallet }, { label: "Paramètres", Icon: Settings }].map(({ label, Icon }) => <span key={label} className={label === "Scanner" ? "scanner-nav-item" : label === active ? "selected" : ""}><Icon size={17} strokeWidth={1.6} /><span>{label}</span></span>)}</div>;
}

function Field({ label, value = "—" }: { label: string; value?: string }) {
  return <div className="detail-line"><span>{label}</span><b>{value}</b></div>;
}

function Dashboard() {
  return <><div className="app-content"><div className="flex items-center gap-2.5"><Portrait /><div className="flex-1 min-w-0"><strong>Bienvenue à l’accueil</strong><small>Votre salle</small></div><Bell size={18} /></div><h4>Vue d’ensemble</h4><div className="grid grid-cols-2 gap-2"><div className="mini-panel"><Users size={17} className="text-lime" /><small>Adhérents actifs</small><b className="stat-value">—</b><small>Actuellement</small></div><div className="mini-panel"><Ticket size={17} className="text-blue-400" /><small>Ventes de bracelets</small><b className="stat-value">—</b><small>Sur la période</small></div></div><div className="mini-panel"><small>Argent reçu · période sélectionnée</small><b className="revenue">— <span>FCFA</span></b><div className="flex gap-4 border-t border-white/5 pt-2"><small>Adhérents</small><small>Bracelets</small></div></div><div className="quick-actions">{[{ Icon: Plus, label: "Adhérent" }, { Icon: Wallet, label: "Paiement" }, { Icon: Users, label: "Personnel" }].map(({ Icon, label }) => <span key={label}><Icon size={15} />{label}</span>)}</div><div className="flex justify-between items-center"><h4>Dernières opérations</h4><span className="text-lime text-[9px]">Tout voir</span></div><div className="preview-empty"><Wallet size={24} /><p>Les règlements enregistrés<br />apparaissent ici.</p></div></div><AppNav /></>;
}

function ScanResult() {
  return <div className="app-content scan-result"><div className="app-title"><ArrowLeft size={17} />Résultat du scan</div><div className="member-portrait"><Portrait variant={2} large /></div><div className="text-center"><h3>Photo du porteur</h3><small>À comparer avec la personne présente</small></div><div className="mini-panel"><Field label="Nom de l’adhérent" /><Field label="Numéro de carte" /><Field label="Formule" /><Field label="Statut" /><Field label="Séances restantes" /></div><div className="preview-empty compact"><CircleCheck size={20} /><p>Le résultat dépend de la carte scannée.</p></div><div className="app-outline mt-auto">Voir la fiche adhérent <ArrowUpRight size={14} /></div><div className="app-button"><ScanLine size={15} />Scanner le suivant</div></div>;
}

function Registration() {
  return <div className="app-content"><div className="app-title"><ArrowLeft size={17} />Nouvel adhérent</div><div className="flex gap-1 my-1">{[0, 1, 2, 3, 4].map(n => <span key={n} className={`h-1 flex-1 rounded ${n < 4 ? "bg-lime" : "bg-white/10"}`} />)}</div><h3>Formules et encaissement</h3><div className="mini-panel"><Field label="Frais d’inscription" value="— FCFA" /></div><div className="grid grid-cols-2 gap-2"><div className="app-outline">Mensuel</div><div className="app-outline active">Carte de séances</div></div><div className="mini-panel"><Field label="Nombre de séances" /><Field label="Montant" value="— FCFA" /></div><h4>Mode de règlement déclaré</h4><div className="payment-options"><span>Espèces</span><span>Wave</span><span>Orange M.</span></div><small>Indiquez comment l’argent a été reçu.</small><div className="app-button mt-auto">Voir le récapitulatif <ArrowUpRight size={14} /></div></div>;
}

function MemberCard() {
  return <div className="app-content"><div className="app-title"><ArrowLeft size={17} />Carte de membre</div><div className="member-card"><div className="flex items-center gap-2"><img src="/logo.png" alt="" width={28} height={28} /><span>Votre salle</span><span className="ml-auto text-lime">MEMBRE</span></div><div className="flex items-center gap-3 my-4"><Portrait variant={1} /><div><h3>Votre adhérent</h3><span className="text-muted">Numéro de carte</span></div></div><div className="qr-placeholder"><ScanLine size={64} strokeWidth={1} /><span>QR personnel de l’adhérent</span></div><p className="text-center mt-4 text-[10px] text-muted">La carte est créée à l’inscription.</p></div><div className="preview-empty compact"><CircleCheck size={18} /><p>Une carte associée à son porteur.</p></div><div className="app-button mt-auto"><Share2 size={15} />Partager la carte</div><div className="grid grid-cols-2 gap-2"><div className="app-outline">Exporter PDF</div><div className="app-outline">Imprimer</div></div></div>;
}

function Payment() {
  return <div className="app-content"><div className="app-title"><ArrowLeft size={17} />Mensualité</div><div className="mini-panel flex items-center gap-2"><Portrait variant={3} /><div><strong>Sélectionner un adhérent</strong><small>Nom, téléphone ou carte</small></div></div><h4>Mois couvert</h4><div className="app-outline">Choisir le mois</div><div className="mini-panel"><small>Montant de la mensualité</small><b className="revenue">— <span>FCFA</span></b></div><h4>Mode de règlement déclaré</h4><div className="payment-options"><span>Espèces</span><span>Wave</span><span>Orange M.</span></div><small>L’argent est reçu en dehors de l’application.</small><div className="app-button mt-auto"><Check size={14} />Enregistrer le règlement</div></div>;
}

function Members() {
  return <><div className="app-content"><div className="app-title">Adhérents<span className="ml-auto text-lime"><Plus size={20} /></span></div><div className="app-search"><Search size={14} />Nom, carte ou téléphone</div><div className="flex gap-2 text-[9px]"><span className="filter active">Tous</span><span className="filter">Actifs</span><span className="filter">Expirent demain</span></div><h4>Les informations de chaque adhérent</h4>{["Identité et photo", "Carte personnelle", "Formule et échéance", "Solde de séances"].map((label, index) => <div className="operation" key={label}><Portrait variant={index} /><div className="flex-1"><strong>{label}</strong><small>Renseigné dans la fiche adhérent</small></div></div>)}<div className="app-outline mt-auto"><Plus size={14} />Nouvel adhérent</div></div><AppNav active="Adhérents" /></>;
}

function Scanner() {
  return <div className="app-content scanner-screen"><div className="app-title"><ArrowLeft size={17} />Scanner une carte</div><div className="scanner-center"><div className="scan-target"><span /><span /><span /><span /><div className="scan-beam" /></div><p>Placez le QR dans le cadre</p><small>Carte membre ou bracelet de la salle</small></div><div className="app-outline"><Search size={14} />Rechercher un adhérent</div><small className="text-center">Le résultat s’affiche après la lecture.</small></div>;
}

function Finances() {
  return <div className="app-content"><div className="app-title"><ArrowLeft size={17} />Finances</div><div className="payment-options"><span className="active">Ce mois</span><span>Semaine</span><span>Tout</span></div><div className="mini-panel"><div className="flex items-center gap-2"><Wallet size={18} className="text-lime" /><b className="revenue">— <span>FCFA</span></b></div><small>Total des règlements enregistrés</small><div className="grid grid-cols-2 gap-2 mt-3 border-t border-white/5 pt-2"><div><small>Adhérents</small><strong>—</strong></div><div><small>Bracelets</small><strong>—</strong></div></div></div><div className="mini-panel"><h4>Évolution des encaissements</h4><div className="chart-empty"><span /><span /><span /><small>Selon la période choisie</small></div></div><div className="flex gap-1 text-[8px]"><span className="filter active">Toutes sources</span><span className="filter">Tous modes</span></div><div className="app-search"><Search size={13} />Adhérent, carte, bracelet ou personnel</div><h4>Transactions</h4><div className="preview-empty compact"><Wallet size={21} /><p>Votre historique de règlements.</p></div></div>;
}

function Entries() {
  return <div className="app-content"><div className="app-title"><ArrowLeft size={17} />Entrées à la séance</div><div className="payment-options"><span className="active">Ce mois</span><span>Semaine</span><span>Tout</span></div><div className="mini-panel flex items-center justify-between gap-2"><div><small>Ventes de bracelets</small><b className="stat-value">—</b></div><div className="text-right"><small>Argent reçu</small><strong>— FCFA</strong></div></div><div className="app-search"><Search size={14} />Rechercher un bracelet</div><h4>Historique des ventes de bracelets</h4><div className="preview-empty"><Ticket size={30} /><p>Numéro du bracelet, date,<br />montant et réceptionniste.</p></div><div className="mini-panel"><small>Le scan enregistre une vente à la séance. Cet historique ne constitue pas un comptage de tous les passages dans la salle.</small></div></div>;
}

const screens = { dashboard: Dashboard, scan: ScanResult, registration: Registration, card: MemberCard, payment: Payment, members: Members, scanner: Scanner, finances: Finances, entries: Entries };

export function Phone({ screen, className = "", label }: { screen: Screen; className?: string; label?: string }) {
  const Content = screens[screen];
  return <div className={`phone ${className}`} role="img" aria-label={label || `Interface GymPass SN : ${screen}`}><div className="phone-screen" aria-hidden="true"><div className="phone-status"><span>9:41</span><div className="phone-island" /><span className="flex gap-1 items-center"><span className="signal">▂▄▆</span><span>▰</span></span></div><Content /><div className="home-indicator" /></div></div>;
}
