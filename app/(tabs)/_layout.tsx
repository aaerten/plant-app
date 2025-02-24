import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Images from "@/assets/images/images";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarActiveTintColor: "#28AF6E",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={Images.home}
              style={{ resizeMode: "cover", tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="diagnose"
        options={{
          title: "Diagnose",
          tabBarIcon: ({ color }) => (
            <Image
              source={Images.diagnose}
              style={{ resizeMode: "cover", tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.centerButton}>
              <View style={[styles.circle]}>
                <Image
                  source={Images.scan}
                  style={{ resizeMode: "cover", tintColor: "#FFFFFF" }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="garden"
        options={{
          title: "My Garden",
          tabBarIcon: ({ color }) => (
            <Image
              source={Images.garden}
              style={{ resizeMode: "cover", tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={Images.profile}
              style={{ resizeMode: "cover", tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  centerButton: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 75,
    height: 75,
    borderWidth: 4,
    borderColor: "#2CCC80",
    borderRadius: "50%",
    backgroundColor: "#28AF6E",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
