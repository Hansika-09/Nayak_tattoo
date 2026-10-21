export interface InstagramPost {
  id: string;
  postUrl: string;
  image: string;
  caption: string;
  tags: string[];
  likesCount?: string;
  dateLabel: string;
  type?: 'photo' | 'reel';
}

/**
 * Curated Instagram posts showcasing studio art from @nayak_tattooz2019.
 * Studio owners can easily update or add URLs to new posts here.
 */
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    postUrl: 'https://www.instagram.com/nayak_tattooz2019/',
    image: '/images/tattoos/nt1.jpg',
    caption: 'Custom piece inked with precision. Every line crafted to match the client’s story. #nayaktattoostudio #bangaloretattoo #customtattoo',
    tags: ['#customink', '#bangaloretattoo', '#electroniccity'],
    likesCount: 'Studio Favorite',
    dateLabel: 'Featured Work',
    type: 'photo',
  },
  {
    id: 'ig-2',
    postUrl: 'https://www.instagram.com/nayak_tattooz2019/',
    image: '/images/piercings/nt6.jpg',
    caption: 'Clean, sterile ear piercing session. 100% single-use needles and premium grade jewelry for seamless healing.',
    tags: ['#piercingbangalore', '#bodypiercing', '#hygienicstudio'],
    likesCount: 'Recent Session',
    dateLabel: 'Studio Update',
    type: 'photo',
  },
  {
    id: 'ig-3',
    postUrl: 'https://www.instagram.com/nayak_tattooz2019/',
    image: '/images/tattoos/nt2.jpg',
    caption: 'Fine line perfection. Subtle details that make all the difference. Inked by Mr. Sanju at Nayak Tattoo Studio.',
    tags: ['#fineline', '#tattooinspiration', '#electroniccitytattoos'],
    likesCount: 'Trending',
    dateLabel: 'Latest Reel',
    type: 'reel',
  },
  {
    id: 'ig-4',
    postUrl: 'https://www.instagram.com/nayak_tattooz2019/',
    image: '/images/piercings/nt9.jpg',
    caption: 'Precision facial stud placement. Subtle aesthetic that elevates your personal style.',
    tags: ['#facialpiercing', '#bangalorepiercing', '#nayaktattooz'],
    likesCount: 'Client Love',
    dateLabel: 'Studio Spotlight',
    type: 'photo',
  },
  {
    id: 'ig-5',
    postUrl: 'https://www.instagram.com/nayak_tattooz2019/',
    image: '/images/tattoos/nt4.jpg',
    caption: 'Dynamic concept artwork completed in studio today. Thank you for trusting us with your body art!',
    tags: ['#tattoolover', '#bangaloreink', '#artistsoninstagram'],
    likesCount: 'New Release',
    dateLabel: 'Studio Story',
    type: 'photo',
  },
];
