import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { width } from "react-native-dimension";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

const OnboardingItem = ({ item }) => {
  const navigation = useNavigation();
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
      <View style={styles.textCont}>
        <Text style={styles.lasttitle}>{item.lasttitle}</Text>
        <Text style={styles.lastdescription}>{item.lastdescription}</Text>
        <TouchableOpacity
          style={[item.styling, styles.btnStyle]}
          onPress={() => {
            navigation.navigate("StartPage");
          }}
        >
          <Text style={styles.btntxt}>{item.button}</Text>
        </TouchableOpacity>
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
  textCont: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: -300,
  },
  img: {
    width: "80%",
    height: "80%",
    marginBottom: -75,
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
  lasttitle: {
    fontWeight: "800",
    fontSize: 36,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  lastdescription: {
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 40,
  },
  btntxt: {
    fontWeight: "800",
    fontSize: 24,
    color: "#FFF",
    letterSpacing: 0.5,
  },
});
