import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import CardProductMedium from "../CardProductMedium";
import CardProductSmall from "../CardProductSmall";
import { ProductProps } from "../../../types";

type ListProductsProps = {
  listProducts: ProductProps[];
  componentType: string;
  numberColumns: number;
};
type ItemProps = {
  item: ProductProps;
};

export default function ListProducts({
  listProducts,
  componentType,
  numberColumns,
}: ListProductsProps) {
  const renderItem = ({ item }: ItemProps) => {
    let component;

    if (componentType === "CardProductMedium") {
      component = <CardProductMedium item={item} />;
    } else {
      component = <CardProductSmall item={item} />;
    }

    return <>{component}</>;
  };

  return (
    <View>
      <FlatList
        data={listProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.containerFlatList}
        numColumns={numberColumns}
      />
    </View>
  );
}
