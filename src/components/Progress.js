import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "../globalStyles";

export const Progress = ({ recentPercentage, totalPercentage, name }) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(1)).current;
  const reactive = useRef(new Animated.Value(-1)).current;

  const onLayout = (e) => {
    const newWidth = e.nativeEvent.layout.width;
    setWidth(newWidth);
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * recentPercentage) / totalPercentage);
  }, [recentPercentage, width]);

  return (
    <>
      <Text style={styles.label}>{name}</Text>
      <View onLayout={onLayout} style={[styles.progressContainer]}>
        <Animated.View
          style={[
            styles.progressInnerContainer,
            {
              transform: [
                {
                  translateX: animatedValue,
                },
              ],
            },
          ]}
        />
        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>{`${recentPercentage}%`}</Text>
        </View>
      </View>
    </>
  );
};
