import { View, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useEffect, useRef, useState } from "react";
import CardProductMedium from "../../components/CardProductMedium";
import { ProductProps } from "../../../types";
import { getProducts } from "./actions";
import { showToastError } from '../../utils/toast'

type ItemProps = {
  item: ProductProps;
};

const QUANTITY_PRODUCTS_TO_PICK = 10;

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const limitRegs = useRef(10);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getProducts(limitRegs.current);
        setProducts(response);
        setIsLoading(false);
      } catch (err) {
        showToastError('Erro ao obter os produtos. Tente novamente!');
      }
    })();
  }, []);

  const getMoreProducts = async () => {
    try {
      limitRegs.current += QUANTITY_PRODUCTS_TO_PICK;
      setIsLoading(true);
      const response = await getProducts(limitRegs.current);
      setProducts(response);
      setIsLoading(false);
    } catch (err) {
      showToastError('Erro ao obter mais produtos. Tente novamente!');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item: ProductProps) => item.id.toString()}
        renderItem={({ item }: ItemProps) => <CardProductMedium item={item} />}
        contentContainerStyle={styles.containerFlatList}
        numColumns={2}
        onEndReached={getMoreProducts}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoading ? <ActivityIndicator size={"large"} /> : null
        }
      />
    </View>
  );
}
