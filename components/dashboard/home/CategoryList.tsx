import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  RefreshControl,
} from "react-native";
import React from "react";
import { useFetchData } from "@/hooks/useFetchData";
import { FetchType } from "@/utils/constants";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 2 - 24;

interface CategoryItemProps {
  item: {
    image?: {
      url: string;
    };
    title: string;
  };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => (
  <ImageBackground
    source={{ uri: item?.image?.url }}
    resizeMode="cover"
    style={styles.categoryItem}
  >
    <Text style={styles.categoryItemTitle}>{item?.title}</Text>
  </ImageBackground>
);

const CategoryList = () => {
  const { data, loading, error, refresh } = useFetchData(FetchType.CATEGORIES);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red" }}>{error}</Text>;
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        data={data}
        renderItem={({ item }) => <CategoryItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  categoryItem: {
    height: 158,
    width: cardWidth,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "rgba(60,60,67,0.1)",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
  },
  categoryItemTitle: {
    position: "absolute",
    top: 15,
    left: 15,
    width: "50%",
    fontFamily: "Rubik-Medium",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },

  row: {
    gap: 10,
    marginBottom: 10,
  },
});
