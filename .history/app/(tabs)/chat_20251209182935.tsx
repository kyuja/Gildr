import React from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


export default function ChatLayout() {
    const [inputText, setInputText] = React.useState("");

    const messages = [
        { id: 1, text: "Das freut mich!" },
        { id: 2, text: "Wann haben wir eigentlich das nächste Treffen geplant?" },
        { id: 3, text: "Am nächsten Montag um 18 Uhr" }
    ];

    return (
        <KeyboardAvoidingView style={{flex :1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-50}
        >
        <View style={styles.screenContainer}>
        <Pressable style={styles.header}>Beispiel Gildenname</Pressable>
        <View style={styles.chatContainer}>
        <ScrollView contentContainerStyle={styles.messageArea}>
            {messages.map((message) => (
                <View key={message.id} style={styles.messageContainer}>
                    <Text>{message.text}</Text>
                </View>
            ))}
            <Text style={styles.input}>{inputText}</Text>
        </ScrollView>
        </View>
        <View>
            <TextInput style={styles.inputBar} placeholder="Input Bereich" value={inputText} onChangeText={setInputText} />
        </View>
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    header:{
        color:'black',
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        fontSize:24,
        paddingVertical:5,
        textAlign:'center',
        marginTop:5,
        marginBottom:5,
    },
    screenContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 100,
        paddingBottom: 70,
        backgroundColor:'#410008',
    },
    chatContainer: {
        flex: 1,
        backgroundColor:'white',
        borderRadius:10,
    },
    messageArea: {
        paddingHorizontal:1,
        paddingVertical:50,
        flexGrow:1,  
    },
    messageContainer: {
        alignSelf:'center',
        backgroundColor:'#FFB8BC',
        paddingHorizontal:5,
        paddingVertical:5,
        width:'90%',
        borderRadius:10,
        marginBottom:10,
    },
    inputBar: {
        color: 'black',
        marginTop: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    input: {
        color: 'black',
        marginTop: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 10,
    }
})