import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function ChatLayout() {
  return (
    <View style={styles.chatContainer}>
    <Text>Chat Layout</Text>
    <View >
    <ScrollView style={styles.messageContainer}>
        <Text>Additional Chat Content</Text>
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
    messageContainer: {
        paddingHorizontal:10,
        paddingVertical:5,
        flexGrow:1,
        justifyContent:'center',
        backgroundColor: 'white',
        borderRadius:10,
    },
})