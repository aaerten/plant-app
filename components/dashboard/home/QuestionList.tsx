import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getData } from "@/api/api";
import { useRouter } from 'expo-router';
import { setSelectedItem } from "@/redux/appSlice";
import { useDispatch } from "react-redux";

interface QuestionItemProps {
  item: {
    image_uri: string;
    title: string;
  };
}

const QuestionItem: React.FC<QuestionItemProps> = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setSelectedItem(item));
    router.push("/webview");
  };
  return (
  <TouchableOpacity onPress={handlePress}>
  <ImageBackground
    source={{ uri: item?.image_uri }}
    resizeMode="cover"
    style={styles.questionItem}
  >
    <Text style={styles.questionItemTitle}>{item?.title}</Text>
  </ImageBackground>
  </TouchableOpacity>
)};

const QuestionList = () => {
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
    getData("getQuestions")
      .then((res) => {
        setState((prevState) => ({
          ...prevState,
          data: res,
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

  if (state.loading) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <FlatList
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={state.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <QuestionItem item={item} />}
      />
    </View>
  );
};

export default QuestionList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: "Rubik-Medium",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    marginBottom: 20,
  },
  questionItem: {
    height: 160,
    width: 250,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderRadius: 14,
    backgroundColor: "transparent",
    marginRight: 8,
    overflow: "hidden",
  },
  questionItemTitle: {
    position: "absolute",
    top: "68%",
    left: 15,
    width: "90%",
    fontFamily: "Rubik-Medium",
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  loadingOverlay: {
    height: 160,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
