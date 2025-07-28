import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../constants/colors";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    // Fake login: just store token
    if (email && password) {
      await AsyncStorage.setItem("token", "dummy-auth-token");
      navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    }
  };

  return (
    <View style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#0004ffff" />
      <View style={styles.topSection}>
        <View style={styles.topBarRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.topLink}>
            <Text style={styles.topLinkText}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={() => navigation.navigate("Signup")}
              activeOpacity={0.85}
            >
              <Text style={styles.getStartedButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/mental.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Enter your details below</Text>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordRow}>
          <View style={{ flex: 1, position: "relative" }}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
              style={[styles.input, { marginBottom: 0, paddingRight: 44 }]}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity
              style={styles.eyeButtonAbsolute}
              onPress={() => setShowPassword((prev) => !prev)}
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#aaa"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.link}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={styles.dividerRow}>
          <View style={styles.divider} />
          <Text style={styles.orText}>Or sign in with</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <MaterialCommunityIcons
              name="google"
              size={22}
              color="#EA4335"
              style={{ marginRight: 8 }}
            />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <MaterialCommunityIcons
              name="facebook"
              size={22}
              color="#1877F3"
              style={{ marginRight: 8 }}
            />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#0004ffff",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
  },
  topSection: {
    width: "100%",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 16,
  },
  topBarRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  backButton: {
    padding: 8,
    marginRight: 4,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  topLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  topLinkText: {
    color: "#fff",
    fontSize: 15,
    marginRight: 8,
  },
  getStartedButton: {
    backgroundColor: "#0004ffff",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
  },
  getStartedButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  logo: {
    width: 150,
    height: 150,
  },
  card: {
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 28,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    marginBottom: 18,
    marginTop: 0,
  },
  input: {
    backgroundColor: "#f7f7f7",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    color: "#222",
    width: "100%",
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  eyeButtonAbsolute: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -11 }],
    padding: 4,
    zIndex: 10,
  },
  button: {
    backgroundColor: "#0004ffff",
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: "center",
    marginVertical: 8,
    width: "100%",
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "none",
  },
  link: {
    color: "#0004ffff",
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
    width: "100%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#eee",
  },
  orText: {
    marginHorizontal: 10,
    color: "#888",
    fontSize: 13,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 6,
  },
  socialButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 12,
    marginHorizontal: 6,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    elevation: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  socialText: {
    color: "#222",
    fontWeight: "600",
    fontSize: 15,
  },
});
