import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import Onboarding from "../../components/Onboarding/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./HomeScreen";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const OnScreen = () => {
  return (
    <View style={styles.container}>
      {/* {loading ? (
        <Loading />
      ) : viewedOnboarding ? (
        <HomeScreen />
      ) : (
        <Onboarding />
      )} */}
      <Onboarding />
    </View>
  );
};

export default OnScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
