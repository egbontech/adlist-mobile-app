import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Explore by category</Text>
      <View >
        <View >
          {/* <Image source={require("@/assets/images/logo.png")} /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    alignSelf: "center",
  },
  headerText: {
    fontFamily: "PSB",
    fontSize: 18,
  },
  categoryContainer:{

  },
  category:{
    
  }
});
