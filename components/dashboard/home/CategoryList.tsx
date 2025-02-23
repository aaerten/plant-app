import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  RefreshControl,
  ActivityIndicator
} from "react-native";
import React, { useState, useEffect } from "react";
import { getData } from "@/api/api";

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
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: "",
  });

  const fetchData = () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    getData("getCategories")
      .then((res) => {
        setState((prevState) => ({
          ...prevState,
          data: res.data,
        }));
      })
      .catch((err) => {
        setState((prevState) => ({
          ...prevState,
          error: "Failed to fetch data",
        }));
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={state.loading} onRefresh={fetchData} />
        }
        data={state.data}
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
