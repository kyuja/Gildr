import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Hilfe() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Hilfe & Anleitung</Text>

        {/* STARTSEITE BUTTON */}
        <Pressable
          onPress={() => router.push("/hilfe-startseite")}
          style={({ pressed }) => [
            styles.helpCard,
            pressed && { opacity: 0.9 },
          ]}
        >
          <Text style={styles.cardTitle}>Startseite</Text>

          <Image
            source={require("../assets/images/home_help_example.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.row}>
            <Text style={styles.cardText}>
              Erklärung zur Suchleiste, Kategorien und Einstellungen
            </Text>

            <Ionicons name="chevron-forward" size={22} color="#111" />
          </View>
        </Pressable>

        <Pressable
          onPress={() => router.push("/hilfe-gilde-beitreten")}
          style={({ pressed }) => [
            styles.helpCard,
            pressed && { opacity: 0.9 },
          ]}
        >
          <Text style={styles.cardTitle}>Gilde beitreten</Text>

          <Image
            source={require("../assets/images/gilde_beitreten_help.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.row}>
            <Text style={styles.cardText}>
              Erklärung zur Beschreibung und Beitretverfahren
            </Text>

            <Ionicons name="chevron-forward" size={22} color="#111" />
          </View>
        </Pressable>

        <Pressable
          onPress={() => router.push("/hilfe-gilde-erstellen")}
          style={({ pressed }) => [
            styles.helpCard,
            pressed && { opacity: 0.9 },
          ]}
        >
          <Text style={styles.cardTitle}>Gilde erstellen</Text>

          <Image
            source={require("../assets/images/gilde_erstellen_help.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.row}>
            <Text style={styles.cardText}>
              Erklärung zur Erstellung einer Gilde
            </Text>

            <Ionicons name="chevron-forward" size={22} color="#111" />
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77363E",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  content: {
    paddingBottom: 40,
    gap: 20,
  },

  title: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    borderRadius: 12,
    paddingVertical: 12,
  },

  helpCard: {
    backgroundColor: "#F6DDE0",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    borderWidth: 1,
    borderColor: "#111",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111",
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },
});
