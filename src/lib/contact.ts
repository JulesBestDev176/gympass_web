export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "221777151061";

export const whatsappDisplay = whatsappNumber.replace(/\D/g, "").replace(/^(221)(\d{2})(\d{3})(\d{2})(\d{2})$/, "+$1 $2 $3 $4 $5");

export function whatsappLink(message = "Bonjour, je souhaite une démonstration de GymPass pour ma salle de sport.") {
  return `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
