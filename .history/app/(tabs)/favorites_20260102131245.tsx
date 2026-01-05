import React from "react";
import { FlatList, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackAndSettingHeader } from "../components/BackAndSettingsHeader";
import { Ionicons } from "@expo/vector-icons";

type Category = {
  id: string;
  name: string;
  subheading: string;
  heart: boolean;
};

const categories: Category[] = [
  { id: "1", name: "Generic Title", subheading:"Weitere Infos", heart:true},
  { id: "2", name: "Generic Title", subheading:"Weitere Infos", heart:true},
  { id: "3", name: "Generic Title", subheading:"Weitere Infos", heart:true },
  { id: "4", name: "Generic Title", subheading:"Weitere Infos", heart:true }
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
                    keyExtractor={(item) => item.id}
                    
                    contentContainerStyle={{ marginTop: 30 }}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.card}
                        //onPress={() => router.push("/(stacks)/details")}
                      >
                        <View style={styles.cardInner}>
                          <Ionicons name="circle"/>
                          <Text style={styles.cardTextTitle}>{item.name}</Text>

                        </View>
                      </TouchableOpacity>
                    )}
                  />
        </View>
        </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FFF',
        borderRadius: 10,
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
        paddingBottom: 70,
        backgroundColor:'#77363E',
    },
    headerActions: {
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    card: {
    width: "100%",
    height: 120,
    backgroundColor: "#FFECED",
    borderRadius: 12,
    marginBottom: 20,
    paddingBottom: 8,
  },
  cardInner: {
    flex: 1,
    justifyContent:"flex-start",
    alignItems:"flex-start"
  },
  cardTextTitle: {
    textAlign: "left",
    textAlignVertical:"top",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardTextSubheader: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardTextInfos: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
})