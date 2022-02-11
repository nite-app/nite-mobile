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
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const RegisterScreen = (props) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conf, setConf] = useState("");

  const handleSigUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered as: " + user.email);
        alert("Successfully Registered " + user.email);
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
            <Text style={styles.Title}>Hello!</Text>
            <Text style={styles.Subtitle}>
              Welcome to Nite, it's a pleasure to have you here!
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
            <TextInput
              placeholder="Confirm Password"
              value={conf}
              onChangeText={(text) => setConf(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                if (password === conf) {
                  handleSigUp();
                  //clear fields
                } else {
                  alert("Password and Confirmation field don't match!");
                  //clear fields
                }
              }}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navigateLogin}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

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
  navigateLogin: {
    //marginTop: 120,
    marginTop: height * 0.15,
  },
  loginBtn: {},
  loginTxt: {
    //fontSize: 16,
    fontSize: height * 0.0197,
    color: "blue",
    fontWeight: "600",
  },
});
