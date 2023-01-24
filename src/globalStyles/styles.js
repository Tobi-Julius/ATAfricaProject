import { StyleSheet, StatusBar } from "react-native";
import { color } from "../constants";
import { layout } from "../utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: layout.pixelSizeHorizontal(14),
  },
  progressContainer: {
    backgroundColor: color.color3,
    overflow: "hidden",
    height: layout.heightPixel(40),
    borderRadius: layout.fontPixel(8),
  },
  progressInnerContainer: {
    backgroundColor: color.color4,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  label: {
    marginVertical: layout.pixelSizeVertical(10),
    fontSize: layout.size.h3,
    fontFamily: "monospace",
  },
  percentage: {
    fontFamily: "monospace",
    color: "#fff",
  },
  slider: {},
  loadingErrorContainer: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: "center",
    alignItems: "center",
  },
  labelPercentage: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: layout.pixelSizeVertical(15),
    marginBottom: layout.pixelSizeVertical(5),
  },
  alternativeLabel: {
    marginVertical: layout.pixelSizeVertical(10),
    fontSize: layout.size.h3,
    fontFamily: "monospace",
  },
  alternativePercentage: {
    fontFamily: "monospace",
  },
  alternativeContainer: {
    marginVertical: layout.pixelSizeVertical(13),
  },
  sliderValueContainer: {
    alignSelf: "flex-end",
    // width: layout.width,
    marginVertical: layout.pixelSizeVertical(20),
    backgroundColor: color.color4,
    width: layout.widthPixel(50),
    height: layout.heightPixel(50),
    borderRadius: layout.fontPixel(8),
    alignItems: "center",
    justifyContent: "center",
  },
  sliderText: {
    color: "#fff",
    fontSize: layout.size.h2,
    fontFamily: "monospace",
  },
  percentageContainer: {
    marginRight: layout.pixelSizeHorizontal(14),
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.color1,
  },
  errorText: {
    color: "#000",
    fontSize: layout.size.h2,
    fontFamily: "monospace",
  },
});
