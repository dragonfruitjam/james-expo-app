import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Button from "../components/Button";

export default function SignUpScreen({promptAsync}) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>This is the page to sign in</Text>
        <Link href="/">Home</Link>
        <Button label="Sign In" onPress={() =>promptAsync()}/>
      </View>
    </View>
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
