import { ImageSliderType } from "@/data/SliderData";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, View, ViewToken } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import SliderItem from "./SliderItem";

const { width } = Dimensions.get("screen");

type Props = {
  itemList: ImageSliderType[];
};

const Slider = ({ itemList }: Props) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const flatListRef = useRef<Animated.FlatList<ImageSliderType>>(null);

  // Auto Scroll Logic
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (paginationIndex + 1) % itemList.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setPaginationIndex(nextIndex);
    }, 3000); // every 3 sec
    return () => clearInterval(interval);
  }, [paginationIndex]);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0]?.index !== undefined) {
      setPaginationIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={itemList}
        renderItem={({ item, index }) => (
          <SliderItem
            item={item}
            index={index}
            scrollX={scrollX}
            cardStyle="medium" // ✅ smaller like figma
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={width} // ✅ Fix manual scroll repeat bug
        decelerationRate="fast" // ✅ smooth snapping
        onScroll={onScrollHandler}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <Pagination
        items={itemList}
        paginationIndex={paginationIndex}
        scrollX={scrollX}
      /> */}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
