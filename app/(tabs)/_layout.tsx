import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

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
              source={require("../../assets/images/dashboard/home/home.png")}
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
              source={require("../../assets/images/dashboard/diagnose/diagnose.png")}
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
                  source={require("../../assets/images/dashboard/scan.png")}
                  style={{ resizeMode: "cover", tintColor: '#FFFFFF'}}
                />
                {/* <FontAwesome name="leaf" size={24} color="white" /> */}
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
              source={require("../../assets/images/dashboard/garden/garden.png")}
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
              source={require("../../assets/images/dashboard/profile/profile.png")}
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
    borderColor: '#2CCC80',
    borderRadius:'50%',
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
