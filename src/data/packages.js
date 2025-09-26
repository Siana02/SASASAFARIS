// TODO: Replace with actual package data from existing website
// TODO: Add package images to src/assets and update image paths
// TODO: Migrate package details, pricing, and descriptions from existing content

export const packages = [
  {
    id: 1,
    title: "Classic Safari Adventure",
    description: "Experience the authentic African safari with our 3-day classic package. Perfect for first-time safari goers.",
    duration: "3 days / 2 nights",
    price: 299,
    originalPrice: 399,
    image: "/assets/classic-safari.jpg", // TODO: Add actual image
    features: [
      "Professional safari guide",
      "Game drives twice daily",
      "Accommodation in safari lodge",
      "All meals included",
      "Transportation included"
    ],
    difficulty: "Easy",
    groupSize: "2-8 people",
    includes: ["Transport", "Meals", "Accommodation", "Guide"],
    excludes: ["International flights", "Personal expenses", "Tips"]
  },
  {
    id: 2,
    title: "Premium Safari Experience",
    description: "Luxury 5-day safari with premium accommodations and exclusive wildlife viewing opportunities.",
    duration: "5 days / 4 nights",
    price: 599,
    originalPrice: 799,
    image: "/assets/premium-safari.jpg", // TODO: Add actual image
    features: [
      "Expert wildlife photographer guide",
      "Luxury tented camp accommodation",
      "Private vehicle for your group",
      "Gourmet meals and beverages",
      "Airport transfers included",
      "Photography equipment provided"
    ],
    difficulty: "Moderate",
    groupSize: "2-6 people",
    includes: ["Private transport", "All meals", "Luxury accommodation", "Professional guide", "Photography gear"],
    excludes: ["International flights", "Personal expenses", "Gratuities"]
  },
  {
    id: 3,
    title: "Family Safari Adventure",
    description: "Family-friendly 4-day safari designed for adventurers of all ages with kid-friendly activities.",
    duration: "4 days / 3 nights",
    price: 449,
    originalPrice: 549,
    image: "/assets/family-safari.jpg", // TODO: Add actual image
    features: [
      "Family-specialized guide",
      "Kid-friendly activities",
      "Family accommodation options",
      "Educational wildlife programs",
      "Safe and comfortable vehicles",
      "Flexible itinerary"
    ],
    difficulty: "Easy",
    groupSize: "2-10 people",
    includes: ["Family transport", "All meals", "Family rooms", "Guide", "Activities"],
    excludes: ["Flights", "Personal items", "Optional activities"]
  },
  {
    id: 4,
    title: "Photography Safari",
    description: "7-day specialized safari for photography enthusiasts with expert guidance and prime locations.",
    duration: "7 days / 6 nights",
    price: 899,
    originalPrice: 1199,
    image: "/assets/photography-safari.jpg", // TODO: Add actual image
    features: [
      "Professional photography guide",
      "Early morning and late evening shoots",
      "Best wildlife photography locations",
      "Photo editing workshops",
      "High-end camera equipment available",
      "Small group for better positioning"
    ],
    difficulty: "Moderate",
    groupSize: "2-4 people",
    includes: ["Specialized transport", "All meals", "Photography guide", "Equipment rental", "Workshops"],
    excludes: ["Flights", "Personal camera gear", "Photo processing software"]
  }
];

export const packageCategories = [
  "All Packages",
  "Budget Friendly",
  "Luxury",
  "Family",
  "Adventure",
  "Photography"
];

// TODO: Add filtering and sorting functions
export const getPackagesByCategory = (category) => {
  if (category === "All Packages") return packages;
  // Add filtering logic based on package properties
  return packages;
};

export const getFeaturedPackages = () => {
  return packages.slice(0, 3);
};