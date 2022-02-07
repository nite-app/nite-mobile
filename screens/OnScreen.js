import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "../components/Onboarding";

const OnScreen = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
};

export default OnScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});
