import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { PremiumFeatures } from "@/utils/constants";

interface FeatureItemProps {
  item: {
    image: ImageSourcePropType;
    title: string;
    subtitle: string;
  };
}

const FeatureItem: React.FC<FeatureItemProps> = ({ item }) => (
  <View style={styles.featureItem}>
    <Image source={item?.image} style={styles.featureItemIcon} />
    <Text style={styles.featureItemTitle}>{item?.title}</Text>
    <Text style={styles.featureItemSubtitle}>{item?.subtitle}</Text>
  </View>
);

const Features = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Access All Features</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={PremiumFeatures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeatureItem item={item} />}
      />
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: "Rubik-Light",
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0.38,
    color: "rgba(255,255,255,0.7)",
    marginBottom: 15,
  },
  featureItem: {
    minWidth: 150,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 15,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.08)",
    marginRight: 8,
  },
  featureItemIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  featureItemTitle: {
    fontFamily: "Rubik-Medium",
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  featureItemSubtitle: {
    fontFamily: "Rubik",
    color: "rgba(255,255,255,0.7)",
    fontSize: 13,
    lineHeight: 18,
  },
});
