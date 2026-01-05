import { router } from "expo-router";
import React from "react";
import { FlatList, Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackAndSettingHeader } from "../components/BackAndSettingsHeader";
import { Ionicons } from "@expo/vector-icons";

type Category = {
  id: string;
  name: string;
  location: string;
  time:string;
  heart: boolean;
};

const categories: Category[] = [
  { id: "1", name: "Strickclub Bergedorf E.V.", location:"Ort: Bergedorfer Weg 17A",time:"Zeitpunkt: Jeden Donnerstag - 18:00 Uhr" , heart:true},
  { id: "2", name: "Runder Tisch der Kochkrieger", location:"Ort: Landstraße 100", time:"Zeitpunkt: Jeden Mittwoch - 15:30 Uhr" , heart:true},
  { id: "3", name: "Bastelclub für die Schönen", location:"Ort: Lohbrügger Landstraße 108B",time:"Zeitpunkt: Jeden zweiten Montag - 20:00 Uhr" , heart:true },
  { id: "4", name: "Romanen Leseclub", location:"Ort: Korachstraße 10b", time:"Zeitpunkt: Alle drei Wochen am Freitag - 17:30 Uhr" , heart:true }
];

const userImages: Record<string, any> = {
  "1": require("../../assets/images/avatars/Blog Don Trapillo(10)_1.png"),
  "2": require("../../assets/images/avatars/5bd46de8ba20392d081c8472b298c42d.jpg"),
  "3": require("../../assets/images/avatars/30951.png"),
  "4": require("../../assets/images/avatars/Beitragsbild_book_club.jpg")
}

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
                        onPress={() => router.push("/(stacks)/details")}
                      >
                        <View style={styles.cardHeader}>
                          <Image source={userImages[item.id] ?? require("../../assets/images/avatars/default_gilde.png")} style={styles.cardAvatar}/>
                          <View style={styles.cardTitleWrap}>
                          <Text style={styles.cardTitle} numberOfLines={1}>{item.name}</Text>
                          </View>

                          <TouchableOpacity onPress={() => toggleHeart(item.id)} hitSlop={10}>
                            <Ionicons name={item.heart ? ""} />
                          </TouchableOpacity>

                        </View>



                        <View style={styles.cardInfos}>
                          <Text style={styles.cardSubheader}>{item.location}</Text>
                          <Text style={styles.cardSubheader}>{item.time}</Text>
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
        paddingBottom: 5,
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
    padding: 12,
    justifyContent:"flex-start",
    overflow:"hidden",
  },
  cardAvatar: {
    width:40,
    height:40,
    borderRadius:18,
    resizeMode:"cover",
  },
  cardHeader: {
    alignItems:"center",
    flexDirection:'row',
  },
  cardInfos:{
    marginTop:8,
    alignItems:"flex-start",
    justifyContent:"flex-start",
    gap:2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flexShrink:1,
  },
  cardTitleWrap: {
    flex:1,
    marginLeft:10,
    marginRight:10,
  },
  cardSubheader: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
  }
})