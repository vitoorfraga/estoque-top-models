import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Table from "./src/components/Table";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      {/* <Header />

      <Table></Table> */}
      <StatusBar style="#000" />

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F3F4",
    alignItems: "flex-start",
  },
});
