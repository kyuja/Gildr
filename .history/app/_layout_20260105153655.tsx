import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>

      <Stack.Screen name="(tabs)" />

      <Stack.Screen name="listView" />
      <Stack.Screen name="details" />
      <Stack.Screen name="chat" />
      <Stack.Screen name="manageGuildMembers" />
      <Stack.Screen name="gilde-erstellen" />
      <Stack.Screen name="gilde-bearbeiten" />

      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
