import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
      name="home" options={{ 
        title: "Hauptmenü", headerTitleAlign: 'center',
        tabBarIcon: ({color,size}) => (
          <Ionicons name="home" color={color} size={size}></Ionicons>
        ),
      }} 
      />
      <Tabs.Screen
      name="favorites" options={{ 
        title: "Favoriten", headerTitleAlign: 'center',
        tabBarIcon: ({color,size}) => (
          <Ionicons name="heart" color={color} size={size}></Ionicons>
        ),

      }} 
      />

      <Tabs.Screen name="joined" options={{title: "Beigetreten"
        
      }} 
      
      />

      <Tabs.Screen name="joined" options={{ title: "Beigetreten" }} />

      <Tabs.Screen name="myGuilds" options={{ title: "Meine Gilden" }} />
    </Tabs>
  );
}