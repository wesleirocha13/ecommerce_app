import { Text, View, Image } from "react-native";
import styles from "./styles";

export default function CardProductMedium({ item }) {
  return (
    <View style={styles.container} key={item.key}>
      <Image
        source={require("../../../assets/images/air_jordan.jpeg")}
        style={styles.productImg}
      />
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productPrice}>R${item.price}</Text>
    </View>
  );
}
