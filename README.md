# Nayak_tattoo

# Nayak Tattoo Studio — Official Website

> **Bold, Artistic & Premium Web Experience for Nayak Tattoo Studio**  
> Custom Tattoos | Cover-Ups | Fine Line | Body Piercings  
> Electronic City, Bangalore, Karnataka, India

---

## 🌟 Overview

A responsive, dark-luxury web experience designed and built for **Nayak Tattoo Studio**, located in Electronic City, Bangalore. Under the artistry of lead artist **Mr. Sanju**, the studio transforms personal narratives into timeless body art and precision body piercings.

The website delivers:
- **Dark Luxury Aesthetic:** `#0B0B0B` near-black foundation, `#151515` charcoal surfaces, and `#C6A56B` muted antique gold accents.
- **Editorial Typography:** Google Fonts (`Bebas Neue`, `Oswald`, and `Inter`).
- **Direct WhatsApp Conversions:** Seamless click-to-chat integration (`+91 7996761346`) with contextual prefilled messages for appointments, custom tattoos, cover-ups, and piercings.
- **Dedicated Portfolios:** Separate, organized galleries for **Tattoos** and **Piercings** with interactive full-screen lightboxes, keyboard navigation (`Esc`, `←`, `→`), and touch support.
- **Instagram Showcase:** Horizontally scrollable studio feed showcasing work from [`@nayak_tattooz2019`](https://www.instagram.com/nayak_tattooz2019/).
- **Verified Google Reviews:** Authentic customer feedback highlighting studio hygiene, craftsmanship, and customer experience.
- **Studio Protocol & Hygiene:** Highlighting 100% single-use sterile needles, medical-grade barrier protection, and personalized aftercare guidance.
- **Interactive Location & Map:** Embedded Google Map with direct one-click navigation to Konappana Agrahara, Electronic City.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Bebas Neue, Oswald, Inter via Google Fonts

---

## 📁 Project Architecture

```
nayak_tattoos/
├── public/
│   ├── images/
│   │   ├── logo.jpg               # Official Nayak Tattoo Studio logo
│   │   ├── tattoos/               # Tattoo portfolio images (nt1.jpg – nt5.jpg)
│   │   └── piercings/             # Piercing portfolio images (nt6.jpg – nt10.jpg)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── InstagramIcon.tsx  # Custom SVG Instagram icon
│   │   ├── About.tsx              # Studio introduction & artist Mr. Sanju
│   │   ├── ContactSection.tsx     # Location, contacts & embedded Google Map
│   │   ├── CustomerReviews.tsx    # Verified Google customer reviews
│   │   ├── FloatingWhatsApp.tsx   # Persistent floating WhatsApp booking widget
│   │   ├── Footer.tsx             # Studio wordmark, navigation & copyright
│   │   ├── Hero.tsx               # Fullscreen hero with trust badges & CTAs
│   │   ├── HygieneStandards.tsx   # 4-step sterile studio protocol
│   │   ├── InstagramCarousel.tsx  # Horizontally scrollable Instagram showcase
│   │   ├── LightboxModal.tsx      # Reusable gallery lightbox with keyboard/touch nav
│   │   ├── Navbar.tsx             # Sticky luxury navbar with mobile drawer
│   │   ├── PiercingGallery.tsx    # Dedicated body piercing gallery
│   │   ├── Services.tsx           # 8 core studio services with WhatsApp buttons
│   │   └── TattooGallery.tsx      # Custom tattoo portfolio grid
│   ├── data/
│   │   ├── galleryData.ts         # Easy-to-edit tattoo & piercing image data
│   │   ├── instagramData.ts       # Instagram post URLs & captions data
│   │   ├── reviewsData.ts         # Google reviews data
│   │   ├── servicesData.ts        # Services descriptions & WhatsApp messages
│   │   └── studioInfo.ts          # Studio phone, address, and links config
│   ├── App.tsx                    # Main application assembly
│   ├── index.css                  # Global styles, fonts, and dark theme
│   └── main.tsx                   # React root entry
├── index.html                     # SEO & Open Graph metadata
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Running the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hansika-09/Nayak_tattoo.git
   cd Nayak_tattoo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🎨 How to Update Images and Content

All studio content is decoupled into clean, typed data files in `src/data/`:

### 1. Adding or Replacing Tattoo Images
- Place new images in `public/images/tattoos/` (e.g., `nt6.jpg`).
- Open `src/data/galleryData.ts` and add a new entry to `TATTOO_GALLERY`:
  ```ts
  {
    id: 'tattoo-6',
    title: 'Your Tattoo Title',
    category: 'Fine-Line',
    image: '/images/tattoos/nt6.jpg',
    alt: 'Description of the tattoo',
    description: 'Detailed description of the artwork.',
    tags: ['Custom', 'Ink'],
    enquiryMessage: "Hi Nayak Tattoo Studio! I'm interested in this design...",
  }
  ```

### 2. Adding or Replacing Piercing Images
- Place new images in `public/images/piercings/` (e.g., `nt11.jpg`).
- Open `src/data/galleryData.ts` and update `PIERCING_GALLERY`.

### 3. Updating Instagram Posts
- Open `src/data/instagramData.ts`.
- Update `postUrl`, `image`, `caption`, and `tags` with links from [`@nayak_tattooz2019`](https://www.instagram.com/nayak_tattooz2019/).

### 4. Updating Contact Details or Phone
- Open `src/data/studioInfo.ts` and update `phone`, `address`, or `whatsappNumber`.

---

## 🌐 Deploying to Vercel

Deploying this website to Vercel takes less than 2 minutes:

### Option A: Via GitHub (Recommended)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Nayak Tattoo Studio website"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** → **"Project"**.
4. Select the **`Hansika-09/Nayak_tattoo`** repository.
5. In the project configuration:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Vercel will automatically build and provide a live production URL with automatic HTTPS and global CDN caching.

---

## 📍 Studio Details

- **Studio Name:** Nayak Tattoo Studio
- **Lead Artist:** Mr. Sanju
- **Instagram:** [@nayak_tattooz2019](https://www.instagram.com/nayak_tattooz2019/)
- **Phone / WhatsApp:** [+91 7996761346](https://wa.me/917996761346)
- **Address:** Muniswamy Layout, Narayana Reddy Layout, Konappana Agrahara, Electronic City, Bangalore, Karnataka 560100
- **Directions:** [Google Maps Directions](https://www.google.com/maps/search/?api=1&query=Nayak+Tattoo+Studio+Electronic+City+Bangalore)

---

## 📄 License

© Nayak Tattoo Studio. All rights reserved.
