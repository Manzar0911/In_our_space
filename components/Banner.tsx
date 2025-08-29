import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { height, width } = Dimensions.get("screen");

const Banner = () => {
  return (
    <View style={styles.container}>
      {/* Top Background (40%) */}
      <Image
        source={require("@/assets/images/SplashScreen/Rectangle 28.png")}
        style={styles.topBackground}
        resizeMode="cover"
      />

      {/* Bottom Background (60%) */}
      <Image
        source={require("@/assets/images/SplashScreen/Rectangle 29.png")}
        style={styles.bottomBackground}
        resizeMode="cover"
      />

      {/* Content */}
      <View style={styles.content}>
        {/* Logo */}
        <Image
          source={require("@/assets/images/SplashScreen/logo.png")}
          style={styles.logo}
          resizeMode="cover"
        />

        {/* App Name */}
        <Text style={styles.title}>
          In<Text style={styles.highlight}>Ur</Text>Space
        </Text>

        {/* Tagline */}
        <Text style={styles.tagline}>Find Your Stay, Your Way</Text>
      </View>

      {/* Version at Bottom */}
      <Text style={styles.version}>Version 1.2</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  topBackground: {
    position: "absolute",
    top: 0,
    width: width,
    height: height * 0.6,
  },
  bottomBackground: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: height * 0.55,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    top: 20,
    width: width * 0.8,
    height: height * 0.6,
  },
  title: {
    position: "absolute",
    top: 450,
    fontSize: 40,
    fontWeight: "bold",
    color: "#1D216D",
  },
  highlight: {
    color: "#F4B400",
  },
  tagline: {
    position: "absolute",
    top: 500,
    fontSize: 14,
    color: "#13164E",
    marginTop: 8,
  },
  version: {
    fontSize: 12,
    color: "#888",
  },
});
