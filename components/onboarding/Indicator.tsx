import { StyleSheet, View, ImageSourcePropType } from "react-native";
import React from "react";

interface Board {
  id: string;
  image: ImageSourcePropType;
}

interface IndicatorProps {
  boards: Board[];
  activeIndex: number;
}

const Indicator: React.FC<IndicatorProps> = ({ boards, activeIndex }) => {
  return (
    <View style={styles.container}>
      {boards.map((_: Board, index: React.Key | null | undefined) => (
        <View
          key={index}
          style={[
            styles.indicator,
            activeIndex == index && styles.indicatorActive,
          ]}
        />
      ))}
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    height: 6,
    width: 6,
    borderRadius: "50%",
    backgroundColor: "rgba(19,35,27,.25)",
    marginHorizontal: 4,
  },
  indicatorActive: {
    width: 10,
    height: 10,
    backgroundColor: "#000000",
  },
});
