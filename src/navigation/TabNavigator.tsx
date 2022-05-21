import { Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "../../types";
import Home from "../screens/Home";
import ShoppingCart from "../screens/ShoppingCart";
import TabBarIcon from "../components/TabBarIcon";
import { FontAwesome } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Filter")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="filter"
                size={25}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          title: "Carrinho",
          tabBarIcon: ({ color }) => <TabBarIcon name="cart-plus" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
