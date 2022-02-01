import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const StartPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/StartImg.png")}
        style={styles.Image}
      ></Image>
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Change the{"\n"}way you sleep!</Text>
        <Text style={styles.Subtitle}>
          Track your sleep schedule and habits{"\n"}to make your days better!
        </Text>
      </View>
      <View style={styles.BtnContainer}>
        <TouchableOpacity style={styles.Btn}>
          <Text
            style={styles.BtnText}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.BtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  Image: {
    width: 360,
    height: 400,
  },
  TextContainer: {
    width: 360,
    alignItems: "center",
    marginTop: 40,
  },
  Title: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    marginBottom: 25,
  },
  Subtitle: {
    fontSize: 22,
    textAlign: "center",
  },
  BtnContainer: {
    position: "absolute",
    bottom: 50,
    display: "flex",
    flexDirection: "row",
    width: 300,
    height: 75,
    backgroundColor: "#E5E7ED",
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  Btn: {
    width: 140,
    borderRadius: 15,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  BtnText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
