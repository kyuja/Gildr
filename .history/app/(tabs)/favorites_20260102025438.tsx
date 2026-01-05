import React from "react";
import { FlatList, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackAndSettingHeader } from "../components/BackAndSettingsHeader";
import { router } from "expo-router";

type Category = {
  id: string;
  name: string;
};

const categories: Category[] = [
  { id: "1", name: "Kochen" },
  { id: "2", name: "Stricken" }
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
    
            <FlatList
                    data={categories}
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    contentContainerStyle={{ marginTop: 30 }}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.card}
                        onPress={() => router.push("/(stacks)/details")}
                      >
                        <View style={styles.cardInner} />
                        <Text style={styles.cardText}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />
            
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
    },
    card: {
    width: "30%",
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 20,
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  cardInner: {
    flex: 1,
  },
  cardText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
})