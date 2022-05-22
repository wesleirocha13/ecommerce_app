import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { primaryColor } from './src/constants/Colors';
import { NativeBaseProvider } from 'native-base'
import { CartProvider } from "./src/context/cart";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <CartProvider>
          <Navigation />
        </CartProvider>
        <StatusBar backgroundColor={primaryColor} style="auto"></StatusBar>
      </SafeAreaProvider>
    </NativeBaseProvider>

  );
}
