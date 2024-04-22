import Colors from "@/constants/Colors";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const imageWidth = screenWidth - 16; // Adjust

type DataType = {
  id: string;
  image: ImageSourcePropType;
};

type ImageSliderProps = {
  item: DataType;
};

const data: DataType[] = [
  { id: "1", image: require("@/assets/images/slider3.jpg") },
  { id: "2", image: require("@/assets/images/slider1.jpg") },
  { id: "3", image: require("@/assets/images/slider2.jpg") },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList<DataType>>(null);

  const ImageSlider: React.FC<ImageSliderProps> = ({ item }) => {
    return <Image source={item.image} style={styles.image} />;
  };

  const renderIndicators = () => {
    return data?.map((dot, index) => {
      return (
        <View
          key={index}
          style={[
            styles.indicator,
            activeIndex === index && styles.activeIndicator,
          ]}
        ></View>
      );
    });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition / screenWidth;

    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        if (activeIndex === data.length - 1) {
          flatListRef.current.scrollToIndex({
            index: 0,
            animated: true,
          });
        } else {
          flatListRef.current.scrollToIndex({
            index: activeIndex + 1,
            animated: true,
          });
        }
      }
    }, 7000);

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <View style={styles.imageContainer}>
        <FlatList
          data={data}
          horizontal
          ref={flatListRef}
          renderItem={({ item }) => <ImageSlider item={item} />}
          keyExtractor={(item) => item.id}
          pagingEnabled
          getItemLayout={(_, index) => ({
            length: screenWidth,
            offset: screenWidth * index,
            index,
          })}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
        />
        <View style={styles.indicatorContainer}>{renderIndicators()}</View>
      </View>
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 5,
  },
  image: {
    flex: 1,
    width: imageWidth,
    height: screenHeight * 0.25,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 7,
    resizeMode: "cover", // Ensure the image covers the entire space while maintaining aspect ratio
  },
  indicator: {
    height: 7,
    width: 7,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 2,
  },
  indicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    left: "50%",
    marginLeft: -20,
  },
  activeIndicator: {
    backgroundColor: Colors.primary,
  },
});
