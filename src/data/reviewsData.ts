export interface CustomerReview {
  id: string;
  source: 'Google Review';
  quote: string;
  tag: string;
  verified: boolean;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'review-1',
    source: 'Google Review',
    quote: 'Super hygienic, friendly staff, and excellent design work.',
    tag: 'Studio Hygiene & Design',
    verified: true,
  },
  {
    id: 'review-2',
    source: 'Google Review',
    quote: 'Fantastic work good service must visit.',
    tag: 'Client Experience',
    verified: true,
  },
  {
    id: 'review-3',
    source: 'Google Review',
    quote: 'The artists are friendly, skilled, and give amazing custom tattoo designs.',
    tag: 'Artist Skill & Custom Art',
    verified: true,
  },
];
