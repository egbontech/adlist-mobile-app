import Frontend from "@/layouts/Frontend";
import { StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {
  return (
    <Frontend>
      <View style={styles.container}>
        <Text style={styles.title}>Favorites</Text>
      </View>
    </Frontend>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
