import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#410008" }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Hauptmenü",
          tabBarLabelStyle: { fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size + 4} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoriten",
          tabBarLabelStyle: { fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size + 5} />
          ),
        }}
      />

      <Tabs.Screen
        name="joinedGuilds"
        options={{
          title: "Beigetreten",
          tabBarLabelStyle: { fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size + 5} />
          ),
        }}
      />

      <Tabs.Screen
        name="guilds"
        options={{
          title: "Meine Gilden",
          tabBarLabelStyle: { fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shield" color={color} size={size + 5} />
          ),
        }}
      />
    <Tabs.Screen
    name="listView"
  options={{
    href: null
  }}
    />
    <Tabs.Screen
    name="details"
  options={{
    href: null
  }}
    />
    <Tabs.Screen
    name="chat"
  options={{
    href: null
  }}
    />
    <Tabs.Screen
    name="settings"
  options={{
    href: null
  }}
    />
    </Tabs>
  );
}

