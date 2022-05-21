import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  RootStackParamList,
  RootTabParamList,
} from "../../types";
import TabNavigator from "./TabNavigator";
import Filter from "../screens/Filter";
import ProductInfo from "../screens/ProductInfo";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type ShoppingCartScreenProps = NativeStackNavigationProp<
  RootTabParamList,
  "ShoppingCart"
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{
            title: "Filtros",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="ProductInfo"
          component={ProductInfo}
          options={{
            headerTitle: '',
            headerRight: () => {
              const navigation = useNavigation<ShoppingCartScreenProps>();
              return (
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
              );
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
