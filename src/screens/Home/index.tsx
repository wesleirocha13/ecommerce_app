import { Text, View, Image, FlatList } from 'react-native';
import ListProducts from '../../components/ListProducts';

const data = [
  {key: 1, name: 'Produto 1', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 520, uri: '../../../assets/images/air_jordan.jpeg'},
  {key: 2, name: 'Produto 2', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 620, uri: '../../../assets/images/air_jordan.jpeg'},
  {key: 3, name: 'Produto 3', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 720, uri: '../../../assets/images/air_jordan.jpeg'},
  {key: 4, name: 'Produto 4', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 820, uri: '../../../assets/images/air_jordan.jpeg'},
  {key: 5, name: 'Produto 4', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 820, uri: '../../../assets/images/air_jordan.jpeg'},
  {key: 6, name: 'Produto 4', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 820, uri: '../../../assets/images/air_jordan.jpeg'},
  {key: 7, name: 'Produto 4', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 820, uri: '../../../assets/images/air_jordan.jpeg'},
  {key: 8, name: 'Produto 4', description: 'Tênis Nike Air Jordan, perfeito para jogar basquete', price: 820, uri: '../../../assets/images/air_jordan.jpeg'},
  
]

export default function Home() {
  return (
    <View style={{backgroundColor: '#f9f9f9'}}>
      
      <ListProducts listProducts={data}/>

      
    </View>
  );
}
