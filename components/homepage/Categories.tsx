import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Explore by category</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity>
          <View style={styles.category}>
            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/car.png")}
                style={styles.image}
              />
            </View>
            <Text>Vehicles</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.category}>
            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/house.png")}
                style={styles.image}
              />
            </View>
            <Text>Property</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.category}>
            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/service.png")}
                style={styles.image}
              />
            </View>
            <Text>Services</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.category}>
            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/gym.png")}
                style={styles.image}
              />
            </View>
            <Text>Sports and Outdoors</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.category}>
            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/case.png")}
                style={styles.image}
              />
            </View>
            <Text>Jobs</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.category}>
            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/teddy.png")}
                style={styles.image}
              />
            </View>
            <Text>Babies and Kids</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.category}>
            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/cream.png")}
                style={styles.image}
              />
            </View>
            <Text>Babies and Kids</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.category}>
            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/printer.png")}
                style={styles.image}
              />
            </View>
            <Text>Babies and Kids</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.category}>
            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/food.png")}
                style={styles.image}
              />
            </View>
            <Text>Babies and Kids</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    alignSelf: "center",
    paddingBottom: 50,
  },
  headerText: {
    fontFamily: "PSB",
    fontSize: 18,
  },
  categoryContainer: {
    width: screenWidth * 0.9,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop: 15,
    flexWrap: "wrap",
    rowGap: 30,
  },
  category: {
    width: screenWidth * 0.28,
    height: 100,
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: "#f7f7f7",
    borderRadius: 15,
    marginBottom: 5,
    width: screenWidth * 0.28,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: screenWidth * 0.2,
    height: 100,
    resizeMode: "contain",
    borderWidth: 5,
  },
});
