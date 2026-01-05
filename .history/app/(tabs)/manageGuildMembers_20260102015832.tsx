import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const members = [
    { id: 1, name: "Mitglied 1"},
    { id: 2, name: "Mitglied 2"},
    { id: 3, name: "Mitglied 3"},
    { id: 4, name: "Mitglied 4"},
    { id: 5, name: "Mitglied 5"},
    { id: 6, name: "Mitglied 6"},
]

export default function manageGuildMembers() {

    const [memberList, setMemberList] = React.useState(members)
    const [memberDeleteFlag, setMemberDeleteFlag] = React.useState<number[]>([]);

    const toggleMemberDelete = (id: number) => {
        if (memberDeleteFlag.includes(id)) {
            setMemberDeleteFlag(memberDeleteFlag.filter(mid => mid !== id))
        } else {
            setMemberDeleteFlag([...memberDeleteFlag, id])
        }
    }

    const deleteMember = () => {
        setMemberList(memberList.filter(member => !memberDeleteFlag.includes(member.id)))
        setMemberDeleteFlag([]);
    }

    const isMarkedForDeletion = (id: number) => {
        return memberDeleteFlag.includes(id);
    }

    return (
    <KeyboardAvoidingView style={{flex :1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={-60} 
            >
        <View style={styles.screenContainer}>

            <View style={styles.headerActions}>
                <Link href='../chat' asChild>
                    <TouchableOpacity>
                        <View style={{width: 24}}/>
                        <Ionicons name="arrow-back" size={40} color="#fff" />
                    </TouchableOpacity>
                </Link>

            <Link href='../home' asChild>    
                    <TouchableOpacity>
                        <View style={{width: 24}}/>
                        <Ionicons name="settings-outline" size={40} color="#fff" />
                    </TouchableOpacity>
            </Link>
            </View>

        <TouchableOpacity style={styles.header}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Beispiel Gildenname</Text>
        </TouchableOpacity>

        <TextInput style={styles.inputBar} 
                    placeholder="Beschreibung eingeben..." 
        />

        <Text style={styles.membersBar}>Mitglieder</Text>

        <View style={{backgroundColor:'white',borderRadius:10,padding:10,marginTop:10, height:300}}>
            
            <ScrollView>
                {memberList.map( (member) => (
                    <View key={member.id} style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: 'bold', color: isMarkedForDeletion(member.id) ? 'gray' : 'black'}}> {member.name}</Text>
                    <TouchableOpacity onPress={() => toggleMemberDelete(member.id)}>
                        <Ionicons name="remove-circle" size={40} style={{right:10,padding:5, color:isMarkedForDeletion(member.id) ? 'maroon' : 'black'}}></Ionicons>
                    </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20 }}>
            <Link href='../chat' asChild>
            <TouchableOpacity style={styles.saveButton}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Abbrechen</Text>
            </TouchableOpacity>
            </Link>

            <TouchableOpacity style={styles.saveButton} onPress= {deleteMember}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Bestätigen</Text>
            </TouchableOpacity>
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
        paddingHorizontal:38,
        marginTop:10,
        marginBottom:10,
    },
    screenContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 100,
        paddingBottom: 70,
        backgroundColor:'#77363E',
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
        marginRight: 265,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    headerActions: {
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:15,
        marginTop:10,
        marginBottom:10,
    }
})