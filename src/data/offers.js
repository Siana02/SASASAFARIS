// TODO: Replace with actual offer data from existing website
// TODO: Add offer images to src/assets and update image paths
// TODO: Migrate offer details, discount codes, and expiry dates from existing content

export const offers = [
  {
    id: 1,
    title: "Early Bird Special",
    description: "Book your safari 3 months in advance and save big! Perfect for planners who like to secure the best deals.",
    discount: 20,
    discountType: "percentage", // "percentage" or "fixed"
    code: "EARLYBIRD20",
    validUntil: "2024-12-31",
    image: "/src/assets/early-bird-offer.jpg", // TODO: Add actual image
    badge: "Limited Time",
    badgeColor: "orange",
    terms: [
      "Must book 3 months in advance",
      "Valid for all safari packages",
      "Cannot be combined with other offers",
      "Non-refundable deposit required"
    ],
    applicablePackages: ["all"], // or array of package IDs
    isActive: true,
    priority: 1
  },
  {
    id: 2,
    title: "Group Adventure Discount",
    description: "Bring your friends and family! Groups of 5 or more people get an exclusive discount on all packages.",
    discount: 15,
    discountType: "percentage",
    code: "GROUP15",
    validUntil: "2024-11-30",
    image: "/src/assets/group-discount-offer.jpg", // TODO: Add actual image
    badge: "Popular",
    badgeColor: "green",
    terms: [
      "Minimum 5 people required",
      "All group members must book together",
      "Valid for all safari packages",
      "Group leader gets additional 5% off"
    ],
    applicablePackages: ["all"],
    isActive: true,
    priority: 2
  },
  {
    id: 3,
    title: "Weekend Explorer Package",
    description: "Perfect for a quick getaway! Our specially designed 2-day weekend safari at an unbeatable price.",
    discount: 199,
    discountType: "fixed",
    code: "WEEKEND199",
    validUntil: "2024-10-31",
    image: "/src/assets/weekend-explorer-offer.jpg", // TODO: Add actual image
    badge: "New",
    badgeColor: "blue",
    terms: [
      "Weekend bookings only (Fri-Sun)",
      "2-day package only",
      "Subject to availability",
      "Includes accommodation and meals"
    ],
    applicablePackages: [1], // Only applies to specific packages
    isActive: true,
    priority: 3
  },
  {
    id: 4,
    title: "Photography Masterclass Bonus",
    description: "Book any photography safari and get a free 2-hour masterclass with a professional wildlife photographer.",
    discount: 0,
    discountType: "bonus",
    code: "PHOTOCLASS",
    validUntil: "2024-12-15",
    image: "/src/assets/photography-bonus-offer.jpg", // TODO: Add actual image
    badge: "Exclusive",
    badgeColor: "purple",
    terms: [
      "Valid for photography safari packages only",
      "Masterclass must be scheduled within 30 days",
      "Limited to 10 participants per month",
      "Includes photo editing session"
    ],
    applicablePackages: [4], // Only applies to photography safari
    isActive: true,
    priority: 4
  },
  {
    id: 5,
    title: "First-Timer's Welcome",
    description: "New to safari adventures? Get a special welcome discount on your first booking with us!",
    discount: 10,
    discountType: "percentage",
    code: "WELCOME10",
    validUntil: "2024-12-31",
    image: "/src/assets/first-timer-offer.jpg", // TODO: Add actual image
    badge: "Welcome",
    badgeColor: "yellow",
    terms: [
      "First-time customers only",
      "Valid for any safari package",
      "Cannot be combined with other discounts",
      "ID verification required"
    ],
    applicablePackages: ["all"],
    isActive: true,
    priority: 5
  }
];

export const offerCategories = [
  "All Offers",
  "Percentage Discounts",
  "Fixed Price Deals",
  "Bonus Offers",
  "Limited Time"
];

// TODO: Add utility functions for offer management
export const getActiveOffers = () => {
  return offers.filter(offer => offer.isActive);
};

export const getOffersByCategory = (category) => {
  if (category === "All Offers") return offers;
  
  switch (category) {
    case "Percentage Discounts":
      return offers.filter(offer => offer.discountType === "percentage");
    case "Fixed Price Deals":
      return offers.filter(offer => offer.discountType === "fixed");
    case "Bonus Offers":
      return offers.filter(offer => offer.discountType === "bonus");
    case "Limited Time":
      return offers.filter(offer => offer.badge === "Limited Time");
    default:
      return offers;
  }
};

export const getFeaturedOffers = () => {
  return offers.sort((a, b) => a.priority - b.priority).slice(0, 3);
};

export const validateOfferCode = (code) => {
  const offer = offers.find(o => o.code === code && o.isActive);
  if (!offer) return { valid: false, message: "Invalid offer code" };
  
  const currentDate = new Date();
  const expiryDate = new Date(offer.validUntil);
  
  if (currentDate > expiryDate) {
    return { valid: false, message: "Offer has expired" };
  }
  
  return { valid: true, offer };
};