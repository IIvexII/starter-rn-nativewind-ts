import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import "./styles/global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello the Typescript + Nativewind is working!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
