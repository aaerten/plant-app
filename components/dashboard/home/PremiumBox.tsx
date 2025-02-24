import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextStyle,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Images from "@/assets/images/images";

interface GradientTextProps {
  text: string;
  style?: TextStyle;
  isReverse?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  style,
  isReverse,
}) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[style, { backgroundColor: "transparent" }]}>{text}</Text>
      }
    >
      <LinearGradient
        colors={isReverse ? ["#e5ba64", "#e5c990"] : ["#e5c990", "#e5ba64"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[style, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

const PremiumBox = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.contentContainer}>
        <View style={styles.leftSection}>
          <View style={styles.iconContainer}>
            <Image source={Images.premium} style={styles.premiumIcon} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>

          <View style={styles.textContainer}>
            <GradientText
              isReverse={false}
              text="FREE Premium Available"
              style={styles.title}
            />
            <GradientText
              isReverse={true}
              text="Tap to upgrade your account!"
              style={styles.subtitle}
            />
          </View>
        </View>
        <FontAwesome6 name="chevron-right" size={24} color="#D4AF37" />
      </View>
    </TouchableOpacity>
  );
};

export default PremiumBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1E",
    borderRadius: 16,
    padding: 16,
    margin: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 12,
    position: "relative",
  },
  premiumIcon: {
    width: 50,
    height: 50,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FF3B30",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: "Rubik-Bold",
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.32,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: "Rubik",
    fontSize: 15,
    lineHeight: 17,
    opacity: 0.8,
    color: "white",
  },
  textMask: {
    backgroundColor: "transparent",
  },
});
