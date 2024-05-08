import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const screenWidth = Dimensions.get("window").width;

export default function SearchInput() {
  return (
    <TouchableOpacity onPress={() => router.push("/screens/search")}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>What are you looking for today?</Text>
        <FontAwesome
          name="search"
          size={18}
          color="black"
          style={styles.searchIcon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: screenWidth * 0.9,
    backgroundColor: "#f9f9f9",
    alignSelf: "center",
    marginVertical: 25,
    height: 45,
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  inputText: {
    fontFamily: "PR",
    color: "#9e9ea7",
    fontSize: 13,
  },
  searchIcon: {
    position: "absolute",
    right: 15,
    color: Colors.iconColor,
  },
});
