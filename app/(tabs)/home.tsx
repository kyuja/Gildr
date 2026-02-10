import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Category = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

const categories: Category[] = [
  {
    id: "1",
    name: "Kochen",
    image: require("../../assets/images/cooking.png"),
  },
  {
    id: "2",
    name: "Stricken",
    image: require("../../assets/images/knitting.png"),
  },
  { id: "3", name: "Lesen", image: require("../../assets/images/reading.png") },
  { id: "4", name: "Sport", image: require("../../assets/images/sport.png") },
  {
    id: "5",
    name: "Basteln",
    image: require("../../assets/images/crafting.png"),
  },
  {
    id: "6",
    name: "Malen",
    image: require("../../assets/images/painting.png"),
  },
  {
    id: "7",
    name: "Technik-Hilfe",
    image: require("../../assets/images/tech.png"),
  },
  {
    id: "8",
    name: "Häkeln",
    image: require("../../assets/images/knitting2.png"),
  },
  { id: "9", name: "DnD/PnP", image: require("../../assets/images/dnd.png") },
  {
    id: "10",
    name: "Töpfern",
    image: require("../../assets/images/pottery.png"),
  },
  {
    id: "11",
    name: "Handwerken",
    image: require("../../assets/images/handicrafts.png"),
  },
  {
    id: "12",
    name: "Fotografie",
    image: require("../../assets/images/photography.png"),
  },
  {
    id: "13",
    name: "Spaziergänge",
    image: require("../../assets/images/walking.png"),
  },
  {
    id: "14",
    name: "Scrapbooking",
    image: require("../../assets/images/scrapbooking.png"),
  },
  {
    id: "15",
    name: "Makeup",
    image: require("../../assets/images/makeup.png"),
  },
  {
    id: "16",
    name: "Schauspielerei",
    image: require("../../assets/images/theater.png"),
  },
  { id: "17", name: "Schach", image: require("../../assets/images/chess.png") },
  {
    id: "18",
    name: "Weitere...",
    image: require("../../assets/images/other.png"),
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* 🔍 Suche + ⚙️ Einstellungen */}
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={25} color="#111" />
          <TextInput placeholder="Kategorie suchen..." style={styles.input} />
        </View>

        {/* ⚙️ Zahnrad → /settings */}
        <TouchableOpacity
          onPress={() => router.push("/settings")}
          activeOpacity={0.7}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="settings-outline" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Neue Gilden entdecken</Text>
      </View>

      {/* 📦 Kategorien */}
      <FlatList
        data={categories}
        numColumns={3}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/listView")}
            activeOpacity={0.85}
          >
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.divider} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77363E",
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },

  searchBar: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 50,
  },

  input: {
    marginLeft: 6,
    flex: 1,
    fontSize: 16,
  },

  content: {
    marginBottom: 18,
  },

  title: {
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    borderRadius: 10,
    height: 40,
    fontWeight: "bold",
  },

  listContent: {
    paddingBottom: 30,
  },

  columnWrapper: {
    justifyContent: "space-between",
  },

  card: {
    width: "30%",
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: "#410008",
    borderWidth: 2,
    marginBottom: 10,
    justifyContent: "flex-end",
    paddingBottom: 8,

    // ✅ RN-kompatibler Schatten (kein boxShadow-String)
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  cardImage: {
    width: "100%",
    height: "70%",
    resizeMode: "contain",
  },

  cardText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  divider: {
    height: 2,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    marginVertical: 4,
  },
});
