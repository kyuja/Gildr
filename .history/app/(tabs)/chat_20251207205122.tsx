import React from "react";
import { View,Text, ScrollView,StyleSheet } from "react-native";


export default function ChatLayout() {
  return (
    <View>
    <Text>Chat Layout</Text>
    <ScrollView >
        <Text>Additional Chat Content</Text>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    messageContainer: {
        padding: 10
        
})