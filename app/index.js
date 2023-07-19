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
import { makeRedirectUri } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
const [userInfo, setUserInfo] = React.useState();
const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
  iosClientId: "10475186476-j9og2ufke9lnfbrpnvpj58ar7mmurb6t.apps.googleusercontent.com",
  androidClientId: "10475186476-ijusocl2k5v5mtctgpcb5t08mo7qj50a.apps.googleusercontent.com",
  webClientId: "517004977600-jtd0vjm0kbvcj73qvnijtden922qmhuq.apps.googleusercontent.com",
  expoClientId: "10475186476-ijusocl2k5v5mtctgpcb5t08mo7qj50a.apps.googleusercontent.com",
},
makeRedirectUri({
  scheme: 'acme'
}));

React.useEffect(() => {
  if (response?.type == "success"){
    // const { id_token } = response.params['access_token'];
    console.log(response.params['id_token']);
    const id_token = response.params['id_token'];
    const cred = GoogleAuthProvider.credential(id_token);
    console.log(cred);
    signInWithCredential(auth, cred);
  }
}, [response]);

console.log(makeRedirectUri({
  scheme: 'acme'
}));

  console.log(makeRedirectUri({
    scheme: 'acme'
  }));
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
