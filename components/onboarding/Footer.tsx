import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import Indicator from "./Indicator";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

interface Board {
  id: string;
  image?: ImageSourcePropType;
}

interface FooterProps {
  boards: Board[];
  activeIndex: number;
  goToNextSlide: () => void;
}

const Footer: React.FC<FooterProps> = ({
  boards,
  activeIndex,
  goToNextSlide,
}) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() =>
            activeIndex == boards.length - 2
              ? router.push("/onboarding/paywall")
              : goToNextSlide()
          }
        >
          <Text style={styles.actionButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <Indicator boards={boards} activeIndex={activeIndex} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    height: height * 0.1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  actionContainer: {
    height: 50,
  },
  actionButton: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#28AF6E",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonText: {
    fontFamily: "Rubik-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
