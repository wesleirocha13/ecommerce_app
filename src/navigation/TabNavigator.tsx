import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "../../types";
import Home from "../screens/Home";
import ShoppingCart from "../screens/ShoppingCart";
import TabBarIcon from "../components/TabBarIcon";
import {primaryColor} from '../constants/Colors';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          headerStyle:{
            backgroundColor: primaryColor
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarStyle: {
            height: 44
          },
          tabBarActiveTintColor: primaryColor,
        })}
      />
      <BottomTab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          title: "Carrinho",
          headerStyle:{
            backgroundColor: primaryColor
          },
          headerTitleAlign: 'center',
          tabBarActiveTintColor: primaryColor,
          tabBarIcon: ({ color }) => <TabBarIcon name="cart-plus" color={color} typeIcon="cart"/>,
          tabBarStyle: {
            height: 44
          }
        }}
      />
    </BottomTab.Navigator>
  );
}
