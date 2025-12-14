import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function ChatLayout() {
  return (
    <View>
    <Text>Chat Layout</Text>
    <ScrollView style={styles.messageContainer}>
        <Text>Additional Chat Content</Text>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    messageContainer: {
        flex:1,
        justifyContent: 
        backgroundColor: 'white',
        borderRadius:10,
    },
})