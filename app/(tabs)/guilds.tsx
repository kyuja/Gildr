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
import { BackAndSettingHeader } from "../components/BackAndSettingsHeader";

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
    avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...",
  },
  {
    id: "2",
    title: "Generic Title",
    place: "—",
    time: "Weiter Infos",
    avatar: "",
  },
  {
    id: "3",
    title: "Generic Title",
    place: "—",
    time: "Weiter Infos",
    avatar: "",
  },
];

function GuildCard({
  item,
  onPress,
  onEdit,
}: {
  item: Guild;
  onPress: () => void;
  onEdit: () => void;
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
            onEdit();
          }}
          style={({ pressed }) => [
            styles.editBtn,
            pressed && { opacity: 0.7 },
       ]}
          hitSlop={8} 
        >
          <Ionicons name="create-outline" size={26} color="#333" />
        </Pressable>
      </View>

      <Text style={styles.cardInfo}>Ort: {item.place}</Text>
      <Text style={styles.cardInfo}>Zeitpunkt: {item.time}</Text>
    </Pressable>
  );
}

export default function MeineGilden() {
  return (
    <View style={styles.container}>
           <BackAndSettingHeader useBack={true} useFallbackHref={"../home"} settingsHref={"/settings"}/>

      <Text style={styles.headerTitle}>Meine Gilden</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <GuildCard
            item={item}
            onPress={() =>
              router.push({
                pathname: "/chat",
                params: { id: item.id },
              })
            }
            onEdit={() =>
              router.push({
                pathname: "/gilde-bearbeiten",
                params: { id: item.id },
              })
            }
          />
        )}
      />

      <Pressable
        onPress={() => router.push("/gilde-erstellen")}
        style={({ pressed }) => [styles.fab, pressed && { opacity: 0.9 }]}
      >
        <Ionicons name="person-add-outline" size={28} color="#111" />
        <Text style={styles.fabText}>Gilde{"\n"}erstellen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77363E",

    paddingHorizontal: 16,
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
    bottom: 60,
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
  editBtn: {
  padding: 20,        
  borderRadius: 900,
  backgroundColor: "rgba(231, 168, 168, 0.73)",
},
});
