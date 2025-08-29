import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const slides = [
  {
    images: [
      require("@/assets/images/Tour/yellowGirl.png"),
      require("@/assets/images/Tour/purpleGirl.png"),
      require("@/assets/images/Tour/orangeGirl.png"),
    ],
    backgroungImages: [
      require("@/assets/images/Tour/orangeCircle.png"),
      require("@/assets/images/Tour/purpleCircle.png"),
      require("@/assets/images/Tour/yellowCircle.png"),
    ],
    text: "Redefining PG living with care & comfort.",
    colors: ["#534CD6", "#FFFFFF"],
  },
  {
    images: [
      require("@/assets/images/Tour/purpleGirl.png"),
      require("@/assets/images/Tour/orangeGirl.png"),
      require("@/assets/images/Tour/yellowGirl.png"),
    ],
    backgroungImages: [
      require("@/assets/images/Tour/purpleCircle.png"),
      require("@/assets/images/Tour/yellowCircle.png"),
      require("@/assets/images/Tour/orangeCircle.png"),
    ],
    text: "Everyone deserves safe, & affordable stays.",
    colors: ["#FFDF4A", "#FFFFFF"],
  },
  {
    images: [
      require("@/assets/images/Tour/orangeGirl.png"),
      require("@/assets/images/Tour/yellowGirl.png"),
      require("@/assets/images/Tour/purpleGirl.png"),
    ],
    backgroungImages: [
      require("@/assets/images/Tour/yellowCircle.png"),
      require("@/assets/images/Tour/orangeCircle.png"),
      require("@/assets/images/Tour/purpleCircle.png"),
    ],
    text: "Perfect for students, ideal for professionals.",
    colors: ["#FFAC37", "#FFFFFF"],
  },
];

const SplashScreen: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Auto change slides every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ImageBackground
        source={require("@/assets/images/Tour/BG 1.png")}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.content}>
          {/* Circle 1 */}
          <Image
            source={slides[index].backgroungImages[0]}
            style={styles.bgcircle1}
            resizeMode="cover"
          />
          <Image
            source={slides[index].images[0]}
            style={styles.circle1}
            resizeMode="cover"
          />

          {/* Circle 2 */}
          <Image
            source={slides[index].backgroungImages[1]}
            style={styles.bgcircle2}
            resizeMode="cover"
          />
          <Image
            source={slides[index].images[1]}
            style={styles.circle2}
            resizeMode="cover"
          />

          {/* Circle 3 */}
          <Image
            source={slides[index].backgroungImages[2]}
            style={styles.bgcircle3}
            resizeMode="cover"
          />
          <Image
            source={slides[index].images[2]}
            style={styles.circle3}
            resizeMode="cover"
          />

          {/* Line */}
          <View style={[styles.line]}>
            <LinearGradient
              colors={[slides[index].colors[0], slides[index].colors[1]]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.line}
            />
          </View>

          {/* Text */}
          <Text style={styles.text}>{slides[index].text}</Text>
        </View>
      </ImageBackground>
      <StatusBar hidden />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  circle1: {
    position: "absolute",
    top: height * 0.05,
    right: -20,
    height: height * 0.15,
    width: height * 0.15,
    borderRadius: 100,
  },
  bgcircle1: {
    position: "absolute",
    top: height * 0.05,
    right: -20,
    height: height * 0.15,
    width: height * 0.16,
    borderRadius: 100,
  },
  circle2: {
    position: "absolute",
    top: height * 0.23,
    left: width * 0.18,
    height: height * 0.32,
    width: height * 0.28,
    borderRadius: 100,
  },
  bgcircle2: {
    position: "absolute",
    top: height * 0.23,
    left: width * 0.2,
    height: height * 0.32,
    width: height * 0.28,
    borderRadius: 100,
  },
  circle3: {
    position: "absolute",
    top: height * 0.55,
    left: -10,
    height: height * 0.15,
    width: height * 0.15,
    borderRadius: 100,
  },
  bgcircle3: {
    position: "absolute",
    top: height * 0.55,
    left: -5,
    height: height * 0.15,
    width: height * 0.15,
    borderRadius: 100,
  },
  text: {
    position: "absolute",
    bottom: 60,
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 1.5,
    color: "#333",
    paddingHorizontal: 40,
    marginLeft: 30,
    width: width * 0.9,
  },
  line: {
    position: "absolute",
    bottom: 22,
    left: 20,
    height: 120,
    width: 40,
  },
});
