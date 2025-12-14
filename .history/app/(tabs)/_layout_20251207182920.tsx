import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: "Hauptmenü" }} />
      <Tabs.Screen name="l" options={{ title: "Home" }} />
      <Tabs.Screen name="favorites" options={{ title: "Favoriten" }} />

    </Tabs>
  );
}