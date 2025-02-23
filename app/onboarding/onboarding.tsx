import React, { useState, useRef } from "react";
import {
  ImageBackground,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import OnboardingItem from "@/components/onboarding/OnboardingItem";
import Footer from "@/components/onboarding/Footer";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../../assets/images/onboarding/first-onboarding.png"),
  },
  {
    id: "2",
    image: require("../../assets/images/onboarding/second-onboarding.png"),
  },
  { id: "3" },
];

export default function Onboarding() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/onboarding/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.content}>
        <FlatList
          ref={ref}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({ item }) => <OnboardingItem item={item} />}
        />
        <Footer
          boards={slides}
          activeIndex={currentSlideIndex}
          goToNextSlide={goToNextSlide}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
