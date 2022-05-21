import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootTabParamList, ProductProps } from "../../../types";
import styles from "./styles";
import { useEffect, useState } from "react";
import axios from 'axios';

type ProductInfoProps = {
  route: RouteProp<{ params: { id: string } }, "params">;
};

export default function ProductInfo({ route }: ProductInfoProps) {
  const productId = route.params.id;
  const [product, setProduct] = useState<ProductProps>()

  const getProduct = async ()=>{
    const res = await axios({
      method: 'get',
      url: `https://fakestoreapi.com/products/${productId}`,
    })
    setProduct(res.data)
  }

  useEffect(()=>{
    getProduct();
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={{uri: product?.image || 'image', scale: 1}}
          style={styles.img}
        />
      </View>
      <View style={styles.containerInformationProduct}>
        <Text style={styles.textTitleProduct}>
          {product?.title}
        </Text>
        <ScrollView style={styles.containerDescriptionProduct}>
          <Text style={styles.textDescriptionProduct}>
            {product?.description}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.containerPriceProduct}>
        <Text style={styles.textPriceProduct}>
          {product ? `R$ ${product.price}` : ''}
        </Text>
        <Text style={styles.textPortionProduct}>
          {product ? `Até 6x de  ${(product.price / 6).toFixed(2)} sem juros` : ''}
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
