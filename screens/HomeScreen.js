import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>
        Logged in as: {"\n"}
        {auth.currentUser?.email}
      </Text>
      <TouchableOpacity style={styles.signOut} onPress={handleSignOut}>
        <Text style={styles.btnText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  Title: {
    fontSize: 22,
    textAlign: "center",
    lineHeight: 35,
    fontWeight: "bold",
  },
  signOut: {
    width: "80%",
    padding: 22,
    backgroundColor: "#FF6768",
    borderRadius: 20,
    marginBottom: 15,
    marginTop: 50,
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
  flat: {
    flex: 1,
  },
});
