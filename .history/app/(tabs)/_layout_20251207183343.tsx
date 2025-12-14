import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
      name="home" options={{ 
        title: "Hauptmenü", headerTitleAlign: 'center',
        tabBarIcon: ({useColorScheme,size}) => (
          <IonIcons name="home"color={color} size={size}
        )
      }} 
      
      />

      <Tabs.Screen name="favorites" options={{ title: "Favoriten" }} />

      <Tabs.Screen name="joined" options={{ title: "Beigetreten" }} />

      <Tabs.Screen name="myGuilds" options={{ title: "Meine Gilden" }} />
    </Tabs>
  );
}