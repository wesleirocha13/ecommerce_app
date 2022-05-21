import { FlatList } from "react-native";
import styles from "./styles";
import CardProductMedium from '../CardProductMedium';
import { ProductProps } from '../../../types';

type ListProductsProps = {
  listProducts: ProductProps[];
};

export default function ListProducts({ listProducts }: ListProductsProps) {
  return (
    <FlatList
      data={listProducts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CardProductMedium item={item} />}
      contentContainerStyle={styles.containerFlatList}
      numColumns={2}
    />
  );
}
