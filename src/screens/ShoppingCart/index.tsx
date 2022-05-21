import { View } from 'react-native';
import ListProducts from '../../components/ListProducts';
import styles from "./styles";

const data = [
  {id: 1, name: 'Produto 1', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 520, uri: '../../../assets/images/air_jordan.jpeg'},
  {id: 2, name: 'Produto 2', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 620, uri: '../../../assets/images/air_jordan.jpeg'},
  {id: 3, name: 'Produto 3', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 720, uri: '../../../assets/images/air_jordan.jpeg'},
  {id: 4, name: 'Produto 3', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 720, uri: '../../../assets/images/air_jordan.jpeg'},
  {id: 5, name: 'Produto 3', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 720, uri: '../../../assets/images/air_jordan.jpeg'},
]

export default function ShoppingCart() {
  return (
    <View>
      <ListProducts listProducts={data} componentType='CardProductSmall' numberColumns={1}/>
    </View>
  );
}
