import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { ProductProps } from "../../../types";
import styles from "./styles";
import { useEffect, useState, useContext } from "react";
import { getProduct } from "./actions";
import { showToastError, showToastSuccess } from "../../utils/toast";
import { shortenTitle } from "../../utils/text";
import CartContext from "../../context/cart";
import { CartContextProps } from "../../context/cart";
import { FontAwesome } from "@expo/vector-icons";

type ProductInfoProps = {
  route: RouteProp<{ params: { id: string } }, "params">;
};

export default function ProductInfo({ route }: ProductInfoProps) {
  const productId = route.params.id;
  const [product, setProduct] = useState<ProductProps>();
  const cartContext = useContext<CartContextProps | null>(CartContext);

  //Obtem o produto
  const handleGetProduct = async () => {
    try {
      const response = await getProduct(productId);
      setProduct(response);
    } catch (err) {
      showToastError("Erro ao obter o produto. Tente novamente!");
    }
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  //Adiciona o produto no carrinho
  const handleAddProductInCart = () => {
    cartContext?.addProductInCart(product);
    showToastSuccess("Produto adicionado ao carrinho com sucesso!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={{ uri: product?.image || "image", scale: 1 }}
          style={styles.img}
        />
      </View>
      <View style={styles.containerInformationProduct}>
        <Text style={styles.textTitleProduct}>{product?.title ? shortenTitle(product.title, 30) : ''}</Text>
        <View style={styles.containerRating}>
          <View>
            <Text style={styles.textRating}>{product?.rating?.rate}</Text>
          </View>
          <View style={styles.containerStarRating}>
            <FontAwesome name="star" size={20} color="yellow" />
          </View>
          <View style={styles.containerNumberRating}>
            <Text style={styles.textRating}>
              {product?.rating.count} Avaliações
            </Text>
          </View>
        </View>
        <ScrollView style={styles.containerDescriptionProduct}>
          <Text style={styles.textDescriptionProduct}>
            {product?.description}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.containerPriceProduct}>
        <Text style={styles.textPriceProduct}>
          {product ? `R$ ${product.price}` : ""}
        </Text>
      </View>
      <View style={styles.containerButtonPurchase}>
        <TouchableOpacity
          style={styles.buttonPurchase}
          onPress={() => handleAddProductInCart()}
          disabled={!product}
        >
          <Text style={styles.textButtonPurchase}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
