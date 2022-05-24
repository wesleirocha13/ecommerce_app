import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, RootTabParamList } from "../../types";
import TabNavigator from "./TabNavigator";
import ProductInfo from "../screens/ProductInfo";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { primaryColor } from "../constants/Colors";
import { useContext } from "react";
import { CartContextProps } from '../context/cart'
import CartContext from '../context/cart'

type ShoppingCartScreenProps = NativeStackNavigationProp<
  RootTabParamList,
  "ShoppingCart"
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  const cartContext = useContext<CartContextProps | null>(CartContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="ProductInfo"
          component={ProductInfo}
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: primaryColor,
            },
            headerRight: () => {
              const navigation = useNavigation<ShoppingCartScreenProps>();
              return (
                <View style={styles.containerNumberProductsInCart}>
                  <Pressable
                    onPress={() => navigation.navigate("ShoppingCart")}
                    style={({ pressed }) => ({
                      opacity: pressed ? 0.5 : 1,
                    })}
                  >
                    <FontAwesome
                      name="cart-plus"
                      size={25}
                      style={{ marginRight: 15 }}
                    />
                  </Pressable>
                  <Text style={styles.textNumberProductsInCart}>{cartContext?.productsInCart.length || 0}</Text>
                </View>
              );
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  containerNumberProductsInCart:{
    flexDirection: "row"
  },
  textNumberProductsInCart: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    position: "absolute",
    marginLeft: 20,
    marginTop: -9,
    backgroundColor: "red",
    width: 15,
    borderRadius: 10,
    textAlign: "center",
  },
});
