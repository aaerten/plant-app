import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Diagnose = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diagnose Screen</Text>
    </View>
  );
};

export default Diagnose;

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
