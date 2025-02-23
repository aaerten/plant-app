import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { OfferTypes, PremiumOffers } from "@/utils/constants";
import CustomRadioButton from "./CustomRadioButton";

interface OfferItemProps {
  item: {
    title: string;
    subtitle: string;
    badge?: string;
  };
  onSelect: () => void;
  isActive: boolean;
}

const OfferItem: React.FC<OfferItemProps> = ({ item, onSelect, isActive }) => (
  <Pressable
    style={[styles.offerContainer, isActive && styles.activeOffer]}
    onPress={onSelect}
  >
    <View style={styles.offerContent}>
      <CustomRadioButton isSelected={isActive} onPress={onSelect} />
      <View>
        <Text style={styles.offerTitle}>{item?.title}</Text>
        <Text style={styles.offerSubtitle}>{item?.subtitle}</Text>
      </View>
    </View>
    {item?.badge && (
      <View style={styles.offerBadge}>
        <Text style={styles.badgeText}>{item?.badge}</Text>
      </View>
    )}
  </Pressable>
);

const Offers = () => {
  const [offerPeriod, setOfferPeriod] = useState(OfferTypes.YEARLY);

  return (
    <View style={styles.container}>
      {PremiumOffers.map((item) => (
        <OfferItem
          key={item?.id}
          item={item}
          isActive={offerPeriod === item?.type}
          onSelect={() => setOfferPeriod(item?.type)}
        />
      ))}
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 160,
  },
  offerContainer: {
    position: "relative",
    backgroundColor: "#152917",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#1f4d1f",
    padding: 12,
    marginBottom: 15,
  },
  activeOffer: {
    borderColor: "#28AF6E",
  },
  offerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  offerTitle: {
    fontFamily: "Rubik-Medium",
    color: "#FFFFFF",
    fontSize: 16,
  },
  offerSubtitle: {
    fontFamily: "Rubik-Light",
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
    letterSpacing: 0.8,
  },
  offerBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#28AF6E",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopRightRadius: 9,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 20,
  },
  badgeText: {
    fontFamily: "Rubik",
    fontSize: 12,
    lineHeight: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
