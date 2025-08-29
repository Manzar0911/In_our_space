import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("screen");

// Sample data for "Why choose us" section
const whyChooseUsData = [
  {
    id: 1,
    title: "Verified Properties Only",
    description: "All properties are thoroughly verified",
    image: require("@/assets/images/Tour/Home2.png"), // Replace with your image
  },
  {
    id: 2,
    title: "Chat with Owner Anytime",
    description: "Direct communication with property owners",
    image: require("@/assets/images/Tour/Home2.png"), // Replace with your image
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Round the clock customer support",
    image: require("@/assets/images/Tour/Home2.png"), // Replace with your image
  },
  {
    id: 4,
    title: "Best Prices",
    description: "Competitive and transparent pricing",
    image: require("@/assets/images/Tour/Home2.png"), // Replace with your image
  },
];

const TwoItemScroller = ({
  data = whyChooseUsData,
  title = "Why choose us",
}) => {
  const itemWidth = (width - 60) / 2; // 60 = 20 padding on each side + 20 gap between items

  const renderItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.itemContainer, { width: itemWidth }]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.itemImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        decelerationRate="fast"
        snapToInterval={itemWidth + 10} // itemWidth + gap
        snapToAlignment="start"
      >
        {data.map(renderItem)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffde4a86",
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    paddingHorizontal: 20,
    marginBottom: 15,
    color: "#333",
    textAlign: "left",
  },
  scrollContainer: {
    paddingHorizontal: 5,
    paddingRight: 10, // Extra padding at the end
  },
  itemContainer: {
    backgroundColor: "white", // Always white background
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 140,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  imageContainer: {
    width: "95%", // 90% of the item width
    aspectRatio: 1.3, // Maintain aspect ratio like in the reference image
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    lineHeight: 16,
    paddingHorizontal: 4,
  },
  itemDescription: {
    fontSize: 10,
    color: "#666",
    textAlign: "center",
    lineHeight: 14,
    marginTop: 2,
  },
});

export default TwoItemScroller;
