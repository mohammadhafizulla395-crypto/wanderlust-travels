const WHATSAPP_NUMBER = '919100527275'

export function generateWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}
