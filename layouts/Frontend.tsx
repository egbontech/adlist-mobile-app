import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { defaultStyles } from "@/constants/styles";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const screenWidth = Dimensions.get("window").width;
const navbarWidth = screenWidth * 0.95;

interface LayoutProps {
  children: React.ReactNode;
}

const Frontend: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={[defaultStyles.container, styles.container]}>      
      <View style={styles.navbarContainer}>
        <View style={styles.navbar}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.image}
          />
          <View style={styles.iconImage}>
            <TouchableOpacity>
              <View style={styles.iconContainer}>
                <SimpleLineIcons
                  name="question"
                  size={20}
                  color="rgba(0,0,0,0.6)"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.iconContainer}>
                <SimpleLineIcons
                  name="bell"
                  size={20}
                  color="rgba(0,0,0,0.6)"
                />
                <View style={styles.count}>
                  <Text style={styles.countText}>99+</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.iconContainer}>
                <Ionicons
                  name="person-outline"
                  size={20}
                  color="rgba(0,0,0,0.6)"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("@/assets/images/p.png")}
                style={styles.profilePicture}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default Frontend;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  profilePicture: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 30,
  },
  navbarContainer: {
    height: 60,
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#F0F2F5",
    borderBottomWidth: 1,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: navbarWidth,
    alignItems: "center",
  },
  iconImage: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#f7f7f7",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  count: {
    backgroundColor: "#ea4c89",
    height: 20,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    position: "absolute",
    top: 0,
    left: 20,
  },
  countText: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: "PSB",
  },
});
