import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

interface FooterProps {
  complete: () => void;
}

const Footer: React.FC<FooterProps> = ({ complete }) => {
  return (
    <View style={styles.actionContainer}>
      <TouchableOpacity style={styles.button} onPress={complete}>
        <Text style={styles.buttonText}>Try free for 3 days</Text>
      </TouchableOpacity>
      <Text style={styles.actionInfo}>
        After the 3-day free trial period you’ll be charged ₺274.99 per year
        unless you cancel before the trial expires. Yearly Subscription is
        Auto-Renewable
      </Text>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Terms</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>•</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Privacy</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>•</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Restore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
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
  },
  buttonText: {
    fontFamily: "Rubik-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
    textAlign: "center",
  },
  actionInfo: {
    fontFamily: "Rubik",
    fontWeight: "light",
    fontSize: 10,
    lineHeight: 14,
    color: "rgba(255,255,255,0.52)",
    textAlign: "center",
    margin: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footerLink: {
    fontFamily: "Rubik",
    fontSize: 12,
    color: "rgba(255,255,255,0.50)",
    marginHorizontal: 5,
  },
  separator: {
    fontSize: 14,
    color: "#888",
  },
});
