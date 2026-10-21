export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  enquiryMessage: string;
}

export const TATTOO_GALLERY: GalleryItem[] = [
  {
    id: 'tattoo-1',
    title: 'Custom Inked Masterpiece',
    category: 'Custom Art',
    image: '/images/tattoos/nt1.jpg',
    alt: 'Custom detailed tattoo by Mr. Sanju at Nayak Tattoo Studio',
    description: 'Bespoke custom tattoo artwork designed specifically for the client, emphasizing linework and balanced contrast.',
    tags: ['Custom', 'Ink Art', 'Precision'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I saw the custom artwork (Piece #1) on your website and would love to enquire about a similar design.",
  },
  {
    id: 'tattoo-2',
    title: 'Fine-Line & Shading Detail',
    category: 'Fine-Line',
    image: '/images/tattoos/nt2.jpg',
    alt: 'Fine-line tattoo work by Nayak Tattoo Studio Electronic City',
    description: 'Crisp fine lines combined with delicate needle shading for a timeless, modern aesthetic.',
    tags: ['Fine-Line', 'Intricate', 'Contemporary'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I'm interested in getting a fine-line tattoo like Piece #2 from your gallery.",
  },
  {
    id: 'tattoo-3',
    title: 'Symbolic Statement Piece',
    category: 'Black & Grey',
    image: '/images/tattoos/nt3.jpg',
    alt: 'Symbolic black and grey tattoo design at Nayak Tattoo Studio',
    description: 'Rich tonal depth with smooth grey transitions, embodying personal symbolism and artistic strength.',
    tags: ['Black & Grey', 'Symbolic', 'Shading'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I'd love to ask about getting a black and grey piece similar to Piece #3.",
  },
  {
    id: 'tattoo-4',
    title: 'Dynamic Concept Art',
    category: 'Custom Art',
    image: '/images/tattoos/nt4.jpg',
    alt: 'Dynamic custom tattoo craftsmanship by Mr. Sanju',
    description: 'Customized placement and flow matching the natural anatomy of the body with striking ink definition.',
    tags: ['Flow', 'Bespoke', 'Artistic'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I really like the placement and design of Piece #4. Can we discuss an appointment?",
  },
  {
    id: 'tattoo-5',
    title: 'Signature Precision Ink',
    category: 'Detail Work',
    image: '/images/tattoos/nt5.jpg',
    alt: 'Signature precision tattoo crafted at Nayak Tattoo Studio Bangalore',
    description: 'Expertly executed linework ensuring sharp retention, clean healing, and everlasting visual impact.',
    tags: ['Precision', 'Clean Lines', 'Signature'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I want to enquire about the precision linework style shown in Piece #5.",
  },
];

export const PIERCING_GALLERY: GalleryItem[] = [
  {
    id: 'piercing-1',
    title: 'Precision Ear Piercing',
    category: 'Ear Piercing',
    image: '/images/piercings/nt6.jpg',
    alt: 'Professional hygienic ear piercing at Nayak Tattoo Studio',
    description: 'Carefully measured placement executed with sterile single-use equipment and premium jewelry.',
    tags: ['Ear', 'Sterile', 'Titanium'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I would like to book an appointment for an ear piercing.",
  },
  {
    id: 'piercing-2',
    title: 'Curated Cartilage Piercing',
    category: 'Cartilage Piercing',
    image: '/images/piercings/nt7.jpg',
    alt: 'Cartilage piercing by professional artist at Nayak Tattoo Studio',
    description: 'Flawless angle and anatomy-guided piercing technique for smooth healing and elegant styling.',
    tags: ['Cartilage', 'Curated', 'Hygienic'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I'm interested in a cartilage piercing and would like to check availability.",
  },
  {
    id: 'piercing-3',
    title: 'Classic & Modern Piercing',
    category: 'Facial / Body',
    image: '/images/piercings/nt8.jpg',
    alt: 'Precision body piercing at Nayak Tattoo Studio Electronic City',
    description: 'Gentle, sterile needle piercing practice with comprehensive aftercare instructions.',
    tags: ['Body Art', 'Clean', 'Expert Care'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I would like to enquire about getting a piercing as shown in Piece #3 of your piercing gallery.",
  },
  {
    id: 'piercing-4',
    title: 'Delicate Stud Placement',
    category: 'Facial Piercing',
    image: '/images/piercings/nt9.jpg',
    alt: 'Delicate stud facial piercing at Nayak Tattoo Studio',
    description: 'Minimalist, sleek, and hygienic piercing tailored to highlight facial symmetry.',
    tags: ['Facial', 'Minimalist', 'Precision'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I'd like to book an appointment for a delicate stud piercing.",
  },
  {
    id: 'piercing-5',
    title: 'Bespoke Piercing Artistry',
    category: 'Curated Piercing',
    image: '/images/piercings/nt10.jpg',
    alt: 'Bespoke piercing styling and application at Nayak Tattoo Studio',
    description: 'Tailored aesthetic piercing paired with medical-grade jewelry and expert guidance.',
    tags: ['Curated', 'Sterile', 'Studio Standard'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I'd love to enquire about piercing options and pricing via WhatsApp.",
  },
];
