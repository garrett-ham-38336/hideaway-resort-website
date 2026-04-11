/**
 * Photo data for Hideaway Resort website.
 *
 * Cabin photos: hosted locally in /images/cabins/{slug}/.
 * Each cabin has:
 *   - hero.jpg   (1200×800) — detail page hero
 *   - card.jpg   (600×400)  — cabin card thumbnail
 *   - gallery-{n}.jpg (800×600) — gallery grid images
 *
 * Resort photos: hosted locally in /images/resort/.
 */

export interface CabinPhotos {
  slug: string;
  /** Local path to hero image */
  hero: string;
  /** Local path to card-size thumbnail */
  card: string;
  /** Local paths to gallery images */
  gallery: string[];
}

/**
 * Build local photo paths for a cabin.
 */
function cabinPaths(slug: string, galleryCount: number): CabinPhotos {
  const base = `/images/cabins/${slug}`;
  return {
    slug,
    hero: `${base}/hero.jpg`,
    card: `${base}/card.jpg`,
    gallery: Array.from({ length: galleryCount }, (_, i) => `${base}/gallery-${i + 1}.jpg`),
  };
}

/**
 * All cabin photo data — locally hosted images sourced from Guesty.
 */
export const cabinPhotos: CabinPhotos[] = [
  cabinPaths("lake-life-cabin", 4),
  cabinPaths("clear-water-cabin", 4),
  cabinPaths("big-fish-cabin", 4),
  cabinPaths("red-cedar-cabin", 4),
  cabinPaths("dogwood-cabin", 4),
  cabinPaths("crest-view-cabin", 4),
  cabinPaths("blue-heron-cabin", 4),
  cabinPaths("skyline-cabin", 4),
  cabinPaths("trails-end-cabin", 4),
  cabinPaths("rock-haven-cottage", 4),
  cabinPaths("hideaway-lodge", 4),
  cabinPaths("love-shack", 4),
  cabinPaths("duplex-cabin", 4),
  cabinPaths("rent-a-lake", 0),
];

/** Utility: get photos for a cabin by slug */
export function getPhotosForCabin(slug: string): CabinPhotos | undefined {
  return cabinPhotos.find((p) => p.slug === slug);
}

/**
 * Resort-wide photos sourced from Guesty property galleries.
 * Images are stored locally in /images/resort/ (downloaded from Guesty CDN).
 * Organized by category for use on Home, Amenities, Location, and Gallery pages.
 */
export interface ResortPhoto {
  url: string;
  alt: string;
}

export const resortPhotos = {
  pool: [
    {
      url: "/images/resort/pool-1.jpg",
      alt: "Hideaway Resort swimming pool",
    },
  ],
  dock: [
    {
      url: "/images/resort/dock-1.jpg",
      alt: "Private dock with boats on Table Rock Lake",
    },
    {
      url: "/images/resort/dock-2.jpg",
      alt: "Covered deck overlooking the lake",
    },
  ],
  firePit: [
    {
      url: "/images/resort/firepit-1.jpg",
      alt: "Lakeside fire pit area with resort grounds",
    },
  ],
  lake: [
    {
      url: "/images/resort/lake-1.jpg",
      alt: "Table Rock Lake view with dock and hills",
    },
    {
      url: "/images/resort/lake-2.jpg",
      alt: "Lakefront seating area with Adirondack chairs",
    },
    {
      url: "/images/resort/lake-3.jpg",
      alt: "Aerial view of Hideaway Resort on Table Rock Lake",
    },
  ],
  grounds: [
    {
      url: "/images/resort/grounds-1.jpg",
      alt: "Covered picnic pavilion",
    },
    {
      url: "/images/resort/grounds-2.jpg",
      alt: "Covered patio and lawn area",
    },
    {
      url: "/images/resort/grounds-3.jpg",
      alt: "Hideaway Resort entrance sign",
    },
  ],
  recreation: [
    {
      url: "/images/resort/recreation-1.jpg",
      alt: "Playground under the trees",
    },
    {
      url: "/images/resort/recreation-2.jpg",
      alt: "Covered deck with panoramic lake view",
    },
  ],
} as const;

/** Flat list of all resort photos for gallery pages */
export function getAllResortPhotos(): ResortPhoto[] {
  return Object.values(resortPhotos).flat();
}

/** Hero image for the home page — aerial/lake view */
export const homeHeroPhoto = resortPhotos.lake[2]; // Aerial view
