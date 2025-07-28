import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../constants/colors";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top: Title and Subtitle */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to MindMate</Text>
        <Text style={styles.subtitle}>
          Your AI companion for mental.{"\n"}
          Start your journey to a healthier mind today!
        </Text>
      </View>

      {/* Center: Avatar or Image */}
      <View style={styles.avatarContainer}>
        {/* Replace the source below with your avatar/image */}
        <Image
          source={require("../assets/mental.png")}
          style={styles.avatar}
          resizeMode="contain"
        />
      </View>

      {/* Bottom: Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0004ffff",
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#e0e0e0",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  avatarContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 80,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 100,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    paddingHorizontal: 0, // Remove horizontal padding for equal width
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: 1,
    minWidth: 140,
    width: 160, // Set a fixed width for all buttons
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#0004ffff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});
