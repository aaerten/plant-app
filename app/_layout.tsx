import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
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

export const unstable_settings = {
  initialRouteName: "index",
};

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
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const onboardingCompleted = useSelector(
    (state: RootState) => state.app.onboardingCompleted
  );

  useEffect(() => {
    AsyncStorage.getItem("onboardingCompleted").then((value) => {
      if (value === "true") {
        dispatch(completeOnboarding());
      }
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) return null;

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {onboardingCompleted ? (
          <Stack.Screen name="(tabs)" />
        ) : (
          <Stack.Screen name="index" />
        )}
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
  );
}
