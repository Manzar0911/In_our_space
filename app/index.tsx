import CardSlider from "@/components/CardSlider";
import Slider from "@/components/Slider";
import TwoItemScroller from "@/components/TwoItemScroller"; // Import the new component
import { cardSliderData } from "@/data/CardSliderData";
import { ImageSlider } from "@/data/SliderData";
import { LinearGradient } from "expo-linear-gradient";
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
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");

const Page = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {/* Background Image */}
        <Image
          source={require("@/assets/images/LandingPage/topImage.png")}
          style={styles.topBackground}
          resizeMode="cover"
        />

        {/* Gradient overlay (optional fade) */}
        <LinearGradient
          colors={["rgba(256,256,256,0.4)", "transparent"]}
          style={styles.gradient}
        />

        {/* TOP SECTION */}
        <View style={styles.topSection}>
          {/* Left side (logo + name + tagline) */}
          <View style={styles.leftContent}>
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>InUrSpace</Text>
              <Image
                source={require("@/assets/images/SplashScreen/logo.png")}
                style={{ width: 35, height: 35 }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.tagline}>
              Quality goods, waiting for you to choose.
            </Text>
          </View>

          {/* Right side (login/signup) */}
          <View style={styles.authButtons}>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpBtn}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* BOTTOM SCROLLABLE SECTION */}
        <View style={styles.bottomBackground}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
          >
            {/* Stats Card Slider */}
            <View style={styles.sectionContainer}>
              <CardSlider
                data={cardSliderData}
                autoSlide={true}
                autoSlideInterval={3000}
              />
            </View>

            {/* Popular PGs Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Popular PGs</Text>
              <View
                style={{
                  height: 200,
                  backgroundColor: "#ddd",
                  margin: 10,
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <Slider itemList={ImageSlider} />
              </View>
            </View>

            {/* Why Choose Us Section - New Two Item Scroller */}
            <View style={styles.sectionContainer}>
              <TwoItemScroller />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    paddingHorizontal: 20,
  },
  topBackground: {
    position: "absolute",
    top: 0,
    width: width,
    height: height * 0.29,
  },
  gradient: {
    position: "absolute",
    top: 0,
    width: width,
    height: height * 0.35,
  },
  topSection: {
    marginTop: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  leftContent: {
    alignItems: "flex-start",
    flexShrink: 1,
  },
  logoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 4,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 0,
  },
  tagline: {
    color: "#ddd",
    fontSize: 12,
    marginTop: 2,
    width: 150,
  },
  authButtons: {
    flexShrink: 1,
    marginTop: 50,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  loginBtn: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 18,
    marginBottom: 8,
  },
  loginText: {
    color: "#fff",
  },
  signUpBtn: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  signUpText: {
    color: "#000",
    fontWeight: "600",
  },
  bottomBackground: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: height * 0.7,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
});
