import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { useState, useRef } from "react";
import slides from "../slides";
import OnboardingItem from "./OnboardingItem";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
