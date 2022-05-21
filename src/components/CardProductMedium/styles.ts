import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 8,
    margin: 3,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 0.4,
  },
  productImg: {
    height: 180,
    width: 169,
  },
  productTitle: {
    paddingTop: 20,
    maxWidth: 170,
  },
  productPrice: {
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 5,
    fontWeight: "bold",
  },
});

export default styles;
