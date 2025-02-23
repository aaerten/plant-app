import React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  ImageSourcePropType,
} from "react-native";

const { width } = Dimensions.get("window");

interface OnboardingItemProps {
  item: {
    image?: ImageSourcePropType;
  };
}

const OnboardingItem: React.FC<OnboardingItemProps> = ({ item }) => (
  <View style={styles.container}>
    <Image source={item?.image} style={styles.imageContent} />
  </View>
);

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContent: {
    marginTop: 40,
    width: width,
    height: "100%",
    resizeMode: "contain",
  },
});
