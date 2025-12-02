import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Login</Text>

      <Button
        title="Anmelden"
        onPress={() => router.replace("/(tabs)/home")}
      />
    </View>
  );
}