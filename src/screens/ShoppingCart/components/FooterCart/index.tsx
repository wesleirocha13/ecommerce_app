import { View, TouchableOpacity, Text } from "react-native";
import { ProductProps } from "../../../../../types";
import styles from './styles'

type ComponentFooterProps = {
  products: ProductProps[] | [];
};

export default function ComponentFooter ({ products }: ComponentFooterProps){
  const calculateOrderValue = () => {
    let total = 0;
    products &&
      products.forEach((product) => {
        total += product.quantityInCart
          ? product.price * product.quantityInCart
          : product.price;
      });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerResume}>
        <Text style={styles.textResume}>
          Resumo
        </Text>
        <View style={styles.containerOrderValue}>
          <View>
            <Text style={styles.textOderValue}>Valor Total</Text>
          </View>
          <View>
            <Text style={styles.textPrice}>
              R$ {calculateOrderValue()}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonPurchase}>
          <Text style={styles.textButtonPurchase}>Finalizar pedido</Text>
      </TouchableOpacity>
    </View>
  );
};
