import { View, FlatList, RefreshControl } from "react-native";
import styles from "./styles";
import { useEffect, useRef, useState } from "react";
import CardProductMedium from "../../components/CardProductMedium";
import { ProductProps } from "../../../types";
import { getProducts } from "./actions";
import { showToastError } from '../../utils/toast'

type ItemProps = {
  item: ProductProps;
};

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Obtem a lista de produtos
  const handleGetProducts = async ()=>{
    try {
      setIsLoading(true);
      const response = await getProducts();
      setProducts(response);
      setIsLoading(false);
    } catch (err) {
      showToastError('Erro ao obter os produtos. Tente novamente!');
    }
  }

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item: ProductProps) => item.id.toString()}
        renderItem={({ item }: ItemProps) => <CardProductMedium item={item} />}
        contentContainerStyle={styles.containerFlatList}
        numColumns={2}
        initialNumToRender={10}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={()=>handleGetProducts()}
          />
        }
      />
    </View>
  );
}
