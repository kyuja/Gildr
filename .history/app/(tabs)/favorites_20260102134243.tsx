import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from "react";
import { FlatList, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackAndSettingHeader } from "../components/BackAndSettingsHeader";

type Category = {
  id: string;
  name: string;
  location: string;
  time:string;
  heart: boolean;
};

const categories: Category[] = [
  { id: "1", name: "Generic Title", location:"Ort: Bergedorfer Weg 17A",time:"Zeitpukt: Jeden Donnerstag - 18:00 Uhr" , heart:true},
  { id: "2", name: "Generic Title", location:"Ort: Landstraße 100", time:"Zeitpukt: Jeden Mittwoch - 15:30 Uhr" , heart:true},
  { id: "3", name: "Generic Title", location:"Ort: Lohbrügger Landstraße 108B",time:"Zeitpukt: Jeden zweiten Montag - 20:00 Uhr" , heart:true },
  { id: "4", name: "Generic Title", location:"Ort: Korachstraße 10b", time:"Zeitpukt: Alle drei Wochen am Freitag - 17:30 Uhr" , heart:true }
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
                        <View style={styles.cardHeader}>
                          <FontAwesome5 name="user-circle" size={35} />
                          <Text style={styles.cardTextTitle} numberOfLines={1}>{item.name}</Text>
                        </View>
                        <View style={styles.cardInfos}>
                          <Text style={styles.cardTextSubheader}>{item.location}</Text>
                          <Text style={styles.cardTextSubheader}>{item.time}</Text>
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
    minHeight: 120,
    backgroundColor: "#FFECED",
    borderRadius: 12,
    marginBottom: 20,
    paddingBottom: 8,
    overflow:"scroll",
  },
  cardHeader: {
    alignItems:"center",
    flexDirection:'row',
    gap:10,
  },
  cardInfos:{
    marginTop:8,
    alignItems:"flex-start",
    justifyContent:"flex-start",
    gap:2,
  },
  cardTextTitle: {
    fontSize: 22,
    fontWeight: "bold",
    flexShrink:1,
  },
  cardTextSubheader: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardTextInfos: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
  },
})