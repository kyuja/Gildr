import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from 'react-native';

export default function TabsLayout() {
  return (

    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
      name="home" options={{ 
        title: "Hauptmenü", headerTitleAlign: 'center',tabBarStyle: {position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          height: 60,
          borderRadius: 999,           // langer Kreis
          backgroundColor: "#111827",  // “Island”-Farbe
          borderTopWidth: 0,
          elevation: 10,               // Android-Schatten
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 6 },
          shadowRadius: 10,},tabBarLabelStyle: {fontSize: 13},
        tabBarIcon: ({color,size}) => (
          <Ionicons name="home" color={color} size={size + 4}></Ionicons>
        ),
      }} 
      />
      <Tabs.Screen
      name="favorites" options={{ 
        title: "Favoriten", headerTitleAlign: 'center', tabBarLabelStyle: {fontSize: 13},
        tabBarIcon: ({color,size}) => (
          <Ionicons name="heart" color={color} size={size +5}></Ionicons>
        ),

      }} 
      />

      <Tabs.Screen name="joinedGuilds" options={{
        title: "Beigetreten", headerTitleAlign: 'center',tabBarLabelStyle: {fontSize: 13},
        tabBarIcon: ({color,size}) => (
          <Ionicons name="book" color={color} size={size + 5}></Ionicons>
        ),

      }} 
      
      />
      <Tabs.Screen name="guilds" options={{ 
        title: "Meine Gilden", headerTitleAlign: 'center', tabBarLabelStyle: {fontSize: 13},
        tabBarIcon: ({color,size}) => (
          <Ionicons name="shield" color={color} size={size + 5}></Ionicons>
        ),
      }} 
      
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});