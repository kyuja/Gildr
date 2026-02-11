import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HilfeScreen() {
  return (
    <View style={styles.screen}>
      {/* Header: nur Zurück */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="arrow-back" size={36} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>Hilfe</Text>

      <View style={styles.card}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.h1}>So nutzt du die Startseite</Text>
          <Text style={styles.p}>
            Hier siehst du eine Übersicht über Aktivitäten. Über die Kacheln
            kannst du neue Gilden entdecken und beitreten.
          </Text>

          {/* Screenshot / Bild */}
          <View style={styles.imageWrap}>
            {/* ✅ Wichtig: Passe den Pfad zu deinem Screenshot an (oder ersetze durch ein anderes Bild).
                Wenn du keinen Screenshot als Asset hast: dieses Image einfach löschen. */}
            <Image
              source={require("../assets/images/home_help_example.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          {/* Erklärungspunkte */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="search" size={20} color="#111" />
              <Text style={styles.sectionTitle}>Suchleiste</Text>
            </View>
            <Text style={styles.p}>
              Mit der Suchleiste kannst du Aktivitäten (z. B. Kochen, Stricken,
              Sport) schneller finden. Tippe in das Feld und gib einen Begriff
              ein.
            </Text>
            <View style={styles.imageWrap}>
              <Image
                source={require("../assets/images/home_help_suchleiste.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="grid-outline" size={20} color="#111" />
              <Text style={styles.sectionTitle}>Aktivitäts-Kacheln</Text>
            </View>
            <Text style={styles.p}>
              Jede Kachel steht für eine Aktivität. Wenn du auf eine Kachel
              klickst, kommst du zu den Gilden dieser Aktivität (z. B. Liste der
              passenden Gilden).
            </Text>
            <View style={styles.imageWrap}>
              <Image
                source={require("../assets/images/home_help_kacheln.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <View style={styles.tipBox}>
              <Text style={styles.tipTitle}>Tipp</Text>
              <Text style={styles.tipText}>
                „Weitere…“ ist für zusätzliche Kategorien gedacht, die später
                ergänzt werden können.
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="settings-outline" size={20} color="#111" />
              <Text style={styles.sectionTitle}>Zahnrad (Einstellungen)</Text>
            </View>
            <Text style={styles.p}>
              Über das Zahnrad oben rechts kommst du in die Einstellungen. Dort
              kannst du z. B. Schriftgröße, Sprache oder Dark Mode ändern.
            </Text>
            <View style={styles.imageWrap}>
              <Image
                source={require("../assets/images/home_help_settings.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="albums-outline" size={20} color="#111" />
              <Text style={styles.sectionTitle}>Navigation unten (Tabs)</Text>
            </View>
            <Text style={styles.p}>
              Unten kannst du zwischen Bereichen wechseln, z. B. Hauptmenü,
              Favoriten, Beigetreten und Meine Gilden.
            </Text>
            <View style={styles.imageWrap}>
              <Image
                source={require("../assets/images/home_help_navigation.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Schnellaktionen */}
          <View style={styles.actions}>
            <Pressable
              onPress={() => router.back()}
              style={({ pressed, hovered }) => [
                styles.btn,
                (hovered || pressed) && styles.btnHover,
              ]}
            >
              <Text style={styles.btnText}>Zurück</Text>
            </Pressable>

            <Pressable
              onPress={() => router.push("/settings")}
              style={({ pressed, hovered }) => [
                styles.btn,
                (hovered || pressed) && styles.btnHover,
              ]}
            >
              <Text style={styles.btnText}>Zu den Einstellungen</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#77363E",
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  header: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 12,
    paddingHorizontal: 6,
  },

  headerTitle: {
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    borderRadius: 10,
    height: 50,
    fontWeight: "bold",
    marginBottom: 16,
    marginHorizontal: 6,
  },

  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 18,
  },

  content: {
    gap: 12,
    paddingBottom: 24,
  },

  h1: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111",
    marginBottom: 4,
  },

  p: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    lineHeight: 20,
  },

  imageWrap: {
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f3f3f3",
  },

  image: {
    width: "100%",
    height: 380,
  },

  section: {
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    gap: 8,
  },

  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: "#111",
  },

  tipBox: {
    marginTop: 6,
    backgroundColor: "#F6DDE0",
    borderRadius: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: "#410008",
  },

  tipTitle: {
    fontWeight: "900",
    color: "#111",
    marginBottom: 4,
  },

  tipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111",
    lineHeight: 18,
  },

  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },

  btn: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#b00020",
    backgroundColor: "#ffecec",
  },

  btnHover: {
    backgroundColor: "#ffd6d6",
    transform: [{ scale: 0.99 }],
  },

  btnText: {
    color: "#b00020",
    fontSize: 14,
    fontWeight: "800",
  },

  footerNote: {
    marginTop: 10,
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
    fontWeight: "600",
  },
});
