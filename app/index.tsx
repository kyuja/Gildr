import { Link } from "expo-router";
import { Text, View, Button } from "react-native";

export default function Start() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>Gildr</Text>

      <Link href="/login" asChild>
        <Button title="Login" />
      </Link>

      <Link href="/register" asChild>
        <Button title="Registrieren" />
      </Link>
    </View>
  );
}
