import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import slides from "../slides";
import OnboardingItem from "./OnboardingItem";

const Onboarding = () => {
  return (
    <View>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
