import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "../app/splashScreen"; // adjust path if needed
import Banner from "../components/Banner";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000); // 3 sec

      return () => clearTimeout(timer);
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <SafeAreaProvider>
        <Banner />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          {/* index is your main entry */}
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
          <Stack.Screen name="otp" options={{ headerShown: false }} />
        </Stack>
      )}
    </SafeAreaProvider>
  );
}
