import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import Images from "@/assets/images/images";

const HeadBar = () => {
  return (
    <ImageBackground
      source={Images.home_headbar_bg}
      style={styles.background}
      resizeMode="contain"
    >
      <View style={styles.content}>
        <Text style={styles.title}>Hi, plant lover!</Text>
        <Text style={styles.greetingTitle}>Good Afternoon! ⛅</Text>
        <TextInput style={styles.searchBar} placeholder="Search for plants" />
      </View>
    </ImageBackground>
  );
};

export default HeadBar;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 200,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderColor: "rgba(60,60,67,0.1)",
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    color: "#13231B",
    fontFamily: "Rubik",
    fontSize: 16,
    letterSpacing: 0.07,
    marginBottom: 10,
  },
  greetingTitle: {
    color: "#13231B",
    fontFamily: "Rubik-Medium",
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.35,
    marginBottom: 15,
  },
  searchBar: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderColor: "rgba(60,60,67,0.25)",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
  },
});
