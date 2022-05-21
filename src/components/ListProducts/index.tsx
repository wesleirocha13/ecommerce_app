import { FlatList } from "react-native";
import styles from "./styles";
import CardProductMedium from '../CardProductMedium'

type Product = {
  key: number;
  name: string;
  description: string;
  price: number;
  uri: string;
};

type Products = {
  listProducts: Product[];
};

export default function ListProducts({ listProducts }: Products) {
  return (
    <FlatList
      data={listProducts}
      keyExtractor={(item) => item.key.toString()}
      renderItem={({ item }) => <CardProductMedium item={item} />}
      contentContainerStyle={styles.containerFlatList}
      numColumns={2}
    />
  );
}
