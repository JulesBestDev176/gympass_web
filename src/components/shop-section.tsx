import { ArrowUpRight, Check, Package, ShoppingBag, WifiOff } from "lucide-react";
import { ShopTour } from "@/components/shop-tour";

export function ShopSection() {
  return <section id="boutique" className="section container product-split shop-section" aria-labelledby="shop-title">
    <div>
      <p className="eyebrow">La boutique de votre salle</p>
      <h2 id="shop-title">Vendez au comptoir.<br />Le stock suit.</h2>
      <p className="body-copy mt-6">Eau, boissons ou accessoires : retrouvez vos produits dans GymPass. La réception compose le panier, enregistre la vente et le stock est mis à jour. Les recettes rejoignent la vue Finances de votre salle.</p>
      <ul className="product-checklist">
        <li><Check />Vos produits, vos prix et vos quantités disponibles.</li>
        <li><Check />Un panier pour vendre plusieurs produits en une fois.</li>
        <li><Check />Un historique des ventes et des mouvements de stock.</li>
      </ul>
      <div className="shop-roles">
        <div><Package size={19} /><span><b>Le propriétaire organise</b><small>Produits, prix et suivi du stock.</small></span></div>
        <div><ShoppingBag size={19} /><span><b>La réception vend</b><small>Panier et encaissement au comptoir.</small></span></div>
      </div>
      <div className="shop-offline"><WifiOff size={20} /><div><b>Le réseau coupe ? La vente reste.</b><p>Hors ligne, elle est conservée sur le téléphone et reste visible en attente de synchronisation. La confirmation du serveur est distinguée de l’enregistrement local.</p></div></div>
      <a href="#contact" className="product-link">Découvrir la boutique en démo <ArrowUpRight size={17} /></a>
    </div>
    <ShopTour />
  </section>;
}
