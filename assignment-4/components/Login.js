import React, {useState} from "react";
import {Text, TextInput, Button, KeyboardAvoidingView, StyleSheet} from "react-native";

export default function Login() {
  const [userName, onChangeUsername] = useState("");
  const [userEmail, onChangeEmail] = useState("");

  return (
    <KeyboardAvoidingView style={loginStyles.container} keyboardDismissMode="on-drag">
      <Text style={loginStyles.headName}>Jobizz</Text>
      <Text style={loginStyles.greet}>Welcome Back 👋</Text>
      <Text style={loginStyles.headText}>Let's log in. Apply to jobs!</Text>
      <TextInput 
        style={loginStyles.inputName}
        userName={userName}
        onChangeText={onChangeUsername} 
        placeholder="Name"
        keyboardType="default"
      />
      <TextInput
        style={loginStyles.inputName}
        userEmail={userEmail} 
        onChangeText={onChangeEmail}
        secureTextEntry={true}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Button title="Log in" style={loginStyles.loginButton}></Button>
    </KeyboardAvoidingView>
  )        
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
  },
  headName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#356899"
  },
  greet: {
    fontSize: 35,
    width: 200,
    fontWeight: "bold",
    color: "#0D0D26",
    marginBottom: 20,
  },
  headText: {
    marginBottom: 50,
    color: "fffff",
    fontWeight: "thin"
  },
  inputName: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    fontWeight: "bold",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#356899",
    color: "#fff",
    padding: 20,
    borderRadius: 6,
    fontWeight: "bold",
    fontSize: 16,
  }
})