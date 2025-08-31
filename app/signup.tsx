import { router, useRouter } from "expo-router";
import React, { useState } from "react";
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

// Background
const bgImage = require("@/assets/images/Tour/BG 1.png");

const SignUp = () => {
  const router = useRouter();
  const [step, setStep] = useState<"askUserType" | "signUpForm">("askUserType");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <ImageBackground
      source={bgImage}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Back Arrow (only show in signup form) */}
      {step === "signUpForm" && (
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => setStep("askUserType")}
        >
          <Image
            source={require("@/assets/images/LoginPage/arrowLeft.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      )}

      <View style={styles.container}>
        {step === "askUserType" ? (
          <AskUserType
            selectedRole={selectedRole}
            onSelect={setSelectedRole}
            onNext={() => {
              if (selectedRole) setStep("signUpForm");
            }}
          />
        ) : (
          <SignUpForm />
        )}
      </View>
    </ImageBackground>
  );
};

export default SignUp;

/* ---------------- AskUserType Component ---------------- */
const AskUserType = ({
  selectedRole,
  onSelect,
  onNext,
}: {
  selectedRole: string | null;
  onSelect: (role: string) => void;
  onNext: () => void;
}) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Top Section */}
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <Text style={[styles.title, { marginTop: 60 }]}>
          Select Your <Text style={styles.highlight}>Role</Text>
        </Text>
        <Text style={styles.subtitle}>
          What role do you want to enter into this app?
        </Text>

        <View style={{ marginTop: 150 }}>
          <TouchableOpacity
            style={[
              styles.roleBtn,
              selectedRole === "Landlord" && styles.roleSelected,
            ]}
            onPress={() => onSelect("Landlord")}
          >
            <Text style={styles.roleText}>Landlord</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleBtn,
              selectedRole === "Tenant" && styles.roleSelected,
            ]}
            onPress={() => onSelect("Tenant")}
          >
            <Text style={styles.roleText}>Tenant</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section (Button at bottom always) */}
      <View style={{ marginBottom: 40 }}>
        <TouchableOpacity
          style={[styles.startBtn, { opacity: selectedRole ? 1 : 0.5 }]}
          disabled={!selectedRole}
          onPress={onNext}
        >
          <Text style={styles.startText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/* ---------------- SignUpForm Component ---------------- */
const SignUpForm = () => {
  return (
    <View>
      <Text style={styles.title}>
        Create <Text style={styles.highlight}>Account</Text>
      </Text>
      <Text style={styles.subtitle}>
        Fill your information below or register with your social account.
      </Text>

      {/* Input fields with icons */}
      <View style={styles.inputBox}>
        <Image
          source={require("@/assets/images/LoginPage/user.png")}
          style={styles.inputIcon}
        />
        <TextInput placeholder="Full Name" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Image
          source={require("@/assets/images/SignupPage/keypad.png")} // <-- add keypad icon
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.row}>
        <View style={[styles.inputBox, { flex: 1, marginRight: 5 }]}>
          <Image
            source={require("@/assets/images/SignupPage/calendar.png")}
            style={styles.inputIcon}
          />
          <TextInput placeholder="DOB" style={styles.input} />
        </View>
        <View style={[styles.inputBox, { flex: 1, marginLeft: 5 }]}>
          <Image
            source={require("@/assets/images/SignupPage/gender.png")}
            style={styles.inputIcon}
          />
          <TextInput placeholder="Gender" style={styles.input} />
        </View>
      </View>

      <View style={styles.inputBox}>
        <Image
          source={require("@/assets/images/SignupPage/envelope.png")}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputBox}>
        <Image
          source={require("@/assets/images/LoginPage/Key.png")}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* Signup Button */}
      <TouchableOpacity style={styles.signUpBtn}>
        <Text style={styles.signUpText} onPress={() => router.push("/otp")}>
          Sign Up
        </Text>
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

      {/* Login Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupLink} onPress={() => router.push("/login")}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/* ---------------- Styles ---------------- */
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
    fontSize: 26,
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
  roleBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
  },
  roleSelected: {
    backgroundColor: "#ccc", // dark grey highlight when selected
  },
  roleText: {
    textAlign: "center",
    fontSize: 15,
    color: "#000",
  },
  startBtn: {
    backgroundColor: "#5A4FCF",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
  },
  startText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signUpBtn: {
    backgroundColor: "#5A4FCF",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 15,
  },
  signUpText: {
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
