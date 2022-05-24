import { View, FlatList} from "react-native";
import CardProductSmall from "../../components/CardProductSmall";
import styles from "./styles";
import { ProductProps } from "../../../types";
import { useContext } from "react";
import CartContext from "../../context/cart";
import { CartContextProps } from "../../context/cart";
import FooterCart from './components/FooterCart'
import BlankPage from './components/BlankPage'

type ItemProps = {
  item: ProductProps;
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
            <FooterCart products={cartContext?.productsInCart || []} />
          ) : <BlankPage/>
        }
      />
    </View>
  );
}
