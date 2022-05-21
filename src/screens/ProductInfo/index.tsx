import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootTabParamList } from "../../../types";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

type ShoppingCartScreenProps = NativeStackNavigationProp<
  RootTabParamList,
  "ShoppingCart"
>;

type ProductInfoProps = {
  route: RouteProp<{ params: { id: string } }, "params">;
};

const data = {
  id: 1,
  name: "Produto 1",
  description:
    "Air Jordan, perfeito para jogarbasquete Tênis Nike Air Jordan, perf ênis Nike Air Jordan, perf ",
  price: 520,
  uri: "../../../assets/images/air_jordan.jpeg",
};

export default function ProductInfo({ route }: ProductInfoProps) {
  const navigation = useNavigation<ShoppingCartScreenProps>();
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={require("../../../assets/images/air_jordan.jpeg")}
          style={styles.img}
        />
      </View>
      <View style={styles.containerInformationProduct}>
        <Text style={styles.textTitleProduct}>
          {data.name}
        </Text>
        <ScrollView style={styles.containerDescriptionProduct}>
          <Text style={styles.textDescriptionProduct}>
            {data.description}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.containerPriceProduct}>
        <Text style={styles.textPriceProduct}>
          R${data.price}
        </Text>
        <Text style={styles.textPortionProduct}>
          Até 6x de {(data.price / 6).toFixed(2)} sem juros
        </Text>
      </View>
      <View style={styles.containerButtonPurchase}>
        <TouchableOpacity style={styles.buttonPurchase}>
          <Text style={styles.textButtonPurchase}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
