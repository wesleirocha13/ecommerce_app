import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, ProductProps } from "../../../types";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { primaryColor, greyColor, redColor } from "../../constants/Colors";
import { useContext } from "react";
import CartContext from "../../context/cart";
import { CartContextProps } from "../../context/cart";

type ProductInfoScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "ProductInfo"
>;

type CardProductMediumProps = {
  item: ProductProps;
};

export default function CardProductSmall({ item }: CardProductMediumProps) {
  const navigation = useNavigation<ProductInfoScreenProps>();
  const cartContext = useContext<CartContextProps | null>(CartContext);

  const handleOpenProduct = () => {
    navigation.navigate("ProductInfo", { id: item.id.toString() });
  };

  const handleIncreaseAmountOfProduct = () => {
    cartContext?.increaseAmountOfProduct(item.id);
  };

  const handleRemoveProductFromCart = () => {
    cartContext?.removeProductFromCart(item.id);
  };

  const handleDecreaseAmountOfProduct = () => {
    if(item.quantityInCart && item.quantityInCart > 1){
      cartContext?.decreaseAmountOfProduct(item.id);
    }
  };

  return (
    <View style={styles.container} key={item.id}>
      <View style={styles.containerInfoProduct}>
        <View style={styles.containerImgProduct}>
          <Image
            source={{ uri: item.image || "image", scale: 1 }}
            style={styles.imgProduct}
          />
        </View>
        <TouchableOpacity
          onPress={() => handleOpenProduct()}
          style={styles.containerDescriptionProduct}
        >
          <Text style={styles.textTitleProduct}>{item.title}</Text>
          <Text style={styles.textDescriptionProduct}>
            tenho que adicionar a descrição com tratativa de tamanho
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerActions}>
        <View style={styles.containerPriceProduct}>
          <Text style={styles.textPrice}>R$ {item.price}</Text>
        </View>
        <View style={styles.containerQuantityButtons}>
          <View style={styles.containerBoxQuantityButtons}>
            <TouchableOpacity
              style={styles.containerPlusButton}
              onPress={() => handleDecreaseAmountOfProduct()}
            >
              <FontAwesome name="minus-circle" size={18} color={greyColor} />
            </TouchableOpacity>
            <View style={styles.containerQuantityProduct}>
              <Text style={styles.textQuantityProduct}>
                {item.quantityInCart}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.containerMinusButton}
              onPress={() => handleIncreaseAmountOfProduct()}
            >
              <FontAwesome name="plus-circle" size={18} color={primaryColor} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerTrashButton}>
          <TouchableOpacity>
            <FontAwesome
              name="trash-o"
              size={26}
              color={redColor}
              onPress={() => handleRemoveProductFromCart()}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
