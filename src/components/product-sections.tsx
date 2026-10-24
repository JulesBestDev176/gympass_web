import { ArrowUpRight, BadgeCheck, Check, ChevronDown, CircleCheck, Clock3, Headphones, LockKeyhole, MessageCircle, ScanLine, Settings, ShieldCheck, Ticket, Users } from "lucide-react";
import { Phone } from "@/components/app-previews";
import { whatsappLink, whatsappDisplay } from "@/lib/contact";

export function ManagementSections() {
  return <>
    <section id="finances" className="section container product-split">
      <div>
        <p className="eyebrow">Gardez une vue d’ensemble</p>
        <h2>Vos encaissements,<br />avec le détail qui compte.</h2>
        <p className="body-copy mt-6">Retrouvez les encaissements des adhérents, les ventes de bracelets et celles de la boutique dans la vue Finances. Choisissez une période pour consulter les montants enregistrés par votre équipe.</p>
        <ul className="product-checklist">
          <li><Check />Distinguez les recettes adhérents, bracelets et boutique.</li>
          <li><Check />Suivez l’évolution des encaissements en FCFA.</li>
          <li><Check />Filtrez par source, mode de règlement déclaré et type.</li>
          <li><Check />Recherchez un adhérent, une carte ou un bracelet.</li>
        </ul>
        <a href="#contact" className="product-link">Découvrir la vue propriétaire <ArrowUpRight size={17} /></a>
      </div>
      <div className="product-phone-stage"><Phone screen="finances" label="Interface Finances : règlements enregistrés, répartition adhérents, bracelets et boutique" /></div>
    </section>

    <section id="bracelets" className="product-band">
      <div className="container product-split">
        <div className="bracelet-demo" aria-label="Fonctionnement des ventes de bracelets">
          <div className="flex items-center justify-between gap-3"><span className="feature-icon"><Ticket size={24} /></span><span className="demo-chip">Vente à la séance</span></div>
          <div className="bracelet-strip"><ScanLine size={33} /><span>Bracelet de votre salle</span><span className="bracelet-perforation" /></div>
          <div className="bracelet-confirmation"><CircleCheck size={22} /><div><b>Scannez le lot, puis validez la vente</b><p>Le résultat indique la vente enregistrée ou le motif du refus.</p></div></div>
          <div className="bracelet-demo-footer"><span><small>Identification</small><b>Numéro du bracelet</b></span><span><small>Suivi</small><b>Montant et réceptionniste</b></span></div>
        </div>
        <div>
          <p className="eyebrow">Les visiteurs aussi ont leur place</p>
          <h2>Les ventes à la séance,<br />enregistrées au scan.</h2>
          <p className="body-copy mt-6">Scannez un ou plusieurs bracelets de votre salle, vérifiez le lot et validez la vente. Vous retrouvez ensuite les ventes, leurs montants et la personne qui les a enregistrées.</p>
          <ol className="compact-steps">
            <li><span>01</span><div><h3>Scannez le bracelet</h3><p>Le QR identifie le bracelet de votre salle.</p></div></li>
            <li><span>02</span><div><h3>Vérifiez le résultat</h3><p>Confirmez les bracelets sélectionnés et le total de la vente.</p></div></li>
            <li><span>03</span><div><h3>Retrouvez la vente</h3><p>Consultez l’historique des ventes de bracelets sur la période.</p></div></li>
          </ol>
        </div>
      </div>
    </section>
  </>;
}

export function TeamSection() {
  const roles = [
    { Icon: ShieldCheck, role: "Propriétaire", subtitle: "Pilotez votre salle", items: ["Consulter les finances et les indicateurs", "Configurer les tarifs de la salle", "Gérer les produits, les prix et le stock", "Ajouter et gérer les réceptionnistes", "Suivre les adhérents et les opérations"], accent: true },
    { Icon: Users, role: "Réception", subtitle: "Faites avancer l’accueil", items: ["Inscrire et retrouver les adhérents", "Enregistrer l’argent reçu", "Scanner les cartes et les bracelets", "Vendre les produits au comptoir", "Consulter les statuts et les échéances"], accent: false },
  ];
  return <section id="equipe" className="section container">
    <div className="section-heading"><div><p className="eyebrow">Une équipe, des rôles clairs</p><h2>Le bon accès,<br />pour chaque personne.</h2></div><p className="section-intro">Chaque membre de l’équipe utilise son compte. Les écrans et les actions disponibles dépendent de son rôle.</p></div>
    <div className="role-grid">{roles.map(({ Icon, role, subtitle, items, accent }) => <article className={`role-card ${accent ? "role-owner" : ""}`} key={role}><div className="flex items-center gap-4"><span className="feature-icon"><Icon size={23} /></span><div><p>{subtitle}</p><h3>{role}</h3></div><BadgeCheck size={22} className="ml-auto text-lime" /></div><ul>{items.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul></article>)}</div>
  </section>;
}

export function WhatsAppSection() {
  return <section id="whatsapp" className="container product-split whatsapp-section">
    <div><p className="eyebrow">Restez en contact</p><h2>La carte de votre adhérent,<br />à portée de WhatsApp.</h2><p className="body-copy mt-6">À l’ajout d’un adhérent, sa carte est envoyée automatiquement sur WhatsApp. Depuis sa fiche, vous pouvez la retrouver et la renvoyer. L’application affiche l’état de la demande d’envoi ; une demande acceptée ne confirme pas la réception par l’adhérent.</p><ul className="product-checklist"><li><Check />Partage de la carte membre et de son QR.</li><li><Check />État de la demande d’envoi visible dans l’application.</li><li><Check />Possibilité de partager la carte depuis le téléphone.</li></ul><a className="product-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Découvrir le parcours <ArrowUpRight size={17} /></a></div>
    <div className="whatsapp-demo"><div className="flex items-center gap-3 border-b border-white/5 pb-5"><span className="feature-icon"><MessageCircle size={23} /></span><div><h3>Partage de carte membre</h3><p className="text-xs text-muted mt-1">Depuis la fiche de l’adhérent</p></div></div><div className="whatsapp-card-preview"><img src="/logo.png" alt="" width={34} height={34} /><div><b>Votre salle</b><span>La carte personnelle de votre adhérent</span></div><ScanLine size={35} className="ml-auto text-lime" /></div><div className="delivery-status"><CircleCheck size={19} /><div><b>Un suivi de la demande d’envoi</b><p>Consultez son état dans l’application avant de réessayer.</p></div></div><div className="flex items-start gap-2 text-xs text-muted leading-relaxed mt-5"><Clock3 size={15} className="shrink-0 mt-0.5" /><p>La réception du message n’est pas garantie par un statut « accepté ».</p></div></div>
  </section>;
}

export function PricingSection() {
  return <section id="tarifs" className="section container"><div className="pricing-panel"><div><p className="eyebrow">Tarifs</p><h2>Les offres arrivent bientôt.</h2><p className="body-copy mt-4">Les tarifs GymPass seront publiés ici. En attendant, découvrez l’application et échangeons sur les besoins de votre salle.</p></div><div className="pricing-action"><span className="demo-chip">Tarifs à venir</span><a className="button button-primary" href="#contact">Demander une démo <ArrowUpRight size={17} /></a></div></div></section>;
}

export function TrustSection() {
  const assurances = [
    { Icon: LockKeyhole, title: "Des accès personnels et protégés", description: "Chaque membre de votre équipe utilise son compte, avec les droits de son rôle. Vous pouvez changer votre mot de passe et utiliser le déverrouillage biométrique sur un téléphone compatible." },
    { Icon: Settings, title: "Vous gardez la main", description: "Le propriétaire configure les tarifs de sa salle, ajoute ses réceptionnistes et peut activer ou désactiver leurs comptes. Vous gérez votre organisation depuis l’application." },
    { Icon: ShieldCheck, title: "Une carte perdue reste sous contrôle", description: "Remplacez la carte depuis la fiche de l’adhérent : l’ancien QR est désactivé. À l’accueil, la photo et le statut de la carte permettent de vérifier le porteur." },
    { Icon: Headphones, title: "De l’aide dans votre quotidien", description: "Un problème d’accès, une question sur un écran ou une difficulté à l’accueil ? Contactez-nous sur WhatsApp avec le détail de votre besoin pour être accompagné." },
    { Icon: Users, title: "Un démarrage accompagné", description: "Échangeons sur votre salle, ses tarifs et le fonctionnement de votre réception. Nous vous accompagnons dans la mise en place et la prise en main de GymPass." },
    { Icon: MessageCircle, title: "Un contact direct, même après le démarrage", description: "Gardez le même contact WhatsApp pour vos questions et vos besoins d’assistance. Écrivez-nous lorsque vous en avez besoin ; les modalités de prise en charge se précisent lors de l’échange." },
  ];
  return <section id="confiance" className="section container trust-section">
    <div className="section-heading">
      <div><p className="eyebrow">Sécurité, assistance et disponibilité</p><h2>Vous gardez la main.<br />Nous vous accompagnons.</h2></div>
      <p className="section-intro">Des accès adaptés à chaque rôle, des réglages à votre portée et un interlocuteur pour vous aider à utiliser GymPass au quotidien.</p>
    </div>
    <div className="trust-grid">{assurances.map(({ Icon, title, description }) => <article key={title}><span className="feature-icon"><Icon size={23} /></span><h3>{title}</h3><p>{description}</p></article>)}</div>
    <div className="support-panel">
      <span className="feature-icon"><Headphones size={26} /></span>
      <div><h3>Parlons directement de votre besoin.</h3><p>Avant de vous équiper ou pendant l’utilisation de l’application, retrouvez-nous sur WhatsApp au {whatsappDisplay}. Indiquez le nom de votre salle et votre question pour faciliter l’échange.</p></div>
      <a className="button button-secondary" href={whatsappLink("Bonjour, j’ai besoin d’assistance pour GymPass.")} target="_blank" rel="noopener noreferrer">Contacter l’assistance <ArrowUpRight size={17} /></a>
    </div>
  </section>;
}

const questions = [
  { question: "Comment fonctionne la boutique de la salle ?", answer: "C’est une boutique physique, au comptoir. Le propriétaire gère les produits, leurs prix et le stock ; la réception compose le panier et enregistre la vente dans GymPass. Les recettes sont visibles dans Finances." },
  { question: "Peut-on enregistrer une vente hors ligne ?", answer: "Oui. Une vente de la boutique est conservée sur le téléphone et affichée en attente de synchronisation. La confirmation du serveur est distinguée de l’enregistrement local, pour garder une trace claire des opérations à vérifier." },
  { question: "À qui s’adresse GymPass ?", answer: "GymPass s’adresse aux salles de sport au Sénégal qui souhaitent gérer leurs adhérents, les cartes QR, les encaissements et les entrées depuis un téléphone. Le propriétaire et la réception disposent d’accès adaptés à leur rôle." },
  { question: "Quels types de formules peut-on gérer ?", answer: "L’application permet de gérer les mensualités, les cartes de séances et les entrées ponctuelles. Les cartes de séances affichent le solde restant après le passage. Les visiteurs à la séance peuvent être suivis via les bracelets." },
  { question: "GymPass effectue-t-il les paiements Wave ou Orange Money ?", answer: "Non. Vous recevez l’argent en dehors de GymPass, puis vous indiquez dans l’application comment il a été reçu : espèces, Wave ou Orange Money. L’application enregistre le règlement pour le suivi de votre salle ; elle ne déclenche aucun transfert d’argent." },
  { question: "Que faire si un adhérent perd sa carte ?", answer: "Depuis sa fiche, vous pouvez remplacer sa carte. L’ancien QR est désactivé et une nouvelle carte est créée. La carte peut être partagée, exportée en PDF ou imprimée." },
  { question: "Peut-on ajouter plusieurs réceptionnistes ?", answer: "Oui. Le propriétaire peut ajouter et gérer les membres de son équipe. Chaque réceptionniste dispose de son propre compte pour les opérations d’accueil, avec les droits de son rôle." },
  { question: "Que représente l’historique des bracelets ?", answer: "Il répertorie les ventes à la séance enregistrées au scan des bracelets de la salle, avec les informations renvoyées pour chaque vente. Il ne représente pas le nombre total de passages de tous les adhérents." },
  { question: "Est-ce que je garde la main sur les paramètres de ma salle ?", answer: "Oui. Le propriétaire peut configurer les tarifs de sa salle et gérer ses réceptionnistes. Les accès de la réception sont adaptés à son rôle. Vous pouvez aussi changer votre mot de passe depuis les paramètres de votre compte." },
  { question: "Comment obtenir de l’assistance ?", answer: `Vous pouvez nous contacter sur WhatsApp au ${whatsappDisplay} pour une question sur la mise en place ou l’utilisation de GymPass. Décrivez le problème rencontré et l’écran concerné pour faciliter l’échange.` },
  { question: "Quels sont les tarifs de GymPass ?", answer: "Les tarifs du service seront publiés prochainement. Vous pouvez dès maintenant nous contacter pour découvrir l’application et parler des besoins de votre salle." },
  { question: "Comment demander une démonstration ?", answer: `Renseignez le nom de votre salle, votre ville et votre numéro dans le formulaire de contact. Le site prépare votre message WhatsApp : vous pouvez le vérifier avant de l’envoyer au ${whatsappDisplay}.` },
];

export function FaqSection() {
  return <section id="faq" className="section container faq-section"><div><p className="eyebrow">Avant de démarrer</p><h2>Vos questions,<br />nos réponses.</h2><p className="body-copy mt-5">Un point à préciser pour votre salle ?</p><a href="#contact" className="product-link">Parlons-en <ArrowUpRight size={17} /></a></div><div className="faq-list">{questions.map(({ question, answer }) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></section>;
}
