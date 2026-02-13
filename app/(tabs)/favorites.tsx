import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackAndSettingHeader } from "../components/BackAndSettingsHeader";

type Category = {
  id: string;
  name: string;
  location: string;
  time: string;
  heart: boolean;
};

const categories: Category[] = [
  {
    id: "1",
    name: "Strickclub Bergedorf E.V.",
    location: "Ort: Bergedorfer Weg 17A",
    time: "Zeitpunkt: Jeden Donnerstag - 18:00 Uhr",
    heart: true,
  },
  {
    id: "2",
    name: "Runder Tisch der Kochkrieger",
    location: "Ort: Landstraße 100",
    time: "Zeitpunkt: Jeden Mittwoch - 15:30 Uhr",
    heart: true,
  },
  {
    id: "3",
    name: "Bastelclub für die Schönen",
    location: "Ort: Lohbrügger Landstraße 108B",
    time: "Zeitpunkt: Jeden zweiten Montag - 20:00 Uhr",
    heart: true,
  },
  {
    id: "4",
    name: "Romanen Leseclub",
    location: "Ort: Korachstraße 10b",
    time: "Zeitpunkt: Alle drei Wochen am Freitag - 17:30 Uhr",
    heart: true,
  },
];

const userImages: Record<string, any> = {
  "1": require("../../assets/images/avatars/Blog Don Trapillo(10)_1.png"),
  "2": require("../../assets/images/avatars/5bd46de8ba20392d081c8472b298c42d.jpg"),
  "3": require("../../assets/images/avatars/30951.png"),
  "4": require("../../assets/images/avatars/Beitragsbild_book_club.jpg"),
};

export default function HomeScreen() {
  const [data, setData] = React.useState(categories);

  const toggleHeart = async (id: string) => {
    setData((prev) =>
      prev.map((x) => (x.id === id ? { ...x, heart: !x.heart } : x)),
    );
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-60}
    >
      <View style={styles.container}>
        <BackAndSettingHeader
          useBack={true}
          useFallbackHref={"../home"}
          settingsHref={"/settings"}
        />

        <View style={styles.content}>
          <Text style={styles.title}>Favoriten</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push("/details")}
            >
              <View style={styles.cardTop}>
                <Image
                  source={
                    userImages[item.id] ??
                    require("../../assets/images/avatars/default_gilde.png")
                  }
                  style={styles.avatar}
                />

                <Text style={styles.cardTitle} numberOfLines={1}>
                  {item.name}
                </Text>

                <TouchableOpacity
                  onPress={() => toggleHeart(item.id)}
                  hitSlop={10}
                >
                  <Ionicons
                    name={item.heart ? "heart" : "heart-outline"}
                    size={30}
                    color={item.heart ? "#E53935" : "#333"}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.cardInfo}>{item.location}</Text>
              <Text style={styles.cardInfo}>{item.time}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 5,
    backgroundColor: "#77363E",
  },
  content: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  listContent: {
    paddingBottom: 140,
    gap: 20,
  },
  card: {
    backgroundColor: "#F6DDE0",
    borderRadius: 12,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    borderColor: "#000",
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#ddd",
  },
  avatarPlaceholder: {
    backgroundColor: "#3d1b1bff",
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  cardInfo: {
    fontSize: 13,
    color: "#111",
    marginTop: 2,
    fontWeight: "600",
  },
});
