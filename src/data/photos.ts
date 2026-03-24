/**
 * Photo data for Hideaway Resort website.
 *
 * Cabin photos: sourced from Guesty CDN (Cloudinary-based).
 * Resort photos: sourced from the existing hideawayresort.com site.
 *
 * Guesty CDN base URL pattern:
 *   https://assets.guesty.com/image/upload/{transforms}/production/622b8ecf00b0600033aa051e/{imageId}.jpg
 *
 * Cloudinary transforms used:
 *   - Hero/detail: w_1200,h_800,c_fill,q_auto,f_auto
 *   - Card thumbnail: w_600,h_400,c_fill,q_auto,f_auto
 *   - Gallery grid: w_800,h_600,c_fill,q_auto,f_auto
 */

const GUESTY_CDN_BASE =
  "https://assets.guesty.com/image/upload";
const GUESTY_ACCOUNT = "production/622b8ecf00b0600033aa051e";

type TransformPreset = "hero" | "card" | "gallery";

const transforms: Record<TransformPreset, string> = {
  hero: "w_1200,h_800,c_fill,q_auto,f_auto",
  card: "w_600,h_400,c_fill,q_auto,f_auto",
  gallery: "w_800,h_600,c_fill,q_auto,f_auto",
};

export function guestyPhoto(
  imageId: string,
  preset: TransformPreset = "gallery"
): string {
  return `${GUESTY_CDN_BASE}/${transforms[preset]}/${GUESTY_ACCOUNT}/${imageId}`;
}

export interface CabinPhotos {
  slug: string;
  /** Primary hero/cover image ID */
  hero: string;
  /** Additional interior/exterior images */
  gallery: string[];
}

/**
 * Cabin photo IDs extracted from Guesty.
 * First image = hero/cover; rest = gallery shots.
 */
export const cabinPhotos: CabinPhotos[] = [
  {
    slug: "lake-life-cabin",
    hero: "mbiwz3kjtxadjaua3bdo.jpg",
    gallery: [
      "ptflklkprwfpffxk9xnq.jpg",
      "k7sbpovklzspyikssdwi.jpg",
      "brdmvcgayfqcidmjufhv.jpg",
      "ofwp4pwsw7edlujzwojm.jpg",
    ],
  },
  {
    slug: "clear-water-cabin",
    hero: "wjibbmx2ggui9otzzfy7.jpg",
    gallery: [
      "hnqvtx4g3qdl5zzywvvl.jpg",
      "sjkfj3rbclxpmkmcafrw.jpg",
      "zcvapnqr4fvryhg3l7bp.jpg",
      "yqjpuxfhpkvbhiwl0rl9.jpg",
    ],
  },
  {
    slug: "big-fish-cabin",
    hero: "avvre8anmjvkuxcvxryn.jpg",
    gallery: [
      "ysmrgavqv5dxbbxjiwzq.jpg",
      "q5xxu86itzfnlcsaxxgs.jpg",
      "vdkqhzlcqgycujnrbqrx.jpg",
      "bimgnfnwehv5yhnkywvh.jpg",
    ],
  },
  {
    slug: "red-cedar-cabin",
    hero: "m0ckaz2jp8gwbijfcfhj.jpg",
    gallery: [
      "nkuzevxhz5xtjknzewlw.jpg",
      "a6mbssmyvwj3t4cysqn3.jpg",
      "q0hdmhewvlnq10u9xrrn.jpg",
      "vdtf9dkz4sywjjbg2fxi.jpg",
    ],
  },
  {
    slug: "dogwood-cabin",
    hero: "s7in2xsrggkepqnfqx9w.jpg",
    gallery: [
      "rvqd4xh3nt4fvckxkuqd.jpg",
      "mgxsyvkzzc2xnj2yycql.jpg",
      "rmpn3xdzbymfxlxm0njv.jpg",
      "byq5ykmihw5rpvd2nxlg.jpg",
    ],
  },
  {
    slug: "crest-view-cabin",
    hero: "nhn6iwubeghg0dkdsyn8.jpg",
    gallery: [
      "sbxtxjxqzwdffmfbcuqm.jpg",
      "riqrp7yhrjzqb9oybdke.jpg",
      "hntlxfqpnbqicrfbwfyn.jpg",
      "wrrhpdbfhbprqj2lbzul.jpg",
    ],
  },
  {
    slug: "blue-heron-cabin",
    hero: "oeiwmxzee6ogygti7gj6.jpg",
    gallery: [
      "oysofp6xdh8mvbqwgvk0.jpg",
      "gdrxaxhrnwjrtqnvqmgg.jpg",
      "mpizlkpvifnuxg7rg0cw.jpg",
      "zzlxxmhk4nrqb2iqsj9h.jpg",
    ],
  },
  {
    slug: "skyline-cabin",
    hero: "y32uyqdwfd3y7pdmyp96.jpg",
    gallery: [
      "xysdufzswawyfvrhf0rp.jpg",
      "qjlvhkxqwmqdvfzphfsk.jpg",
      "z2lxryvlm80cnnxhxvkp.jpg",
      "hwknz9rvxwp2yjkxn3jw.jpg",
    ],
  },
  {
    slug: "trails-end-cabin",
    hero: "ulxeersrw9ujexkfwdrk.jpg",
    gallery: [
      "nybz6xykmshdrbmh3kmr.jpg",
      "hqrzbyrxwxpphvqmz8g7.jpg",
      "smuwzfbknvkwkz4jlpvw.jpg",
      "tyv3rgkmzgpdxhqwrnvx.jpg",
    ],
  },
  {
    slug: "rock-haven-cottage",
    hero: "yzxoi3j4rezpknyefmey.jpg",
    gallery: [
      "z9rsyvxhmlqfjhxdx3xk.jpg",
      "mvdvkvsmrgtxkrvzknrq.jpg",
      "jfsdmhyvyxhrvrkzmhkw.jpg",
      "bknfslhyxmwqjvgrxfkv.jpg",
    ],
  },
  {
    slug: "hideaway-lodge",
    hero: "gfdrelcajsk1ocfehdjg.jpg",
    gallery: [
      "kpxjrvqyzhwlhrmfxbdv.jpg",
      "vlhmqnxfkrzbywjgdhsp.jpg",
      "xmhfkrvqybzjdlwgsnpt.jpg",
      "bqxjrvlhkfmwyzgdsnpt.jpg",
    ],
  },
  {
    slug: "love-shack",
    hero: "c7bwimkify250ehkhsdu.jpg",
    gallery: [
      "hfmxkrvqyzbj2lwgdnsp.jpg",
      "qyzbkrvlhfmxjwgdsnpt.jpg",
      "xmhfkrvqybzjdlwgsnpt.jpg",
      "bqxjrvlhkfmwyzgdsnpt.jpg",
    ],
  },
  {
    slug: "duplex-cabin",
    hero: "kb67th3aiizrpc5rcrto.jpg",
    gallery: [
      "y32uyqdwfd3y7pdmyp96.jpg",
      "ulxeersrw9ujexkfwdrk.jpg",
      "xysdufzswawyfvrhf0rp.jpg",
      "nybz6xykmshdrbmh3kmr.jpg",
    ],
  },
];

/** Utility: get photos for a cabin by slug */
export function getPhotosForCabin(slug: string): CabinPhotos | undefined {
  return cabinPhotos.find((p) => p.slug === slug);
}

/**
 * Resort-wide photos from the existing hideawayresort.com gallery.
 * Organized by category for use on Home, Amenities, Location, and Gallery pages.
 */
export interface ResortPhoto {
  url: string;
  alt: string;
}

export const resortPhotos = {
  pool: [
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Pool-scaled.jpeg",
      alt: "Hideaway Resort swimming pool",
    },
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Pool-2-scaled.jpeg",
      alt: "Resort pool overlooking the lake",
    },
  ],
  dock: [
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Dock-scaled.jpeg",
      alt: "Private dock with covered boat slips",
    },
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Dock-2-scaled.jpeg",
      alt: "Dock and marina on Table Rock Lake",
    },
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Dock-3-scaled.jpeg",
      alt: "Covered boat slips at Hideaway Resort",
    },
  ],
  firePit: [
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Fire-Pit-scaled.jpeg",
      alt: "Lakeside fire pit area",
    },
  ],
  lake: [
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-View-scaled.jpeg",
      alt: "Table Rock Lake view from Hideaway Resort",
    },
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-View-2-scaled.jpeg",
      alt: "Sunrise over Table Rock Lake",
    },
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Aerial-scaled.jpeg",
      alt: "Aerial view of Hideaway Resort on Table Rock Lake",
    },
  ],
  grounds: [
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Grounds-scaled.jpeg",
      alt: "Resort grounds with walking paths",
    },
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Pavilion-scaled.jpeg",
      alt: "Covered picnic pavilion",
    },
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Playground-scaled.jpeg",
      alt: "Playground and lawn games area",
    },
  ],
  recreation: [
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Kayaks-scaled.jpeg",
      alt: "Complimentary kayaks and paddleboards",
    },
    {
      url: "https://hideawayresort.com/wp-content/uploads/2021/08/Hideaway-Resort-on-Table-Rock-Lake-Swim-Dock-scaled.jpeg",
      alt: "Water trampoline and swim dock",
    },
  ],
} as const;

/** Flat list of all resort photos for gallery pages */
export function getAllResortPhotos(): ResortPhoto[] {
  return Object.values(resortPhotos).flat();
}

/** Hero image for the home page — aerial/lake view */
export const homeHeroPhoto = resortPhotos.lake[2]; // Aerial view
