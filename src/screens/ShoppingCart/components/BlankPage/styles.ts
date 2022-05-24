import { StyleSheet } from "react-native";
import { greyColor } from "../../constants/../../../constants/Colors";
import Layout from "../../constants/../../../constants/Layout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Layout.window.height,
  },
  textBlank: {
    fontSize: 20,
    color: greyColor,
    textAlign: "center",
    height: "80%",
    textAlignVertical: "center",
  },
});

export default styles;
