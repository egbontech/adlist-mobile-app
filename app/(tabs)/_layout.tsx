import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors.iconColor,
        tabBarStyle: {
          elevation: 0,
          borderTopColor: "#f0f2f5",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" color={color} size={32} />
          ),
        }}
      />
      <Tabs.Screen
        name="createAd"
        options={{
          title: "Post Ad",
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          title: "MarketPlace",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#ea4c89",
        }}
      />
    </Tabs>
  );
}
