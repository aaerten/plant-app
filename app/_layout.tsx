import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import "react-native-reanimated";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, RootState } from "@/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { completeOnboarding } from "@/redux/appSlice";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_700Bold,
  Rubik_300Light,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";
export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Rubik: Rubik_400Regular,
    "Rubik-Light": Rubik_300Light,
    "Rubik-Medium": Rubik_500Medium,
    "Rubik-Bold": Rubik_700Bold,
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootLayoutNav />
    </Provider>
  );
}

function RootLayoutNav() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const dispatch = useDispatch();
  const onboardingCompleted = useSelector(
    (state: RootState) => state.app.onboardingCompleted
  );

  const checkOnboardingStatus = async () => {
    const value = await AsyncStorage.getItem("onboardingCompleted");
    if (value === "true") {
      dispatch(completeOnboarding());
      setInitialRoute("(tabs)");
    } else {
      setInitialRoute("index");
    }
  };

  useEffect(() => {
    checkOnboardingStatus();
  }, [dispatch]);

  if (initialRoute === null) {
    return null;
  }

  return (
    <>
      {onboardingCompleted ? (
        <Redirect href="/(tabs)/home" />
      ) : (
        <Redirect href="/" />
      )}
      <ThemeProvider value={DefaultTheme}>
        <Stack
          screenOptions={{ headerShown: false }}
          initialRouteName={initialRoute}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="index" />
          <Stack.Screen
            name="webview"
            options={{
              headerShown: true,
              headerBackTitle: "Go Back",
              headerTitleStyle: { color: "#FFFFFF" },
            }}
          />
        </Stack>
      </ThemeProvider>
    </>
  );
}
