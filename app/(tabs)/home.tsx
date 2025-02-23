import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import CategoryList from "@/components/dashboard/home/CategoryList";
import HeadBar from "@/components/dashboard/home/HeadBar";
import PremiumBox from "@/components/dashboard/home/PremiumBox";
import QuestionList from "@/components/dashboard/home/QuestionList";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeadBar />
      <PremiumBox />
      <QuestionList />
      <CategoryList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
