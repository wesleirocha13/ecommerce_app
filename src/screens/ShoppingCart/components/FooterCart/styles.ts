import { StyleSheet } from "react-native";
import { primaryColor } from "../../constants/../../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  containerResume: {
    backgroundColor: "#FFF",
    marginBottom: 10,
  },
  textResume: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerOrderValue: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  textOderValue: {
    fontWeight: "bold",
  },
  textPrice: {
    fontWeight: "bold",
  },
  buttonPurchase: {
    backgroundColor: primaryColor,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    padding: 10
  },
  textButtonPurchase: {
    textTransform: "uppercase",
    color: "#000",
    fontSize: 16,
    fontWeight: '700'
  },
});

export default styles;
