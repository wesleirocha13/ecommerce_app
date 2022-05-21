import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, ProductProps } from "../../../types";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { primaryColor, greyColor, redColor} from '../../constants/Colors'

type ProductInfoScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "ProductInfo"
>;

type CardProductMediumProps = {
  item: ProductProps;
};

export default function CardProductSmall({ item }: CardProductMediumProps) {
  const navigation = useNavigation<ProductInfoScreenProps>();

  const handleOpenProduct = () => {
    navigation.navigate("ProductInfo", { id: item.id.toString() });
  };

  return (
    <View style={styles.container} key={item.id}>
      <View style={styles.containerInfoProduct}>
        <View style={styles.containerImgProduct}>
          <Image
            source={require("../../../assets/images/air_jordan.jpeg")}
            style={styles.imgProduct}
          />
        </View>
        <TouchableOpacity
          onPress={() => handleOpenProduct()}
          style={styles.containerDescriptionProduct}
        >
          <Text style={styles.textTitleProduct}>{item.title}</Text>
          <Text style={styles.textDescriptionProduct}>{item.description}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerActions}>
        <View style={styles.containerPriceProduct}>
          <Text style={styles.textPrice}>R$ {item.price}</Text>
        </View>
        <View style={styles.containerQuantityButtons}>
          <View style={styles.containerBoxQuantityButtons}>
            <TouchableOpacity style={styles.containerPlusButton}>
              <FontAwesome name="minus-circle" size={18} color={greyColor}/>
            </TouchableOpacity>
            <View style={styles.containerQuantityProduct}>
              <Text style={styles.textQuantityProduct}>2</Text>
            </View>
            <TouchableOpacity style={styles.containerMinusButton}>
              <FontAwesome name="plus-circle" size={18} color={primaryColor} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerTrashButton}>
          <TouchableOpacity>
            <FontAwesome name="trash-o" size={26} color={redColor}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
