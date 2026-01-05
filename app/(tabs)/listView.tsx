import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import BackButton from '../components/BackButton';


const DATA = [
  {
    id: "1",
    title: "Strickclub Bergedorf E.V.",
    place: "Landstraße 100",
    time: "Jeden Donnerstag - 18:00",
    avatar: "data:image/jpeg;base64,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",
  },
  { id: "2", title: "Generic Title", place: "—", time: "Weiter Infos", avatar: "" },
  { id: "3", title: "Generic Title", place: "—", time: "Weiter Infos", avatar: "" },
];


const toggleFavorite = (id: string) => {
  setFavorites((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
};

function GuildCard({ item,
  isFavorite,
  onToggle, onPress }: {
  item: any;
  isFavorite: boolean;
  onToggle: () => void;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.9 },
      ]}
    >
    <View style={styles.card}>
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
            e.stopPropagation(); // 🔑 DAS ist wichtig
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
    </View>
    </Pressable>
  );
}
export default function listView() {
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
      <View style={styles.topRow} >
        <BackButton />
        <Ionicons name="settings-outline" size={40} color="#fff" />
        </View>

        <View style={styles.titlePill}>
        <Text style={styles.title}>Neue Gilden entdecken</Text>
        </View>

        <View style={{ height: 25 }}/>
        <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={25} />
          <TextInput placeholder="Namen Suchen..." style={styles.input} />
        </View>
        </View>
        
        <View style={{ height: 32 }}/>
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
          pathname: "/(tabs)/details",
          params: { id: item.id },
        })
      }
      />
    )}
      />
        </View>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77363E',
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
  circleIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  titlePill: {
  backgroundColor: "#fff",
  borderRadius: 12,     
  paddingVertical: 10,
  paddingHorizontal: 20,
  alignSelf: "center",
  borderWidth: 2,
  borderColor: "#000",
  marginBottom: 14,
},
    title: { 
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "700",
    fontFamily:"Inter-Bold",
    color:"#000000ff",
    marginBottom: 5,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 30,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 14
  },
  input: {
    marginLeft: 6,
    flex: 1,
    fontSize: 20,
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
});

function setFavorites(arg0: (prev: any) => Set<unknown>) {
  throw new Error('Function not implemented.');
}

