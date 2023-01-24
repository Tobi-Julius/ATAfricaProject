import { View, Text } from "react-native";
import React from "react";
import { styles } from "../globalStyles";

export const Error = ({error}) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};
