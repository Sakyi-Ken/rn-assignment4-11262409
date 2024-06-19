import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity,KeyboardAvoidingView, View, StyleSheet, Image} from "react-native";

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
        placeholderTextColor={"gray"}
        keyboardType="default"
      />
      <TextInput
        style={loginStyles.inputName}
        userEmail={userEmail} 
        onChangeText={onChangeEmail}
        secureTextEntry={true}
        placeholder="Email"
        placeholderTextColor={"gray"}
        keyboardType="email-address"
      />
      <TouchableOpacity style={loginStyles.loginButton} >
        <Text style={loginStyles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={loginStyles.loginTexts}>
        <View style={loginStyles.line}/>
        <Text style={loginStyles.loginText}>     Or continue with    </Text>
        <View style={loginStyles.line}/>
      </View>

      <View style={loginStyles.socialLogin}>
        <TouchableOpacity>
          <Image source={require('../assets/apple.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../assets/google.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../assets/facebook.png')}/>
        </TouchableOpacity>
      </View>

      <Text style={{marginTop: 20, textAlign: "center", color: "gray"}}>Don't have an account? <Text style={{color:  "#356899"}}>Register</Text>
      </Text>

    </KeyboardAvoidingView>
  )        
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
    width: "125%",
  },
  headName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#356899"
  },
  greet: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#0D0D26",
    marginBottom: 15,
  },
  headText: {
    marginBottom: 50,
    color: "gray",
    opacity: 0.6,
    fontWeight: "100",
    fontSize: 18,
  },
  inputName: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    fontSize: 17,
  },
  loginButton: {
    marginTop: 25,
    backgroundColor: "#356899",
    color: "#fff",
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  loginTexts: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginHorizontal: 5
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  loginText: {
    color: 'gray',
  },
  socialLogin: { 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 5
  },
});