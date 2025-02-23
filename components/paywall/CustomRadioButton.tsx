import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

interface CustomRadioButtonProps {
  isSelected: boolean;
  onPress: () => void;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 10 }}>
      <View style={[styles.radioOuter, isSelected && styles.radioOuterChecked]}>
        {isSelected && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );
};

export default CustomRadioButton;

const styles = StyleSheet.create({
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },
  radioOuterChecked: {
    backgroundColor: "#28AF6E",
  },
  radioInner: {
    width: 9,
    height: 9,
    borderRadius: "50%",
    backgroundColor: "white",
  },
});
