import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={[styles.img, { width, resizeMode: "contain" }]}
      ></Image>

      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  img: {
    width: "80%",
    height: "80%",
  },
});
