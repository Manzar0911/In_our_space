import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  rating: number;
};

export const ImageSlider = [
  {
    title: "Image 1",
    description: "Description 1",
    image: require("@/assets/images/Tour/Home3.png"),
    rating: 5,
  },
  {
    title: "Image 2",
    description: "Description 2",
    image: require("@/assets/images/Tour/Home2.png"),
    rating: 4,
  },
  {
    title: "Image 3",
    description: "Description 3",
    image: require("@/assets/images/Tour/Home3.png"),
    rating: 3,
  },
  {
    title: "Image 4",
    description: "Description 4",
    image: require("@/assets/images/Tour/Home2.png"),
    rating: 2,
  },
  {
    title: "Image 5",
    description: "Description 5",
    image: require("@/assets/images/Tour/Home3.png"),
    rating: 1,
  },
];
