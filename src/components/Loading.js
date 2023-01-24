import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "../globalStyles";
import { color } from "../constants";
import { layout } from "../utils";

export const Loading = () => {
  return (
    <View style={styles.errorContainer}>
      <ActivityIndicator color={color.color4} size={layout.heightPixel(50)} />
    </View>
  );
};
