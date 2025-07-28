import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    alert("Reset link sent to " + email);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        placeholder="Enter your email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Send Reset Link" onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, color: colors.primary },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 10 },
});
