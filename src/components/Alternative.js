import { Text, View } from "react-native";
import React from "react";
import { styles } from "../globalStyles";

export const Alternative = ({ recentPercentage, name }) => {
  return (
    <View style={styles.alternativeContainer}>
      <Text>
        <Text style={styles.alternativeLabel}>{`${name}: `}</Text>
        <Text
          style={styles.alternativePercentage}
        >{`${recentPercentage} %`}</Text>
      </Text>
    </View>
  );
};
