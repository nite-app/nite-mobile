import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
    marginTop: height*0.06156,
  },
  Image: {
    width: width * 0.96,
    height: height * 0.49261,
  },
  TextContainer: {
    width: width * 0.96,
    alignItems: "center",
    marginTop: height*0.04926,
  },
  Title: {
    fontSize: height * 0.047,
    fontWeight: "bold",
    marginBottom: height*0.018473,
    textAlign: "center",
    marginBottom: height*0.030788,
  },
  Subtitle: {
    fontSize: height*0.027,
    textAlign: "center",
  },
  BtnContainer: {
    position: "absolute",
    bottom: height*0.06157,
    display: "flex",
    flexDirection: "row",
    width: width*0.8,
    height: height*0.0923,
    backgroundColor: "#E5E7ED",
    borderRadius: height*0.0246,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  Btn: {
    width: width*0.373,
    borderRadius: height*0.018473,
    height: height*0.08,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  BtnText: {
    fontSize: height*0.022,
    fontWeight: "600",
  },
});
