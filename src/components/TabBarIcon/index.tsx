import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import styles from './styles';
import { CartContextProps } from '../../context/cart'
import CartContext from '../../context/cart'
import { useContext } from 'react'

export default function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  typeIcon?: string
}) {
  const cartContext = useContext<CartContextProps | null>(CartContext);
  return (
    <View style={styles.containerNumberProductsInCart}>
      <FontAwesome size={22} style={{ marginBottom: -5 }} {...props} />
      {
        props.typeIcon && props.typeIcon === 'cart'
        && <Text style={styles.textNumberProductsInCart}>{cartContext?.productsInCart.length || 0}</Text>
      }
    </View>
  );
}
