import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function ChatLayout() {
  return (
    <View>
    <Text>Chat Layout</Text>
    <View style={styles.chatContainer}>
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
        paddingHorizontal
        backgroundColor: 'white',
        borderRadius:10,
    },
})