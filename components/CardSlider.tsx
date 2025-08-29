// components/CardSlider.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  View,
} from "react-native";
import { CardData } from "../data/CardSliderData";
import Card from "./Card";

const { width } = Dimensions.get("screen");
const CARD_WIDTH = width * 0.8; // Main card width
const CARD_HEIGHT = 180;
const SIDE_OFFSET = width * 0.14; // How much side cards are offset

interface CardSliderProps {
  data: CardData[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const CardSlider: React.FC<CardSliderProps> = ({
  data,
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const isAnimating = useRef(false);

  // Get the three cards to display (prev, current, next)
  const getVisibleCards = () => {
    const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % data.length;

    return {
      prev: data[prevIndex],
      current: data[currentIndex],
      next: data[nextIndex],
    };
  };

  // Auto slide functionality
  useEffect(() => {
    if (!autoSlide || data.length <= 1 || isAnimating.current) return;

    const interval = setInterval(() => {
      slideToNext();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoSlide, autoSlideInterval, data.length]);

  const slideToNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
      slideAnim.setValue(0);
      isAnimating.current = false;
    });
  };

  const slideToPrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    Animated.timing(slideAnim, {
      toValue: -1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
      slideAnim.setValue(0);
      isAnimating.current = false;
    });
  };

  // Pan responder for gesture handling
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dx) > 10 && Math.abs(gestureState.dy) < 50;
    },

    onPanResponderMove: (_, gestureState) => {
      if (isAnimating.current) return;
      const progress = gestureState.dx / CARD_WIDTH;
      slideAnim.setValue(Math.max(-1, Math.min(1, -progress)));
    },

    onPanResponderRelease: (_, gestureState) => {
      if (isAnimating.current) return;
      const { dx, vx } = gestureState;
      const threshold = CARD_WIDTH * 0.3;

      if (dx > threshold || vx > 0.5) {
        slideToPrev();
      } else if (dx < -threshold || vx < -0.5) {
        slideToNext();
      } else {
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
        }).start(() => {
          isAnimating.current = false;
        });
      }
    },
  });

  const { prev, current, next } = getVisibleCards();

  // Transform for previous card (left side)
  const prevTransform = slideAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, -SIDE_OFFSET, -SIDE_OFFSET * 2],
    extrapolate: "clamp",
  });

  // Transform for current card (center)
  const currentTransform = slideAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [SIDE_OFFSET, 0, -SIDE_OFFSET],
    extrapolate: "clamp",
  });

  // Transform for next card (right side)
  const nextTransform = slideAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [SIDE_OFFSET * 2, SIDE_OFFSET, 0],
    extrapolate: "clamp",
  });

  // Scale animations
  const prevScale = slideAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1, 0.85, 0.7],
    extrapolate: "clamp",
  });

  const currentScale = slideAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0.85, 1, 0.85],
    extrapolate: "clamp",
  });

  const nextScale = slideAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0.7, 0.85, 1],
    extrapolate: "clamp",
  });

  // Opacity animations
  const prevOpacity = slideAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1, 0.6, 0.3],
    extrapolate: "clamp",
  });

  const currentOpacity = slideAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0.6, 1, 0.6],
    extrapolate: "clamp",
  });

  const nextOpacity = slideAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0.3, 0.6, 1],
    extrapolate: "clamp",
  });

  if (data.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer} {...panResponder.panHandlers}>
        {/* Previous Card - Left Side */}
        <Animated.View
          style={[
            styles.cardWrapper,
            {
              transform: [{ translateX: prevTransform }, { scale: prevScale }],
              opacity: prevOpacity,
              zIndex: 1,
            },
          ]}
        >
          <Card item={prev} index={0} isActive={false} />
        </Animated.View>

        {/* Current Card - Center */}
        <Animated.View
          style={[
            styles.cardWrapper,
            styles.centerCard,
            {
              transform: [
                { translateX: currentTransform },
                { scale: currentScale },
              ],
              opacity: currentOpacity,
              zIndex: 3,
            },
          ]}
        >
          <Card item={current} index={1} isActive={true} />
        </Animated.View>

        {/* Next Card - Right Side */}
        <Animated.View
          style={[
            styles.cardWrapper,
            {
              transform: [{ translateX: nextTransform }, { scale: nextScale }],
              opacity: nextOpacity,
              zIndex: 1,
            },
          ]}
        >
          <Card item={next} index={2} isActive={false} />
        </Animated.View>
      </View>

      {/* Pagination Dots */}
      {/* <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 170,
    overflow: "hidden",
  },
  cardsContainer: {
    width: width,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cardWrapper: {
    position: "absolute",
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  centerCard: {
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  pagination: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: "#3B82F6",
    width: 20,
  },
});

export default CardSlider;
