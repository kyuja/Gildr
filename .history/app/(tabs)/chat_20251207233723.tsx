import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function ChatLayout() {

    const messages = [
        { id: 1, text: "Das freut mich!" },
        { id: 2, text: "Wann haben wir eigentlich das nächste Treffen geplant?" },
        { id: 3, text: "Am nächsten Montag um 18 Uhr" }
    ];

    return (
        <View style={styles.screenContainer}>
        <Text style={styles.header}>Chat Layout</Text>
        <View style={styles.chatContainer}>
        <ScrollView contentContainerStyle={styles.messageArea}>
            {messages.map((message) => (
                <View key={message.id} style={styles.messageContainer}>
                    <Text>{message.text}</Text>
                </View>
            ))}
        </ScrollView>
        </View>
        <View>
            <Text>Input Bereich</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        position:'absolute',
        color:'white',
        backgroundColor:'#410008',
    },
    screenContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 120,
        paddingBottom: 70,
        backgroundColor:'#410008',
    },
    chatContainer: {
        flex: 1,
        backgroundColor:'white',
    },
    messageArea: {
        paddingHorizontal:10,
        paddingVertical:50,
        flexGrow:1,  
    },
    messageContainer: {
        alignSelf:'center',
        backgroundColor:'#FFB8BC',
        paddingHorizontal:10,
        paddingVertical:5,
        width:'90%',
    },
})