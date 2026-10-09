export interface ProductIngredient {
  name: string;
  botanicalName?: string;
  description: string;
  image?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  weight: string;
  weightShort: string;
  badge?: string;
  stock: number;
  image: string;
  gallery: string[];
  rating: number;
  reviewsCount: number;
  created_at: string;
  description: string;
  highlights: string[];
  benefits: { title: string; description: string }[];
  details: { label: string; value: string }[];
  ingredients: ProductIngredient[];
  howToApply: { step: string; instruction: string }[];
  shippingInfo: { title: string; description: string }[];
  reviews: ProductReview[];
}

export const PRODUCTS: Product[] = [
  {
    id: "burgundy-hair-color",
    slug: "burgundy-natural-herbal-hair-color",
    name: "Bharathi Herbals Burgundy Natural Herbal Hair Color",
    shortName: "Burgundy Natural Herbal Hair Color",
    brand: "Bharathi Herbals",
    category: "Natural Hair Color",
    price: 149,
    originalPrice: 199,
    weight: "100 Grams",
    weightShort: "100g",
    badge: "NEW LAUNCH",
    stock: 75,
    image: "/burgundy-hair-color.jpg",
    gallery: [
      "/burgundy-hair-color.jpg",
      "/henna-powder.jpg",
      "/beetroot.jpg"
    ],
    rating: 4.9,
    reviewsCount: 84,
    created_at: "2026-10-09T00:00:00.000Z",
    description:
      "A natural herbal hair color designed to give hair a rich, elegant Burgundy shade while providing a gentle, plant-based hair-care experience. Made with pure Rajasthani henna, organic beetroot extract, amla, and hibiscus, this chemical-free formula envelops every strand in deep, radiant color while keeping hair soft, voluminous, and glossy.",
    highlights: [
      "100% Natural & Herbal",
      "Burgundy Hair Color",
      "No Ammonia",
      "No Harmful Chemicals",
      "Natural Hair Care",
      "Rich, Natural-Looking Color",
      "100 Gram Pack"
    ],
    benefits: [
      {
        title: "Rich, Elegant Burgundy Tone",
        description: "Naturally imparts an exquisite wine-burgundy tone that blends gracefully with dark and grey hair."
      },
      {
        title: "Zero Ammonia, Zero Peroxide",
        description: "Free from harsh oxidizing agents, PPD, resorcinol, and synthetic chemicals that cause dryness and damage."
      },
      {
        title: "Deep Botanical Conditioning",
        description: "Naturally coats and smooths the outer cuticle layer, leaving hair silky, tangle-free, and full of bounce."
      },
      {
        title: "Scalp Cooling & Dandruff Defense",
        description: "Herbal actives cool the scalp, regulate excess sebum, and soothe irritation with time-tested Ayurvedic care."
      },
      {
        title: "Strengthens Hair from Root to Tip",
        description: "Enriched with Amla and Hibiscus antioxidants that nourish hair roots and prevent premature breakage."
      }
    ],
    details: [
      { label: "Product Name", value: "Burgundy Natural Herbal Hair Color" },
      { label: "Brand", value: "Bharathi Herbals" },
      { label: "Category", value: "Natural Hair Color" },
      { label: "Net Weight", value: "100 Grams (Powder Form)" },
      { label: "Price", value: "₹149 (Inclusive of all taxes)" },
      { label: "Country of Origin", value: "India" },
      { label: "Formulation", value: "100% Pure Botanical Powder" },
      { label: "Suitable For", value: "Men & Women, All Hair Types" },
      { label: "Shelf Life", value: "24 Months from Mfg. Date" },
      { label: "Safety", value: "No Ammonia • No Chemicals • Cruelty Free" }
    ],
    ingredients: [
      {
        name: "Beetroot Extract (Beta Vulgaris)",
        description: "Provides the signature natural burgundy pigment while infusing the roots with potassium, iron, and scalp-healthy vitamins.",
        image: "/beetroot.jpg"
      },
      {
        name: "Pure Rajasthani Henna (Lawsonia Inermis)",
        description: "Premium triple-sifted henna powder that bonds naturally with keratin to deliver rich coloring and protective strength.",
        image: "/henna-powder.jpg"
      },
      {
        name: "Amla (Emblica Officinalis)",
        description: "Rich in Vitamin C; deepens natural pigmentation, enhances color longevity, and stimulates hair roots.",
        image: "/amla.png"
      },
      {
        name: "Hibiscus Petals (Hibiscus Rosa-Sinensis)",
        description: "Infuses vibrant reddish-burgundy undertones while functioning as a deep plant-based natural hair conditioner.",
        image: "/hibiscus.png"
      },
      {
        name: "Bhringraj (Eclipta Alba)",
        description: "Ayurvedic 'King of Herbs' that nourishes follicles, cools the scalp, and prevents premature greying.",
        image: "/bhringraj.png"
      },
      {
        name: "Curry Leaves (Murraya Koenigii)",
        description: "Packed with beta-carotene and amino acids to reinforce roots and restore healthy shine.",
        image: "/curry.png"
      }
    ],
    howToApply: [
      {
        step: "Step 1: Preparation",
        instruction: "Take the required quantity of Bharathi Herbals Burgundy powder in a clean bowl. Gradually add warm water and stir until a smooth, lump-free paste with yogurt-like consistency is formed."
      },
      {
        step: "Step 2: Section & Apply",
        instruction: "Wear gloves. Section clean, dry or slightly damp hair. Apply the paste generously from roots to tips, ensuring even coverage on grey or targeted areas."
      },
      {
        step: "Step 3: Color Development",
        instruction: "Cover with a shower cap or warm cloth. Allow the herbal color to develop naturally for 60 to 90 minutes."
      },
      {
        step: "Step 4: Gentle Rinse",
        instruction: "Rinse thoroughly with lukewarm water until the water runs clear. For best color longevity, avoid shampooing for 24-48 hours to let the herbal pigments fully oxidize."
      }
    ],
    shippingInfo: [
      {
        title: "Fast Pan-India Delivery",
        description: "Dispatched within 24 hours of confirmation. Reaches metropolitan cities in 2-3 days, and all other locations in 3-5 business days."
      },
      {
        title: "Cash on Delivery Available",
        description: "Enjoy verified Cash on Delivery (COD) as well as instant UPI/Online payments directly via WhatsApp."
      },
      {
        title: "Secure Eco-Packaging",
        description: "Sealed in food-grade airtight pouches to preserve the freshness and potency of pure botanical herbs."
      }
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Sunita Reddy",
        location: "Hyderabad",
        rating: 5,
        date: "2 days ago",
        title: "Stunning Burgundy shade without burning my scalp!",
        comment: "I have sensitive skin and chemical dyes always caused itching. Bharathi Herbals Burgundy gave my greys such a gorgeous rich wine tone, and my hair smells like fresh herbs! Absolutely loved it.",
        verified: true
      },
      {
        id: "rev-2",
        author: "Meenakshi K.",
        location: "Bangalore",
        rating: 5,
        date: "1 week ago",
        title: "Unbelievable value at ₹149",
        comment: "The color is so rich and natural looking in sunlight. It didn't dry my hair out at all—in fact, my hair felt noticeably conditioned and soft after washing. Will definitely reorder!",
        verified: true
      },
      {
        id: "rev-3",
        author: "Rajeshwari M.",
        location: "Chennai",
        rating: 5,
        date: "2 weeks ago",
        title: "Pure, authentic herbal formula",
        comment: "You can tell the ingredients are 100% genuine henna and beetroot. No chemical smell, gentle on roots, and excellent coverage. Very happy customer.",
        verified: true
      }
    ]
  },
  {
    id: "pure-herbal-hair-oil",
    slug: "pure-herbal-hair-oil",
    name: "Bharathi Herbals Pure Herbal Hair Oil",
    shortName: "Pure Herbal Hair Oil",
    brand: "Bharathi Herbals",
    category: "Hair Growth & Care",
    price: 199,
    originalPrice: 299,
    weight: "100 ml",
    weightShort: "100ml",
    badge: "BESTSELLER",
    stock: 120,
    image: "/product.png",
    gallery: [
      "/product.png",
      "/hero-bottle.png"
    ],
    rating: 4.9,
    reviewsCount: 128,
    created_at: "2026-05-20T00:00:00.000Z",
    description:
      "A time-tested blend of nature's finest herbs for strong, healthy and beautiful hair. Infused with Amla, Coconut Oil, Bhringraj, Fenugreek, and Almond Oil to nourish the scalp, stop hair fall, and trigger fast, healthy growth.",
    highlights: [
      "100% Ayurvedic Formulation",
      "Hair Growth Support",
      "Reduces Hair Fall",
      "Nourishes Scalp",
      "Adds Natural Shine",
      "Strengthens Roots",
      "100ml Premium Bottle"
    ],
    benefits: [
      {
        title: "Reduces Hair Fall Rapidly",
        description: "Strengthens follicles from within to drastically reduce shedding within 3 weeks."
      },
      {
        title: "Promotes Thick Hair Growth",
        description: "Stimulates dormant follicles to encourage healthy, dense hair volume."
      },
      {
        title: "Cooling Scalp Nourishment",
        description: "Relieves stress, deeply hydrates roots, and combats persistent dandruff naturally."
      }
    ],
    details: [
      { label: "Product Name", value: "Pure Herbal Hair Oil" },
      { label: "Brand", value: "Bharathi Herbals" },
      { label: "Category", value: "Hair Growth & Care" },
      { label: "Net Volume", value: "100 ml" },
      { label: "Price", value: "₹199 (Inclusive of all taxes)" },
      { label: "Formulation", value: "Cold-Pressed Herb Infusion" },
      { label: "Suitable For", value: "All Hair Types, Men & Women" }
    ],
    ingredients: [
      {
        name: "Amla",
        description: "Rich in Vitamin C, it strengthens follicles and halts premature greying.",
        image: "/amla.png"
      },
      {
        name: "Bhringraj",
        description: "The 'King of Herbs' for hair, promotes rapid growth and stops shedding.",
        image: "/bhringraj.png"
      },
      {
        name: "Coconut Oil",
        description: "Deeply penetrates hair shafts to restore moisture and add luxurious shine.",
        image: "/coconut.png"
      },
      {
        name: "Castor Oil",
        description: "Boosts hair density, fortifies roots, and supports natural scalp health.",
        image: "/castor.png"
      }
    ],
    howToApply: [
      {
        step: "Step 1: Apply",
        instruction: "Take 5-10 drops and massage directly into your scalp with circular fingertip motions."
      },
      {
        step: "Step 2: Leave",
        instruction: "Leave overnight or for at least 2 hours before washing with mild herbal shampoo."
      }
    ],
    shippingInfo: [
      {
        title: "Pan-India Shipping",
        description: "Dispatched within 24 hours. Reaches in 3-5 days."
      }
    ],
    reviews: [
      {
        id: "rev-oil-1",
        author: "Priya Sharma",
        location: "Hyderabad",
        rating: 5,
        date: "3 weeks ago",
        title: "Hair fall reduced dramatically!",
        comment: "My hair fall reduced within 3 weeks, and the texture feels so much softer. Highly recommend!",
        verified: true
      }
    ]
  }
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string): Product[] {
  return PRODUCTS.filter((p) => p.slug !== currentSlug);
}

export function searchProducts(query: string = "", category: string = "All"): Product[] {
  return PRODUCTS.filter((product) => {
    const matchesCategory =
      category === "All" ||
      product.category.toLowerCase() === category.toLowerCase();
    const q = query.toLowerCase().trim();
    const matchesQuery =
      !q ||
      product.name.toLowerCase().includes(q) ||
      product.shortName.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.highlights.some((h) => h.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });
}
