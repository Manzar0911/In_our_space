import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const OTP = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(90); // 1:30 seconds

  // countdown logic
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
    }
  };

  const formattedTime = `${String(Math.floor(timer / 60)).padStart(
    2,
    "0"
  )}:${String(timer % 60).padStart(2, "0")}`;

  return (
    <ImageBackground
      source={require("@/assets/images/Tour/BG 1.png")}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Back Icon */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Image
          source={require("@/assets/images/LoginPage/arrowLeft.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Verify <Text style={{ color: "#4A3AFF" }}>Account</Text>
        </Text>
        <Text style={styles.subtitle}>
          Please enter the verification code sent to example@gmail.com
        </Text>

        {/* OTP Inputs */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              style={styles.otpBox}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        {/* Timer + Resend */}
        <Text style={styles.timer}>{formattedTime}</Text>
        <View style={styles.resendContainer}>
          <Text>Didn’t receive code? </Text>
          <TouchableOpacity onPress={() => setTimer(90)}>
            <Text style={styles.resend}>Resend again</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
    color: "#555",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginHorizontal: 8,
    fontSize: 18,
  },
  timer: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  resendContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  resend: {
    color: "#FFAC37",
    textDecorationLine: "underline",
    fontWeight: "600",
  },
  continueButton: {
    backgroundColor: "#4A3AFF",
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default OTP;
