//rnfes
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in as: " + user.email);
        navigation.navigate("Home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <LinearGradient
          colors={["#FFFFFF", "#D0D4E3"]}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 1, y: 0.9 }}
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={styles.textContainer}>
            <Text style={styles.Title}>Hello Again!</Text>
            <Text style={styles.Subtitle}>
              Welcome back, You have been missed!
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.registerContainer}>
            <TouchableOpacity
              style={styles.registerBtn}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D0D4E3",
  },
  inputContainer: {
    width: "80%",
    //marginTop: 50,
    marginTop: height * 0.061576,
    //marginBottom: 50,
    marginBottom: height * 0.061576,
  },
  input: {
    backgroundColor: "white",
    //marginBottom: 15,
    marginBottom: height * 0.01847,
    //paddingVertical: 20,
    paddingVertical: height * 0.0246,
    //paddingHorizontal: 25,
    paddingHorizontal: height * 0.03079,
    //borderRadius: 20,
    borderRadius: height * 0.0246,
    //fontSize: 18,
    fontSize: height * 0.0222,
  },
  buttonContainer: {
    width: "80%",
  },
  button: {
    //padding: 22,
    padding: height * 0.0271,
    backgroundColor: "#FF6768",
    //borderRadius: 20,
    borderRadius: height * 0.0246,
    //marginBottom: 15,
    marginBottom: height * 0.01847,
    alignItems: "center",
  },
  buttonText: {
    //fontSize: 18,
    fontSize: height * 0.0222,
    color: "#ffffff",
    fontWeight: "600",
  },
  buttonOutline: {},
  buttonOutlineText: {
    //fontSize: 18,
    fontSize: height * 0.0222,
    color: "#ffffff",
    fontWeight: "600",
  },
  textContainer: {
    alignItems: "center",
    width: "70%",
    //marginTop: 100,
    marginTop: height * 0.12315,
  },
  Title: {
    //fontSize: 45,
    fontSize: height * 0.055,
    fontWeight: "bold",
    //marginBottom: 15,
    marginBottom: height * 0.01847,
  },
  Subtitle: {
    //fontSize: 26,
    fontSize: height * 0.032,
    textAlign: "center",
  },
  registerContainer: {
    //marginTop: 190,
    marginTop: height * 0.24099,
  },
  registerBtn: {},
  registerText: {
    //fontSize: 16,
    fontSize: height * 0.0197,
    color: "blue",
    fontWeight: "600",
  },
});
