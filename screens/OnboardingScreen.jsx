import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import Swiper from "react-native-swiper";
import colors from "../constants/colors";

const slides = [
  {
    title: "Track Your Mood",
    description: "Log how you feel daily and monitor your emotional journey.",
  },
  {
    title: "Reflect & Journal",
    description: "Write your thoughts and practice self-awareness.",
  },
  {
    title: "Talk to AI",
    description: "Chat with an empathetic AI that listens to you.",
  },
];

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        showsButtons={false}
        dotColor="#fff8"
        activeDotColor="#fff"
      >
        {slides.map((slide, idx) => (
          <View key={idx} style={styles.slide}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
            <View style={styles.avatarWrapper}>
              <Image
                source={require("../assets/mental.png")}
                style={styles.avatar}
                resizeMode="contain"
              />
            </View>
          </View>
        ))}
      </Swiper>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("Signup")}
          activeOpacity={0.85}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0004ffff",
  },
  slide: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30, // reduced from 50 to move everything up a bit
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 5,
    marginTop: 40, // add marginTop to move text a bit lower
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
    paddingHorizontal: 24,
  },
  avatarWrapper: {
    flex: 1,
    justifyContent: "flex-start", // move avatar above center
    alignItems: "center",
    alignSelf: "stretch",
    marginTop: 100, // increase negative margin to move avatar higher
  },
  avatar: {
    width: 300,
    height: 300,
  },
  footer: {
    padding: 20,
    backgroundColor: "transparent",
    alignItems: "center",
    marginBottom: 40, // Add this line to move the button up
  },
  continueButton: {
    backgroundColor: "#fff",
    borderRadius: 28,
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    minWidth: 280,
  },
  continueButtonText: {
    color: "#0004ffff",
    fontWeight: "700",
    fontSize: 17,
    letterSpacing: 1,
    textAlign: "center",
  },
});
