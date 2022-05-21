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
    <TouchableOpacity onPress={() => handleOpenProduct()} style={{width: '50%', padding: 4, marginBottom: 10}}>
      <View style={styles.container} key={item.id}>
        <Image
          source={{uri: item.image || 'image', scale: 1}}
          style={styles.productImg}
        />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>R${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
