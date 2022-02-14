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
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("viewedOnboarding");

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log("Error OnScreen.js: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  function Authenticated() {
    const asd = () => {
      if (loading == true) {
        return <Loading />;
      } else {
        if (viewedOnboarding == true) {
          return <HomeScreen />;
        } else {
          return <Onboarding />;
        }
      }
    };
  }

  return (
    <View style={styles.container}>
      <Authenticated asd />
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
