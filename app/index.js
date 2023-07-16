import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import SignUpScreen  from "./screens/sign_in_screen";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import {auth} from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import * as React from "react";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
const [userInfo, setUserInfo] = React.useState();
const [request, response, promptAsync] = Google.useAuthRequest({
  iosClientId: "10475186476-j9og2ufke9lnfbrpnvpj58ar7mmurb6t.apps.googleusercontent.com",
  androidClientId: "10475186476-ijusocl2k5v5mtctgpcb5t08mo7qj50a.apps.googleusercontent.com",
  webClientId: "10475186476-p6idp6sv38v93m88p2pedvkh93gbkvl4.apps.googleusercontent.com",
});

React.useEffect(() => {
  if (response?.type == "success"){
    const { id_token } = response.params;
    const credential = GoogleAuthProvider.credential(id_token)
    signInWithCredential(auth, credential)
  }
}, [response]);

  return (
    < SignUpScreen promptAsync={promptAsync}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
