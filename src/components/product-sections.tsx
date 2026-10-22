import { ArrowUpRight, BadgeCheck, Check, ChevronDown, CircleCheck, Clock3, MessageCircle, ScanLine, ShieldCheck, Ticket, Users } from "lucide-react";
import { Phone } from "@/components/app-previews";
import { whatsappLink, whatsappDisplay } from "@/lib/contact";

export function ManagementSections() {
  return <>
    <section id="finances" className="section container product-split">
      <div>
        <p className="eyebrow">Gardez une vue d’ensemble</p>
        <h2>Vos encaissements,<br />avec le détail qui compte.</h2>
        <p className="body-copy mt-6">Retrouvez les paiements des adhérents et les ventes de bracelets dans la vue Finances. Choisissez une période pour comprendre ce qui a été encaissé.</p>
        <ul className="product-checklist">
          <li><Check />Distinguez les recettes adhérents et bracelets.</li>
          <li><Check />Suivez l’évolution des encaissements en FCFA.</li>
          <li><Check />Filtrez par source, moyen de paiement et type.</li>
          <li><Check />Recherchez un adhérent, une carte ou un bracelet.</li>
        </ul>
        <a href="#contact" className="product-link">Découvrir la vue propriétaire <ArrowUpRight size={17} /></a>
      </div>
      <div className="product-phone-stage"><Phone screen="finances" label="Aperçu Finances : total encaissé, répartition adhérents et bracelets, évolution et transactions fictives" /><span className="product-demo-note">Données de démonstration</span></div>
    </section>

    <section id="bracelets" className="product-band">
      <div className="container product-split">
        <div className="bracelet-demo" aria-label="Exemple fictif de vente de bracelet">
          <div className="flex items-center justify-between gap-3"><span className="feature-icon"><Ticket size={24} /></span><span className="demo-chip">Exemple de passage</span></div>
          <div className="bracelet-strip"><ScanLine size={33} /><span>GP-BR-0042</span><span className="bracelet-perforation" /></div>
          <div className="bracelet-confirmation"><CircleCheck size={22} /><div><b>Vente de bracelet enregistrée</b><p>Une entrée à la séance, ajoutée au suivi.</p></div></div>
          <div className="bracelet-demo-footer"><span><small>Bracelet</small><b>GP-BR-0042</b></span><span><small>Mode de paiement</small><b>Espèces</b></span></div>
          <p className="text-xs text-muted mt-5">Illustration avec un numéro fictif.</p>
        </div>
        <div>
          <p className="eyebrow">Les visiteurs aussi ont leur place</p>
          <h2>Une séance ponctuelle.<br />Un passage suivi.</h2>
          <p className="body-copy mt-6">Votre salle accueille aussi des visiteurs à la séance. Le scan d’un bracelet permet d’enregistrer la vente, puis de retrouver les entrées et les montants encaissés sur la période.</p>
          <ol className="compact-steps">
            <li><span>01</span><div><h3>Scannez le bracelet</h3><p>Le QR identifie le bracelet de votre salle.</p></div></li>
            <li><span>02</span><div><h3>Vérifiez le résultat</h3><p>L’application confirme la vente ou indique le motif du refus.</p></div></li>
            <li><span>03</span><div><h3>Retrouvez l’opération</h3><p>Consultez l’historique des entrées et le total encaissé.</p></div></li>
          </ol>
        </div>
      </div>
    </section>
  </>;
}

export function TeamSection() {
  const roles = [
    { Icon: ShieldCheck, role: "Propriétaire", subtitle: "Pilotez votre salle", items: ["Consulter les finances et les indicateurs", "Configurer les tarifs de la salle", "Ajouter et gérer les réceptionnistes", "Suivre les adhérents et les opérations"], accent: true },
    { Icon: Users, role: "Réception", subtitle: "Faites avancer l’accueil", items: ["Inscrire et retrouver les adhérents", "Enregistrer les paiements", "Scanner les cartes et les bracelets", "Consulter les statuts et les échéances"], accent: false },
  ];
  return <section id="equipe" className="section container">
    <div className="section-heading"><div><p className="eyebrow">Une équipe, des rôles clairs</p><h2>Le bon accès,<br />pour chaque personne.</h2></div><p className="section-intro">Chaque membre de l’équipe utilise son compte. Les écrans et les actions disponibles dépendent de son rôle.</p></div>
    <div className="role-grid">{roles.map(({ Icon, role, subtitle, items, accent }) => <article className={`role-card ${accent ? "role-owner" : ""}`} key={role}><div className="flex items-center gap-4"><span className="feature-icon"><Icon size={23} /></span><div><p>{subtitle}</p><h3>{role}</h3></div><BadgeCheck size={22} className="ml-auto text-lime" /></div><ul>{items.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul></article>)}</div>
  </section>;
}

export function WhatsAppSection() {
  return <section id="whatsapp" className="container product-split whatsapp-section">
    <div><p className="eyebrow">Restez en contact</p><h2>La carte de votre adhérent,<br />à portée de WhatsApp.</h2><p className="body-copy mt-6">Depuis sa fiche, retrouvez le numéro WhatsApp de l’adhérent et les options de partage de sa carte. Le suivi distingue une demande d’envoi acceptée d’une réception confirmée.</p><ul className="product-checklist"><li><Check />Partage de la carte membre et de son QR.</li><li><Check />État de la demande d’envoi visible dans l’application.</li><li><Check />Possibilité de partager la carte depuis le téléphone.</li></ul><a className="product-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Voir le parcours en démonstration <ArrowUpRight size={17} /></a></div>
    <div className="whatsapp-demo"><div className="flex items-center gap-3 border-b border-white/5 pb-5"><span className="feature-icon"><MessageCircle size={23} /></span><div><h3>Carte de Seynabou Gueye</h3><p className="text-xs text-muted mt-1">Exemple de suivi dans GymPass SN</p></div></div><div className="whatsapp-card-preview"><img src="/logo.png" alt="" width={34} height={34} /><div><b>Dakar Fit Club</b><span>Carte membre · GP-0231</span></div><ScanLine size={35} className="ml-auto text-lime" /></div><div className="delivery-status"><CircleCheck size={19} /><div><b>Demande d’envoi acceptée</b><p>La réception par l’adhérent n’est pas confirmée par le service.</p></div></div><div className="flex items-start gap-2 text-xs text-muted leading-relaxed mt-5"><Clock3 size={15} className="shrink-0 mt-0.5" /><p>Vérifiez l’état de la demande avant de réessayer un envoi.</p></div></div>
  </section>;
}

export function PricingSection() {
  return <section id="tarifs" className="section container"><div className="pricing-panel"><div><p className="eyebrow">Tarifs</p><h2>Les offres arrivent bientôt.</h2><p className="body-copy mt-4">Les tarifs GymPass SN seront publiés ici. En attendant, découvrez l’application et échangeons sur les besoins de votre salle.</p></div><div className="pricing-action"><span className="demo-chip">Tarifs à venir</span><a className="button button-primary" href="#contact">Demander une démo <ArrowUpRight size={17} /></a></div></div></section>;
}

const questions = [
  { question: "À qui s’adresse GymPass SN ?", answer: "GymPass SN s’adresse aux salles de sport au Sénégal qui souhaitent gérer leurs adhérents, les cartes QR, les encaissements et les entrées depuis un téléphone. Le propriétaire et la réception disposent d’accès adaptés à leur rôle." },
  { question: "Quels types de formules peut-on gérer ?", answer: "L’application permet de gérer les mensualités, les cartes de séances et les entrées ponctuelles. Les cartes de séances affichent le solde restant après le passage. Les visiteurs à la séance peuvent être suivis via les bracelets." },
  { question: "Peut-on enregistrer les paiements Wave et Orange Money ?", answer: "Oui. Les encaissements peuvent être enregistrés en espèces, par Wave ou par Orange Money, avec des montants en FCFA. L’enregistrement dans GymPass SN sert au suivi de votre salle ; le paiement lui-même s’effectue avec le moyen choisi." },
  { question: "Que faire si un adhérent perd sa carte ?", answer: "Depuis sa fiche, vous pouvez remplacer sa carte. L’ancien QR est désactivé et une nouvelle carte est créée. La carte peut être partagée, exportée en PDF ou imprimée." },
  { question: "Peut-on ajouter plusieurs réceptionnistes ?", answer: "Oui. Le propriétaire peut ajouter et gérer les membres de son équipe. Chaque réceptionniste dispose de son propre compte pour les opérations d’accueil, avec les droits de son rôle." },
  { question: "Les montants des aperçus sont-ils les tarifs GymPass SN ?", answer: "Non. Les noms, numéros, montants et indicateurs affichés dans les aperçus sont des données de démonstration de l’application. Les tarifs du service GymPass SN ne sont pas encore publiés." },
  { question: "Comment demander une démonstration ?", answer: `Renseignez le nom de votre salle, votre ville et votre numéro dans le formulaire de contact. Le site prépare votre message WhatsApp : vous pouvez le vérifier avant de l’envoyer au ${whatsappDisplay}.` },
];

export function FaqSection() {
  return <section id="faq" className="section container faq-section"><div><p className="eyebrow">Avant de démarrer</p><h2>Vos questions,<br />nos réponses.</h2><p className="body-copy mt-5">Un point à préciser pour votre salle ?</p><a href="#contact" className="product-link">Parlons-en <ArrowUpRight size={17} /></a></div><div className="faq-list">{questions.map(({ question, answer }) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></section>;
}
