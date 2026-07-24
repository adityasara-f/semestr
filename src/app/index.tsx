import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>SEMESTR</Text>

      {/* Email */}
        <View style={{ marginBottom: 20 }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

      {/* Password */}
      <View style={styles.passwordWrapper}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          style={styles.eyeButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#777"
          />
        </Pressable>
      </View>
      {/* Forgot Password */}
      <Pressable onPress={() => alert("Forgot Password")}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </Pressable>

      {/* Login Button */}
      <Pressable
        style={styles.button}
        onPress={() => alert("Login Clicked")}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>

      {/* OR Divider */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Google Button */}
      <Pressable
        style={styles.googleButton}
        onPress={() => alert("Google Login")}
      >
        <View style={styles.googleContent}>
          <Image
            source={require("../../assets/images/google.png")}
            style={styles.googleLogo}
          />

          <Text style={styles.googleText}>
            Continue with Google
          </Text>
        </View>
      </Pressable>

      {/* Sign Up */}
      <Pressable onPress={() => alert("Create Account")}>
        <Text style={styles.signup}>
          Create an Account
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  logo: {
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
    letterSpacing: 2,
  },

  input: {
    height: 56,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 12,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 15,
    paddingRight: 50,
    fontSize: 16,
  },

  passwordWrapper: {
    position: "relative",
    marginBottom: 20,
  },

  eyeButton: {
    position: "absolute",
    right: 15,
    top: 0,
    width: 40,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },

  forgot: {
    textAlign: "right",
    color: "#4F46E5",
    marginBottom: 30,
    fontWeight: "500",
  },

  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 17,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D9D9D9",
  },

  orText: {
    marginHorizontal: 15,
    color: "#777",
    fontWeight: "600",
  },

  googleButton: 
  {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DADCE0",
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },

  googleContent: 
  {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  googleLogo: 
  {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  googleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3C4043",
  },

  signup: {
    textAlign: "center",
    marginTop: 35,
    color: "#4F46E5",
    fontWeight: "600",
    fontSize: 15,
  },
}); 