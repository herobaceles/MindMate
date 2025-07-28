import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Swiper from "react-native-swiper";
import OnboardingSlide from "../components/OnboardingSlide";
import colors from "../constants/colors";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Swiper loop={false} showsButtons={true}>
        <OnboardingSlide
          title="Track Your Mood"
          description="Log how you feel daily and monitor your emotional journey."
        />
        <OnboardingSlide
          title="Reflect & Journal"
          description="Write your thoughts and practice self-awareness."
        />
        <OnboardingSlide
          title="Talk to AI"
          description="Chat with an empathetic AI that listens to you."
        />
      </Swiper>
      <View style={styles.footer}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  footer: {
    padding: 20,
    backgroundColor: colors.white,
  },
});
