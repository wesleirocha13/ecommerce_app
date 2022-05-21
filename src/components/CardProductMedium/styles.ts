import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 0.4,
    width: '100%',
  },
  productImg: {
    height: 130,
    width: '100%',
    resizeMode: "stretch"
  },
  productTitle: {
    textAlign: 'center',
    paddingTop: 20,
    maxWidth: 170,
    overflow: 'hidden'
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
