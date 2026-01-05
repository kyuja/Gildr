import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackAndSettingHeader } from "../components/BackAndSettingsHeader";

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView style={{flex :1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={-60} 
                >
            <View style={styles.screenContainer}>
    
                <BackAndSettingHeader useBack={false} backHref={"../chat"} useFallbackHref={"../home"} settingsHref={"/home"}/>
    
            <Pressable style={styles.header}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Beispiel Gildenname</Text>
            </Pressable>
    
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
  );
}