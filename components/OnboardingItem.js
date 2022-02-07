import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React from "react";
import { width } from "react-native-dimension";

const windowWidth = Dimensions.get("window").width;

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={[styles.img, { width, resizeMode: "contain" }]}
      ></Image>

      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    maxWidth: windowWidth,
  },
  img: {
    width: "80%",
    height: "80%",
    marginVertical: -25,
  },
  title: {
    fontWeight: "800",
    fontSize: 36,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  description: {
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 40,
  },
});
