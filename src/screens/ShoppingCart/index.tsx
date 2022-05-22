import { View, FlatList, Button, Text } from "react-native";
import CardProductSmall from "../../components/CardProductSmall";
import styles from "./styles";
import { ProductProps } from "../../../types";
import { useContext } from "react";
import CartContext from "../../context/cart";
import { CartContextProps } from "../../context/cart";

type ItemProps = {
  item: ProductProps;
};

type ComponentFooterProps = {
  products: ProductProps[] | [];
};

const ComponentFooter = ({ products }: ComponentFooterProps) => {
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
    <View style={{ paddingTop: 20, paddingBottom: 20 }}>
      <View style={{ backgroundColor: "#FFF", marginBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Resumo
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Valor Total</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>
              R$ {calculateOrderValue()}
            </Text>
          </View>
        </View>
      </View>
      <Button title="Finalizar Pedido" />
    </View>
  );
};

export default function ShoppingCart() {
  const cartContext = useContext<CartContextProps | null>(CartContext);
  return (
    <View>
      <FlatList
        data={cartContext?.productsInCart || []}
        keyExtractor={(item: ProductProps) => item.id.toString()}
        renderItem={({ item }: ItemProps) => <CardProductSmall item={item} />}
        contentContainerStyle={styles.containerFlatList}
        numColumns={1}
        ListFooterComponent={
          cartContext?.productsInCart &&
          cartContext?.productsInCart.length > 0 ? (
            <ComponentFooter products={cartContext?.productsInCart || []} />
          ) : null
        }
      />
    </View>
  );
}
