import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from 'react-native';

export default function TabsLayout() {
  return (

    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
      name="home" options={{ 
        title: "Hauptmenü", headerTitleAlign: 'center',
        tabBarIcon: ({color,size}) => (
          <Ionicons name="home" color={color} size={size + 4}></Ionicons>
        ),
      }} 
      />
      <Tabs.Screen
      name="favorites" options={{ 
        title: "Favoriten", headerTitleAlign: 'center', 
        tabBarIcon: ({color,size}) => (
          <Ionicons name="heart" color={color} size={size +5}></Ionicons>
        ),

      }} 
      />

      <Tabs.Screen name="joinedGuilds" options={{
        title: "Beigetreten", headerTitleAlign: 'center',
        tabBarIcon: ({color,size}) => (
          <Ionicons name="book" color={color} size={size}></Ionicons>
        ),

      }} 
      
      />
      <Tabs.Screen name="guilds" options={{ 
        title: "Meine Gilden", headerTitleAlign: 'center',
        tabBarIcon: ({color,size}) => (
          <Ionicons name="shield" color={color} size={size}></Ionicons>
        ),
      }} 
      
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});