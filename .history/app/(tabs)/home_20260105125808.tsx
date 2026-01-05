import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
    <View style={styles.container}>
      {/* Search */}
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={25} />
          <TextInput placeholder="Search..." style={styles.input} />
        </View>
        <Ionicons name="settings-outline" size={40} color="#fff" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Entdecke Kategorien</Text>
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        numColumns={3}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ marginTop: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/")}
          >
            <View style={styles.cardInner} />
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
    flex: 1,
    marginBottom: 50,
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

  card: {
    width: "30%",
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 10,
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
});
