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

      <View style={styles.card}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.h1}>So kannst du eine Gilde erstellen</Text>
          <Text style={styles.p}>
            Unter meine Gilden findest du einen Button "Gilde erstellen". Klicke
            Darauf um weitergeleitet zu werden.
          </Text>

          {/* Screenshot / Bild */}
          <View style={styles.imageWrap}>
            {/* ✅ Wichtig: Passe den Pfad zu deinem Screenshot an (oder ersetze durch ein anderes Bild).
                Wenn du keinen Screenshot als Asset hast: dieses Image einfach löschen. */}
            <Image
              source={require("../assets/images/gilde_erstellen_help_button.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          {/* Erklärungspunkte */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="search" size={20} color="#111" />
              <Text style={styles.sectionTitle}>Formular</Text>
            </View>
            <Text style={styles.p}>
              Unter dem Formular kannst du alle wichtigen Infos ausfüllen und
              unten bestätigen.
            </Text>
            <View style={styles.imageWrap}>
              <Image
                source={require("../assets/images/gilde_erstellen_help_form.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="search" size={20} color="#111" />
              <Text style={styles.sectionTitle}>Infos</Text>
            </View>
            <Text style={styles.p}>Hier füllst du erstmal alle Infos aus.</Text>
            <View style={styles.imageWrap}>
              <Image
                source={require("../assets/images/gilde_erstellen_help_basic info.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="search" size={20} color="#111" />
              <Text style={styles.sectionTitle}>Upload</Text>
            </View>
            <Text style={styles.p}>
              Logo und Bilder lädtst du über die Uploadfunktion hoch. Dafür
              einfach drauf klicken.
            </Text>
            <View style={styles.imageWrap}>
              <Image
                source={require("../assets/images/gilde_erstellen_help_form_upload.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="search" size={20} color="#111" />
              <Text style={styles.sectionTitle}>Bestätigung</Text>
            </View>
            <Text style={styles.p}>
              Wenn du alles ausgefüllt hast, kannst du die Gilde erstellen, in
              dem du den Bestätigen-Button drückst oder Abbrechen-Button, wenn
              du abbrechen möchtest.
            </Text>
            <View style={styles.imageWrap}>
              <Image
                source={require("../assets/images/gilde_erstellen_help_form_bestätigen.png")}
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
