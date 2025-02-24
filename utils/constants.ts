import Images from "@/assets/images/images";

export const PremiumFeatures = [
  {
    id: "1",
    image: Images.paywall_feature_one,
    title: "Unlimited",
    subtitle: "Plant Identify",
  },
  {
    id: "2",
    image: Images.paywall_feature_two,
    title: "Faster",
    subtitle: "Process",
  },
  {
    id: "3",
    image: Images.paywall_feature_three,
    title: "Detailed",
    subtitle: "Plant care",
  },
];

export const OfferTypes = {
  MONTHLY: "monthly",
  YEARLY: "yearly",
};

export const PremiumOffers = [
  {
    id: "1",
    type: OfferTypes.MONTHLY,
    title: "1 Month",
    subtitle: "$2.99/month, auto renewable",
  },
  {
    id: "2",
    type: OfferTypes.YEARLY,
    title: "1 Year",
    subtitle: "First 3 days free, then $529.99/year",
    badge: "Save 50%",
  },
];

export const FetchType = {
  CATEGORIES: "categories",
  QUESTIONS: "questions",
};
