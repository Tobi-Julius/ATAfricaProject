import { View } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import { styles } from "../globalStyles";
import Animated, { BounceInUp } from "react-native-reanimated";
import { color } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

export const NumberSlider = ({ setState, state }) => {
  return (
    <SafeAreaView>
      <Slider
        step={1}
        onValueChange={(num) => setState({ ...state, riskScore: num })}
        minimumValue={0}
        maximumValue={10}
        value={state.riskScore}
        minimumTrackTintColor={"lightgray"}
        maximumTrackTintColor={color.color4}
        thumbTintColor={color.color3}
        style={styles.slider}
      />
      <View style={styles.sliderValueContainer}>
        <Animated.Text
          key={state.riskScore}
          entering={BounceInUp}
          style={styles.sliderText}
        >
          {state.riskScore}
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
};
