import React from "react";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { BackAndSettingHeader } from "../components/BackAndSettingsHeader";

type Category = {
  id: string;
  name: string;
};

const categories: Category[] = [
  { id: "1", name: "Kochen" },
  { id: "2", name: "Stricken" },
  { id: "3", name: "Lesen" },
  { id: "4", name: "Sport" },
  { id: "5", name: "Basteln" },
  { id: "6", name: "" },
  { id: "7", name: "" },
  { id: "8", name: "" },
  { id: "9", name: "" },
  { id: "10", name: "" },
  { id: "11", name: "" },
  { id: "12", name: "" },
  { id: "13", name: "" },
  { id: "14", name: "" },
  { id: "15", name: "" },
  { id: "15", name: "" },
  { id: "15", name: "" },
  { id: "15", name: "" },
];

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView style={{flex :1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={-60} 
                >
            <View style={styles.screenContainer}>
    
                <BackAndSettingHeader useBack={true} useFallbackHref={"../home"} settingsHref={"/home"}/>
    
            <Pressable style={styles.header}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Favoriten</Text>
            </Pressable>
    

            
        </View>
        </KeyboardAvoidingView>
  );
}


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
        marginBottom:10,
    }
})