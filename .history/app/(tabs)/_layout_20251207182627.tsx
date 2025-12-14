import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShow-n: false }}>
      <Tabs.Screen name="guilds" options={{ title: "Gilden" }} />
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="favorites" options={{ title: "Favoriten" }} />
    </Tabs>

    
  );
}