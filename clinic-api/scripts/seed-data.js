const services = [
  {
    name: "Acne, Acne Marks and Acne Scars",
    slug: "acne-scars",
    description: "Clear acne, fade marks and smooth scar texture with personalized dermatologist-led protocols.",
    consultFee: 500,
    category: "Skin clarity",
    imageUrl: "/assets/services/service1.jpg",
  },
  {
    name: "Pigmentation Treatment",
    slug: "pigmentation",
    description: "Reduce dark spots, melasma and uneven tone with safe clinical care.",
    consultFee: 500,
    category: "Tone correction",
    imageUrl: "/assets/services/service2.jpg",
  },
  {
    name: "Hairfall and Alopecia Solution",
    slug: "hairfall-alopecia",
    description: "Improve scalp health and treat hair fall, alopecia and dandruff concerns.",
    consultFee: 500,
    category: "Hair growth",
    imageUrl: "/assets/services/service3.webp",
  },
  {
    name: "Laser Hair Removal and Skin Lightening",
    slug: "laser-care",
    description: "Advanced laser care for smoother skin, lightening and acne-related concerns.",
    consultFee: 700,
    category: "Laser clinic",
    imageUrl: "/assets/services/service4.avif",
  },
  {
    name: "Dermatology Care",
    slug: "dermatology",
    description: "Clinical treatment for eczema, psoriasis, infections, vitiligo and nail disorders.",
    consultFee: 500,
    category: "Medical skin",
    imageUrl: "/assets/services/laser.png",
  },
  {
    name: "Paediatric Dermatology",
    slug: "paediatric-dermatology",
    description: "Gentle treatment plans for delicate young skin and common childhood concerns.",
    consultFee: 500,
    category: "Child skin care",
    imageUrl: "/assets/hero/carousel4.1.png",
  },
  {
    name: "Hair Transplantation",
    slug: "hair-transplantation",
    description: "Natural restoration with FUE and FUT techniques and minimal downtime.",
    consultFee: 1000,
    category: "Restoration",
    imageUrl: "/assets/hero/carousel5.png",
  },
  {
    name: "Dermato Surgery",
    slug: "dermato-surgery",
    description: "Mole removal, cyst removal, scar revision and selected vitiligo surgery support.",
    consultFee: 700,
    category: "Surgical care",
    imageUrl: "/assets/hero/carousel6.png",
  },
];

const doctors = [
  {
    name: "Dr. Suman Singh K M",
    slug: "dr-suman-singh-k-m",
    specialization: "Dermatologist",
    qualification: "MBBS, MD - DVL",
    bio: "Specialist in clinical dermatology, hair disorders, laser treatments and cosmetic skin procedures.",
    photoUrl: "/assets/hero/carousel2.png",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
];

const galleryItems = [
  { title: "Clinic Gallery 1", imageUrl: "/assets/gallery/gallery2.jpg", sortOrder: 1 },
  { title: "Clinic Gallery 2", imageUrl: "/assets/gallery/gallery3.jpg", sortOrder: 2 },
  { title: "Clinic Gallery 3", imageUrl: "/assets/gallery/gallery4.jpg", sortOrder: 3 },
  { title: "Clinic Gallery 4", imageUrl: "/assets/gallery/gallery6.jpg", sortOrder: 4 },
  { title: "Clinic Gallery 5", imageUrl: "/assets/gallery/gallery7.jpg", sortOrder: 5 },
];

module.exports = {
  services,
  doctors,
  galleryItems,
};
