import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function OnboardingSlide({ title, description }) {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
  },
});
