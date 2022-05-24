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
import { showToastError, showToastSuccess } from '../../utils/toast'
import { shortenDescription, shortenTitle } from '../../utils/text'

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

  //Abre um produto
  const handleOpenProduct = () => {
    navigation.navigate("ProductInfo", { id: item.id.toString() });
  };

  // Aumenta a quantidade do produto
  const handleIncreaseAmountOfProduct = () => {
    try{
      cartContext?.increaseAmountOfProduct(item.id);
    }catch(err){
      showToastError('Erro ao adicionar um produto, tente novamente!')
    }
  };

  // Remove um produto
  const handleRemoveProductFromCart = () => {
    try{
      cartContext?.removeProductFromCart(item.id);
      showToastSuccess('Produto removido do carrinho com sucesso!')
    }catch(err){
      showToastError('Erro ao remover o produto, tente novamente!')
    }
  };

  // Diminuiu a quantidade do produto
  const handleDecreaseAmountOfProduct = () => {
    if(item.quantityInCart && item.quantityInCart > 1){
      try{
        cartContext?.decreaseAmountOfProduct(item.id);
      }catch(err){
        showToastError('Erro ao diminuir um produto, tente novamente!')
      }
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
          <Text style={styles.textTitleProduct}>{shortenTitle(item.title, 25)}</Text>
          <Text style={styles.textDescriptionProduct}>
            {shortenDescription(item.description, 100)}
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
