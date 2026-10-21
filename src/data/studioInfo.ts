export interface StudioInfo {
  name: string;
  tagline: string;
  artistName: string;
  instagramHandle: string;
  instagramUrl: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  googleMapsUrl: string;
  googleReviewsUrl: string;
}

export const STUDIO_INFO: StudioInfo = {
  name: 'Nayak Tattoo Studio',
  tagline: 'Custom Tattoos | Cover-Ups | Fine Line',
  artistName: 'Mr. Sanju',
  instagramHandle: '@nayak_tattooz2019',
  instagramUrl: 'https://www.instagram.com/nayak_tattooz2019/',
  phone: '+917996761346',
  displayPhone: '+91 7996761346',
  whatsappNumber: '917996761346',
  address: {
    line1: 'Muniswamy Layout, Narayana Reddy Layout',
    area: 'Konappana Agrahara, Electronic City',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560100',
    full: 'Muniswamy Layout, Narayana Reddy Layout, Konappana Agrahara, Electronic City, Bangalore, Karnataka 560100',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nayak+Tattoo+Studio+Electronic+City+Bangalore',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Nayak+Tattoo+Studio+Electronic+City+Bangalore',
};

/**
 * Generate a WhatsApp click-to-chat link with an encoded prefilled message
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultMsg = "Hi Nayak Tattoo Studio! I'd like to enquire about booking an appointment.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`;
}
