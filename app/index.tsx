import React from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

export default function Starter() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/starter-screen/background.png")}
      style={styles.background}
      resizeMode="contain"
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Welcome to <Text style={styles.bold}>PlantApp</Text>
          </Text>
          <Text style={styles.subTitle}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>

        <Image
          style={styles.imageContent}
          source={require("../assets/images/starter-screen/dummy-content.png")}
          resizeMode="contain"
        />
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/onboarding/onboarding")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <Text style={styles.privacyText}>
            By tapping next, you are agreeing to PlantID
          </Text>
          <View style={styles.privacyTextLinks}>
            <TouchableOpacity>
              <Text style={styles.privacyTextLink}>Terms of Use</Text>
            </TouchableOpacity>
            <Text style={styles.privacyText}> & </Text>
            <TouchableOpacity>
              <Text style={styles.privacyTextLink}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    marginTop: 100,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  title: {
    fontFamily: "Rubik",
    fontSize: 28,
    letterSpacing: 0.07,
    color: "#13231B",
    marginBottom: 10,
  },
  subTitle: {
    width: '75%',
    fontFamily: "Rubik",
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.07,
    color: "rgba(19,35,27,0.7)",
  },
  imageContent: {
    height: '73%',
    width: '100%',
  },
  bold: {
    fontFamily: "Rubik-Bold",
  },
  actionContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    height: height * 0.1,
    paddingHorizontal: 20,
  },
  button: {
    height: 50,
    borderRadius: 12,
    backgroundColor: "#28AF6E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: "Rubik-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
    textAlign: "center",
  },
  privacyText: {
    fontFamily: "Rubik",
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.07,
    color: "rgba(89,113,101,0.7)",
    textAlign: "center",
  },
  privacyTextLinks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  },
  privacyTextLink: {
    fontFamily: "Rubik",
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.07,
    color: "rgba(89,113,101,0.7)",
    textDecorationLine: "underline",
  },
});
