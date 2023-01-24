import { ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Alternative,
  Progress,
  NumberSlider,
  Error,
  Loading,
} from "../components";
import { layout } from "../utils";
import { styles } from "../globalStyles";
import Animated, { Layout, Easing } from "react-native-reanimated";
import { request } from "../utils/request";

export const MainScreen = () => {
  const [state, setState] = useState({
    riskScore: 0,
    data: [],
    loading: "",
    error: "",
  });

  const dataFetching = () => {
    setState({ ...state, loading: true, error: "" });
    try {
      request
        .get("/atafricadata")
        .then((res) => {
          setState({ ...state, loading: false, error: "", data: res.data });
          return res;
        })
        .catch((err) => {
          setState({
            ...state,
            loading: false,
            error: err.message,
            data: res.data,
          });
        });
    } catch (error) {
      setState({ ...state, loading: false, error: error, data: res.data });
    }
  };

  useEffect(() => {
    let unsubscribe = true;
    if (unsubscribe) {
      dataFetching();
    }

    return () => (unsubscribe = false);
  }, []);

  const displayData = state.data?.find((e) => e.riskScore === state.riskScore);

  return state.loading ? (
    <Loading />
  ) : state.error ? (
    <Error error={state.error} />
  ) : (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <NumberSlider state={state} setState={setState} />
      {displayData?.riskData.map((item, index) => {
        return item.recentPercentage === 0 ? (
          <View key={index}>
            <Animated.View
              layout={Layout.easing(Easing.bounce).delay(index * 100)}
              key={item.recentPercentage}
              // entering={FadeInDown.duration(300)}
              // exiting={FadeInUp.duration(300)}
            >
              <Alternative
                recentPercentage={item.recentPercentage}
                name={item.name}
              />
            </Animated.View>
          </View>
        ) : (
          <View key={index}>
            <Progress
              name={item.name}
              recentPercentage={item.recentPercentage}
              totalPercentage={100}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};
