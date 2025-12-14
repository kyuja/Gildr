import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

const members = [
    { id: 1, name: "Mitglied 1"},
    { id: 2, name: "Mitglied 2"},
    { id: 3, name: "Mitglied 3"},
    { id: 4, name: "Mitglied 4"},
    { id: 5, name: "Mitglied 5"},
]

export default function manageGuildMembers() {
    return (
    <KeyboardAvoidingView style={{flex :1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={-60} 
            >
            <View style={styles.screenContainer}>

        <Pressable style={styles.header}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Beispiel Gildenname</Text>
        </Pressable>

        <TextInput style={styles.inputBar} 
                    placeholder="Beschreibung eingeben..." 
        />

        <Text style={styles.membersBar}>Mitglieder</Text>

        <View style={{backgroundColor:'white',borderRadius:10,padding:10,marginTop:10,}}>
            <Text>Mitglied 1</Text>
            <Text>Mitglied 2</Text>
            <Text>Mitglied 3</Text>
            <Text>Mitglied 4</Text>
            <Text>Mitglied 5</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20 }}>
            <Pressable style={styles.saveButton}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Abbrechen</Text>
            </Pressable>
            <Pressable style={styles.saveButton}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Bestätigen</Text>
            </Pressable>
        </View>
        
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
    saveButton:{
        backgroundColor:'#FFECED',
        borderRadius:10,
        paddingVertical:15,
        paddingHorizontal:35,
        marginTop:10,
        marginBottom:10,
        width:"50%"
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
        marginRight: 250,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderRadius: 10,
    },
})