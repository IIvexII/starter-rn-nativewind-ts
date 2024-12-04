import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Hello the Typescript + Nativewind is working!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
