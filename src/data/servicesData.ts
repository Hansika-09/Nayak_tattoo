export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  features: string[];
  iconName: 'Sparkles' | 'Feather' | 'Eye' | 'UserCheck' | 'RefreshCw' | 'Palette' | 'Compass' | 'ShieldCheck';
  whatsappMessage: string;
}

export const STUDIO_SERVICES: ServiceItem[] = [
  {
    id: 'custom-tattoos',
    name: 'Custom Tattoos',
    shortDesc: 'Original, bespoke tattoo designs drawn specifically to reflect your personal story, vision, and aesthetic.',
    features: ['Original concepts', 'Personal consultation', 'Anatomical fitting'],
    iconName: 'Sparkles',
    whatsappMessage: "Hi Nayak Tattoo Studio! I'm interested in getting a custom tattoo design. Could you share the details?",
  },
  {
    id: 'fine-line-tattoos',
    name: 'Fine-Line Tattoos',
    shortDesc: 'Delicate, razor-sharp needlework producing elegant micro-tattoos, minimalist scripts, and subtle artistry.',
    features: ['Single needle precision', 'Crisp details', 'Subtle elegance'],
    iconName: 'Feather',
    whatsappMessage: "Hi Nayak Tattoo Studio! I'm interested in getting a fine-line tattoo. Could you share the details?",
  },
  {
    id: 'realistic-tattoos',
    name: 'Realistic Tattoos',
    shortDesc: 'Lifelike depth, nuanced textures, and photorealistic rendering that brings imagery to life on skin.',
    features: ['Photorealistic depth', 'Nuanced shading', 'High contrast'],
    iconName: 'Eye',
    whatsappMessage: "Hi Nayak Tattoo Studio! I'm interested in getting a realistic tattoo. Could you share the details?",
  },
  {
    id: 'portrait-tattoos',
    name: 'Portrait Tattoos',
    shortDesc: 'Honoring loved ones and cultural icons with exact anatomical proportions and emotional resonance.',
    features: ['Accurate likeness', 'Detailed facial expressions', 'Timeless tribute'],
    iconName: 'UserCheck',
    whatsappMessage: "Hi Nayak Tattoo Studio! I would like to enquire about getting a portrait tattoo.",
  },
  {
    id: 'tattoo-cover-ups',
    name: 'Tattoo Cover-Ups',
    shortDesc: 'Expert redesign and ink coverage to transform old, faded, or unwanted tattoos into magnificent new art.',
    features: ['Smart camouflage', 'Color/contrast mastery', 'Consultation required'],
    iconName: 'RefreshCw',
    whatsappMessage: "Hi Nayak Tattoo Studio! I have an old tattoo I'd like to cover up or revamp. Could you share how we can start?",
  },
  {
    id: 'black-and-grey-tattoos',
    name: 'Black & Grey Tattoos',
    shortDesc: 'Timeless shading utilizing diluted ink washes to achieve seamless gradients, dramatic shadows, and longevity.',
    features: ['Seamless ink washes', 'High-contrast highlights', 'Classic longevity'],
    iconName: 'Palette',
    whatsappMessage: "Hi Nayak Tattoo Studio! I'm interested in a Black & Grey tattoo. Could you share the details?",
  },
  {
    id: 'mandala-geometric-tattoos',
    name: 'Mandala & Geometric',
    shortDesc: 'Harmonious geometric patterns, sacred geometry, and hypnotic mandalas with exact symmetry.',
    features: ['Sacred symmetry', 'Complex dotwork', 'Body flow harmony'],
    iconName: 'Compass',
    whatsappMessage: "Hi Nayak Tattoo Studio! I'm looking to get a mandala / geometric tattoo. Could you share the details?",
  },
  {
    id: 'body-piercings',
    name: 'Body Piercings',
    shortDesc: 'Safe, hygienic piercing services using sterile single-use needles and hypoallergenic premium jewelry.',
    features: ['Hospital-grade hygiene', 'Single-use needles', 'Comprehensive aftercare'],
    iconName: 'ShieldCheck',
    whatsappMessage: "Hi Nayak Tattoo Studio! I'm interested in booking a body piercing appointment. Could you share details?",
  },
];
