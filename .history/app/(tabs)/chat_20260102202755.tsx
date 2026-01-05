import { Ionicons } from "@expo/vector-icons";
import {Audio} from "expo-av"
import { Link } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ChatAnimation } from "../../chatAnimation";
import { BackAndSettingHeader } from "../components/BackAndSettingsHeader";


const messages = [
        { id: 1, text: "Das freut mich!", isUser: false},
        { id: 2, text: "Wann haben wir eigentlich das nächste Treffen geplant?", isUser: false},
        { id: 3, text: "Am nächsten Montag um 18 Uhr.", isUser: false }
];

export default function ChatLayout() {

    const [inputText, setInputText] = React.useState("");
    const [initmessages, setMessages] = React.useState<
        {id: number; text: string; isUser: boolean}[]>([]);
    
    const scrollViewRef = React.useRef<ScrollView | null>(null);
    const hasStartedRef = React.useRef(false);

    const startInitialSequence = () => {
        messages.forEach((msg,index) => {
            setTimeout( () => {
                setMessages( (prevMessages ) => [...prevMessages, msg] );
                scrollViewRef.current?.scrollToEnd({animated: true});
            }, (index + 1) * 1700);
        })
    };

    async function playSend() {
        
    }

    const handleSend = () => {
        if(inputText.trim() === "") return;

        const newMessage = {
            id: Date.now(),
            text: inputText,
            isUser: true,
        }
        setMessages((prevMessages) => [...prevMessages,newMessage]);
        setInputText("");
        setTimeout( () => {
            scrollViewRef.current?.scrollToEnd({animated: true});
        }, 10);

        if(!hasStartedRef.current) {
            hasStartedRef.current = true;
            startInitialSequence();
    }
    };

    return (
        <KeyboardAvoidingView style={{flex :1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-60} 
        >
        <View style={styles.screenContainer}>

        <BackAndSettingHeader useBack={false} backHref={"../chat"} useFallbackHref={"../home"} settingsHref={"/home"}/>

        <Link href='../manageGuildMembers' asChild>    
        <TouchableOpacity style={styles.header}>
            <View style={{width: 24}}/>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Beispiel Gildenname</Text>
            <Ionicons name="pencil" color={'black'} size={24}> </Ionicons>
        </TouchableOpacity>
        </Link>

        <View style={styles.chatContainer}>
        <ScrollView contentContainerStyle={styles.messageArea} ref={scrollViewRef}>
            {initmessages.map((message) => (
                <ChatAnimation key={message.id} text={message.text} style={message.isUser ? styles.userMessage : styles.otherMessage} />
            ))}
        </ScrollView>
        </View>

        <View style={styles.inputContainer}>
            <TextInput style={styles.inputBar} 
            placeholder="Nachricht eingeben..." 
            value={inputText} 
            onChangeText={setInputText} 
            onFocus={() => scrollViewRef.current?.scrollToEnd({animated: false})}
            />
            {inputText.length > 0 && (
                <TouchableOpacity style={styles.sendButton} onPress={handleSend} >
                    <Ionicons name="send" color={'white'} size={24}> </Ionicons>
                </TouchableOpacity>
            )}
        </View>

        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FFECED',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:15,
        marginTop:10,
        marginBottom:10,
    },
    screenContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 70,
        backgroundColor:'#77363E',
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
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#FFB8BC',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 5,
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#62C8C2',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    inputBar: {
        color: 'black',
        marginTop: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
    },
    input: {
        color: 'black',
        marginTop: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    sendButton: {
        paddingHorizontal:5,
        paddingTop:12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButton: {
        paddingHorizontal:5,
        paddingTop:12,
        justifyContent: 'center',
        alignItems: 'center',
    }
})