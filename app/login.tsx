import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const LoginPage = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/Tour/BG 1.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => router.back()} // navigate back
      >
        <Image
          source={require("@/assets/images/LoginPage/arrowLeft.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>
          Welcome <Text style={styles.highlight}>Back</Text>
        </Text>
        <Text style={styles.subtitle}>
          We missed you! Login to continue your journey with us.
        </Text>

        {/* Email Input */}
        <View style={styles.inputBox}>
          <Image
            source={require("@/assets/images/LoginPage/user.png")}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#888"
            style={styles.input}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputBox}>
          <Image
            source={require("@/assets/images/LoginPage/Key.png")}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forget Password</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        {/* OR divider */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or signup with</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={require("@/assets/images/LoginPage/googleIcon.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={require("@/assets/images/LoginPage/facebookIcon.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Signup Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text
              style={styles.signupLink}
              onPress={() => router.push("/signup")}
            >
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
    backgroundColor: "#fff",
  },
  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 5,
    textAlign: "center",
    color: "#000",
  },
  highlight: {
    color: "#5A4FCF",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 25,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  inputIcon: {
    width: 20,
    height: 20,
    tintColor: "#888",
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: "#000",
  },
  forgotText: {
    alignSelf: "flex-start",
    textDecorationLine: "underline",
    color: "#FFAC37",
    fontSize: 13,
    marginVertical: 6,
  },
  loginBtn: {
    backgroundColor: "#5A4FCF",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 15,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#999",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialBtn: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 50,
    padding: 12,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    color: "#666",
  },
  signupLink: {
    color: "#FFAC37",
    textDecorationLine: "underline",
    fontWeight: "600",
  },
});
