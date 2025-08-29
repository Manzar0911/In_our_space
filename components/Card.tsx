// components/Card.tsx
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CardData } from "../data/CardSliderData";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;

interface CardProps {
  item: CardData;
  index: number;
  isActive: boolean;
}

const Card: React.FC<CardProps> = ({ item, isActive }) => {
  return (
    <View style={[styles.cardContainer, isActive && styles.activeCard]}>
      {/* Background Image */}
      <ImageBackground
        source={item.backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.card}>
          {/* Two Column Layout */}
          <View style={styles.row}>
            <View style={styles.textColumn}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.value}>{item.value}</Text>
              {/* <Text style={styles.subtitle}>{item.subtitle}</Text> */}
            </View>

            {/* Right Column → Icon */}
            <View style={styles.iconContainer}>
              <Image
                source={item.iconImage}
                style={[styles.iconImage]}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  activeCard: {
    transform: [{ scale: 1.05 }],
    elevation: 8,
    shadowOpacity: 0.2,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  backgroundImageStyle: {
    borderRadius: 20,
  },
  card: {
    flex: 1,
    // padding: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  textColumn: {
    flex: 1,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  iconImage: {
    width: 140,
    height: 140,
    objectFit: "contain",
    marginTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 8,
  },
  value: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: "#7F8C8D",
    fontWeight: "500",
  },
});

export default Card;
