import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native"


export default function manageGuildMembers() {
    return (
    <KeyboardAvoidingView style={{flex :1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={-60} 
            >
            <View style={styles.screenContainer}>

        <Pressable style={styles.header}>
            <View style={{width: 24}}/>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Beispiel Gildenname</Text>
        </Pressable>

        <TextInput style={styles.inputBar} 
                    placeholder="Beschreibung eingeben..." 
        />

        <Text style={styles.membersBar}>Mitglieder</Text>
        
    </View>
    </KeyboardAvoidingView>
)}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FFECED',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
        marginTop:10,
        marginBottom:10,
    },
    screenContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 100,
        paddingBottom: 70,
        backgroundColor:'#410008',
    },
    inputBar: {
        color: 'black',
        marginTop: 10,
        padding: 10,
        paddingBottom: 80,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    membersBar: {
        color: 'black',
        marginTop: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 10,
    },
})