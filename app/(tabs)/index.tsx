import Categories from "@/components/homepage/Categories";
import SearchInput from "@/components/homepage/SearchInput";
import Slider from "@/components/homepage/Slider";
import Frontend from "@/layouts/Frontend";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <Frontend>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <Slider />
        <SearchInput />
        <Categories />
      </ScrollView>
    </Frontend>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
