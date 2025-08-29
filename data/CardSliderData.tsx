// types/CardTypes.ts
import { ImageSourcePropType } from "react-native";

export interface CardData {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  iconImage: ImageSourcePropType;
  backgroundImage: ImageSourcePropType;
  fallbackBackgroundColor?: string; // Optional fallback color
  iconTintColor?: string; // Optional tint color for icon
}

export const cardSliderData: CardData[] = [
  {
    id: "1",
    title: "Cities Covered",
    subtitle: "Popular PGs",
    value: "240",
    iconImage: require("@/assets/images/Tour/eb676b76bb6b03878241291f9fc472 1.png"), // Replace with your actual icon path
    backgroundImage: require("@/assets/images/Tour/Rectangle 230.png"),
    fallbackBackgroundColor: "#E3F2FD",
    iconTintColor: "#2196F3",
  },
  {
    id: "2",
    title: "Total Users Registered",
    subtitle: "Available Now",
    value: "1,250",
    iconImage: require("@/assets/images/Tour/ab5b9obad 1.png"), // Replace with your actual icon path
    backgroundImage: require("@/assets/images/Tour/Rectangle 227.png"),
    fallbackBackgroundColor: "#F3E5F5",
    iconTintColor: "#9C27B0",
  },
  {
    id: "3",
    title: "Rating Recieved",
    subtitle: "Satisfied Users",
    value: "8.5K",
    iconImage: require("@/assets/images/Tour/acxf2emk8-removebg-preview 1.png"), // Replace with your actual icon path
    backgroundImage: require("@/assets/images/Tour/Rectangle 224.png"),
    fallbackBackgroundColor: "#E8F5E8",
    iconTintColor: "#4CAF50",
  },
  // {
  //   id: "4",
  //   title: "Years Experience",
  //   subtitle: "In Business",
  //   value: "8+",
  //   iconImage: require("@/assets/images/icons/star-icon.png"), // Replace with your actual icon path
  //   backgroundImage: require("@/assets/images/backgrounds/Rectangle230.png"), // Reusing background
  //   fallbackBackgroundColor: "#FFF3E0",
  //   iconTintColor: "#FF9800",
  // },
  // {
  //   id: "5",
  //   title: "Properties",
  //   subtitle: "Premium Locations",
  //   value: "890",
  //   iconImage: require("@/assets/images/icons/property-icon.png"), // Replace with your actual icon path
  //   backgroundImage: require("@/assets/images/backgrounds/Rectangle227.png"), // Reusing background
  //   fallbackBackgroundColor: "#FFEBEE",
  //   iconTintColor: "#F44336",
  // },
];
