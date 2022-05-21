import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList, ProductProps } from '../../../types'
import {useNavigation} from '@react-navigation/native';

type ProductInfoScreenProps = NativeStackNavigationProp<RootStackParamList, 'ProductInfo'>;

type CardProductMediumProps = {
  item: ProductProps;
}

export default function CardProductMedium({item} : CardProductMediumProps) {
  const navigation = useNavigation<ProductInfoScreenProps>();

  const handleOpenProduct = () => {
    navigation.navigate('ProductInfo', {id: item.id.toString()})
  };

  return (
    <TouchableOpacity onPress={() => handleOpenProduct()}>
      <View style={styles.container} key={item.id}>
        <Image
          source={require("../../../assets/images/air_jordan.jpeg")}
          style={styles.productImg}
        />
        <Text style={styles.productTitle}>{item.name}</Text>
        <Text style={styles.productPrice}>R${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
