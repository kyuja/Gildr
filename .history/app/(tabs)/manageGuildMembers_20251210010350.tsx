import { Ionicons } from "@expo/vector-icons"
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from "react-native"


export default function manageGuildMembers() {
    return (
    <KeyboardAvoidingView style={{flex :1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={-60} 
            >
            <View style={styles.screenContainer}>


        <Pressable style={styles.header}>
            <View style={{width: 24}}/>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Beispiel Gildenname</Text>
            <Ionicons name="pencil" color={'black'} size={24}> </Ionicons>
        </Pressable>
        
    </View>
            </KeyboardAvoidingView>
)}

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
})