import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Profile from "./components/Profile";
export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#09677E",
  },
});
