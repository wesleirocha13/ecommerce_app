import { View, Text } from "react-native";
import styles from './styles'

export default function BlankPage (){
  return (
    <View style={styles.container}>
        <Text style={styles.textBlank}>Nenhum item no carrinho</Text>
    </View>
  );
};
