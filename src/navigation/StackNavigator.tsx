import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import TabNavigator from "./TabNavigator";
import Filter from "../screens/Filter";
import ProductInfo from "../screens/ProductInfo";

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
            title: "Produto",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
