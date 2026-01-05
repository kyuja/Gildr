import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BackButton from "../components/BackButton";

type Guild = {
  id: string;
  title: string;
  place: string;
  time: string;
  avatar?: string;
};

const DATA: Guild[] = [
  {
    id: "1",
    title: "Strickclub Bergedorf E.V.",
    place: "Landstraße 100",
    time: "Jeden Donnerstag - 18:00",
    avatar:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...", // optional: hier dein base64 wie im listView
  },
  { id: "2", title: "Generic Title", place: "—", time: "Weiter Infos", avatar: "" },
  { id: "3", title: "Generic Title", place: "—", time: "Weiter Infos", avatar: "" },
];

function GuildCard({
  item,
  isFavorite,
  onToggle,
  onPress,
}: {
  item: Guild;
  isFavorite: boolean;
  onToggle: () => void;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.9 }]}
    >
      <View style={styles.cardTop}>
        {item.avatar ? (
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.avatarPlaceholder]} />
        )}

        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.title}
        </Text>

        <Pressable
          onPress={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          hitSlop={10}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={26}
            color={isFavorite ? "#C0001A" : "#333"}
          />
        </Pressable>
      </View>

      <Text style={styles.cardInfo}>Ort: {item.place}</Text>
      <Text style={styles.cardInfo}>Zeitpunkt: {item.time}</Text>
    </Pressable>
  );
}

export default function MeineGilden() {
  const [favorites, setFavorites] = React.useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <View style={styles.container}>
      {/* Header ist egal – kannst du lassen/ändern */}
      <View style={styles.topRow}>
        <BackButton />
        <Ionicons name="settings-outline" size={40} color="#fff" />
      </View>

      <Text style={styles.headerTitle}>Meine Gilden</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        extraData={favorites}
        renderItem={({ item }) => (
          <GuildCard
            item={item}
            isFavorite={favorites.has(item.id)}
            onToggle={() => toggleFavorite(item.id)}
            onPress={() =>
              router.push({
                pathname: "/chat",
                params: { id: item.id },
              })
            }
          />
        )}
      />
      {/* Floating Action Button – Gilde erstellen */}
      <Pressable
        onPress={() => router.push("/(tabs)/gilde-erstellen")}
        style={({ pressed }) => [
        styles.fab,
        pressed && { opacity: 0.9 },
      ]}
    >
      <Ionicons name="person-add-outline" size={28} color="#111" />
      <Text style={styles.fabText}>Gilde{"\n"}erstellen</Text>
    </Pressable>

    </View>
  );
  
}

/**
 * ✅ Styles sind 1:1 aus deinem listView übernommen:
 * - card
 * - cardTop
 * - avatar / avatarPlaceholder
 * - cardTitle
 * - cardInfo
 * - listContent
 * - container/topRow/headerTitle nur basic drumherum
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77363E",
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  topRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  headerTitle: {
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    borderRadius: 10,
    height: 50,
    fontWeight: "bold",
    marginBottom: 20,
    marginHorizontal: 16,
  },

  // ---- 1:1 listView ----
  listContent: {
    paddingBottom: 120,
    gap: 14,
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
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  cardInfo: {
    fontSize: 13,
    color: "#111",
    marginTop: 2,
    fontWeight: "600",
  },

  fab: {
  position: "absolute",
  right: 18,
  bottom: 110, // über der Tabbar
  width: 112,
  height: 112,
  borderRadius: 999,
  backgroundColor: "#F6DDE0",
  borderWidth: 2,
  borderColor: "#111",
  justifyContent: "center",
  alignItems: "center",
  shadowColor: "#000",
  shadowOpacity: 0.3,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 5 },
  elevation: 6,
  gap: 6,
},

fabText: {
  textAlign: "center",
  fontSize: 14,
  fontWeight: "700",
  color: "#111",
  lineHeight: 16,
},




});
