import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "../app/splashScreen"; // adjust path if needed
import Banner from "../components/Banner";
import { AuthProvider, useAuth } from "../context/AuthContext";

function MainLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);
  const { isLoggedIn } = useAuth();
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
      ) : isLoggedIn ? (
        // Logged in → Tabs
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      ) : (
        // Not logged in → Auth stack
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="signup" />
          <Stack.Screen name="otp" />
        </Stack>
      )}
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}
