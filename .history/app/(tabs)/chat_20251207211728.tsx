import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function ChatLayout() {

    const messages = [
        { id: 1, text: "Hello!" },
        { id: 2, text: "How are you?" },
        { id: 3, text: "Goodbye!" }
    ];



  return (
    <View>
    <Text>Chat Layout</Text>
    <View style={styles.chatContainer}>
    <ScrollView contentContainerStyle={styles.messageArea}>
        {messages.map}
    </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        backgroundColor:'blue',
    },
    messageArea: {
        paddingHorizontal:10,
        paddingVertical:5,
        flexGrow:1,  
    },
    messageContainer: {
        alignSelf:'center',
        backgroundColor:'yellow',
        paddingHorizontal:10,
        paddingVertical:5,
        width:'90%',
    },
})