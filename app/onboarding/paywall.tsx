import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import { completeOnboarding } from "@/redux/appSlice";
import { useRouter } from "expo-router";
import Footer from "@/components/paywall/Footer";

import Features from "@/components/paywall/Features";
import Offers from "@/components/paywall/Offers";

const Paywall = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const complete = () => {
    dispatch(completeOnboarding());
    router.replace("/home");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/paywall/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={complete}>
          <Text style={styles.closeText}>x</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          <Text style={styles.bold}>PlantApp</Text> Premium
        </Text>
        <Features />
        <Offers />
        <Footer complete={complete} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  bold: {
    fontFamily: "Rubik-Bold",
  },
  title: {
    fontFamily: "Rubik-Light",
    fontSize: 28,
    letterSpacing: 0.07,
    color: "#FFFFFF",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    fontFamily: "Rubik",
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 15,
  },
});

export default Paywall;
