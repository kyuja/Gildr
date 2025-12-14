import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShow-n: false }}>
      <Tabs.Screen name="guilds" options={{ title: "Gilden" }} />
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="favorites" options={{ title: "Favoriten" }} />
    </Tabs>

     <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home', headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} > </Ionicons>
                    ),
                }} ></Tabs.Screen>
            <Tabs.Screen name='calendar' options={{
                title: 'Calendar', headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="calendar" color={color} size={size} > </Ionicons>
                ),
            }}></Tabs.Screen>
            <Tabs.Screen name='add' options={{
                title: 'Add', headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="add" color={color} size={size} > </Ionicons>
                ),
            }}></Tabs.Screen>
            <Tabs.Screen name='addEvent' options={{
                title: 'AddEvent', headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="add" color={color} size={size} > </Ionicons>
                ),
            }}></Tabs.Screen>
            <Tabs.Screen name='profile' options={{
                title: 'Profile', headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size}> </Ionicons>
                ),
            }}></Tabs.Screen>

        </Tabs>
  );
}