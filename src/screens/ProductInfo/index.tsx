import { Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type ProductInfoProps = {
  route: RouteProp<{ params: { id: string } }, 'params'>
}

export default function ProductInfo({ route }: ProductInfoProps) {
  return (
    <View>
      <Text>Tela de produtos {route.params.id}</Text>
    </View>
  );
}
