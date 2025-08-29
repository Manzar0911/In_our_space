import { ImageSliderType } from "@/data/SliderData";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  item: ImageSliderType;
  index: number;
  scrollX: SharedValue<number>;
  cardStyle?: "large" | "medium" | "small";
};

const { width } = Dimensions.get("screen");

const SliderItem = ({ item, index, scrollX, cardStyle = "medium" }: Props) => {
  // Sizes based on design
  const cardSizes = {
    large: { width: width, height: 240 },
    medium: { width: width, height: 200 },
    small: { width: width, height: 160 },
  };

  const size = cardSizes[cardStyle];

  // Animate only the scale
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9], // zoom in center, zoom out sides
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
      {/* Main image */}
      <Image
        source={item.image}
        style={{ width: size.width, height: size.height, borderRadius: 16 }}
        resizeMode="cover"
      />

      {/* Top Right Favorite Icon */}
      {/* <TouchableOpacity style={styles.heartContainer}>
        <Ionicons name="heart-outline" size={20} color="#fff" />
      </TouchableOpacity> */}

      {/* Bottom White Card */}
      <View style={[styles.bottomCard]}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#F5A623" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemContainer: {
    width, // keeps each slide occupying the screen width
    alignItems: "center",
    justifyContent: "center",
  },
  heartContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 20,
    padding: 6,
  },
  bottomCard: {
    width: width,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    opacity: 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#000",
    fontSize: 15,
    fontWeight: "600",
  },
  description: {
    color: "#000",
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginRight: 30,
  },
  ratingText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
  },
});
