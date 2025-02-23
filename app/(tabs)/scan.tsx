import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Scan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan Screen</Text>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
