import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import BackButton from "./components/BackButton""

export default function GildeErstellen() {
  // ------------- Form States -------------
  const [name, setName] = useState("");
  const [kategorie, setKategorie] = useState("");
  const [beschreibung, setBeschreibung] = useState("");
  const [ort, setOrt] = useState("");
  const [wann, setWann] = useState("");

  // ------------- Upload States (nur lokal) -------------
  const [logo, setLogo] = useState(null); // { uri, ... }
  const [bilder, setBilder] = useState([]); // Array von Assets

  const resetForm = () => {
    setName("");
    setKategorie("");
    setBeschreibung("");
    setOrt("");
    setWann("");
    setLogo(null);
    setBilder([]);
  };

  const pickLogo = async () => {
    // Berechtigung (iOS/Android)
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Berechtigung fehlt", "Bitte erlaube Zugriff auf deine Fotos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Logo ggf. zuschneiden
      aspect: [1, 1],
      quality: 0.9,
    });

    if (!result.canceled) {
      setLogo(result.assets?.[0] ?? null);
    }
  };

  const pickBilder = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Berechtigung fehlt", "Bitte erlaube Zugriff auf deine Fotos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // mehrere Bilder
      quality: 0.9,
      selectionLimit: 10, // optional
    });

    if (!result.canceled) {
      const assets = result.assets ?? [];
      setBilder(assets);
    }
  };

  const onCancel = () => {
    resetForm();
  };

  const onConfirm = () => {
    // hier würdest du später validieren / an Backend schicken
    // jetzt: nur "Frontend" + reset
    resetForm();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Ionicons name="settings-outline" size={40} color="#fff" />
      </View>

      <Text style={styles.headerTitle}>Gilde erstellen</Text>

      <View style={styles.card}>
        <ScrollView
          contentContainerStyle={styles.form}
          showsVerticalScrollIndicator={false}
        >
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#777"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Kategorie"
            placeholderTextColor="#777"
            value={kategorie}
            onChangeText={setKategorie}
          />
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Beschreibung"
            placeholderTextColor="#777"
            multiline
            value={beschreibung}
            onChangeText={setBeschreibung}
          />
          <TextInput
            style={styles.input}
            placeholder="Ort"
            placeholderTextColor="#777"
            value={ort}
            onChangeText={setOrt}
          />
          <TextInput
            style={styles.input}
            placeholder="Wann"
            placeholderTextColor="#777"
            value={wann}
            onChangeText={setWann}
          />

          {/* -------- Logo Upload -------- */}
          <View style={styles.uploadRow}>
            <Text style={styles.uploadLabel}>Logo</Text>

            <Pressable
              onPress={pickLogo}
              style={({ pressed, hovered }) => [
                styles.uploadBox,
                (hovered || pressed) && styles.uploadBoxHover,
              ]}
            >
              <Text style={styles.uploadIcon}>↑ +</Text>
            </Pressable>
          </View>

          {!!logo?.uri && (
            <View style={styles.previewRow}>
              <Image source={{ uri: logo.uri }} style={styles.logoPreview} />
              <Pressable
                onPress={() => setLogo(null)}
                style={({ pressed, hovered }) => [
                  styles.smallBtn,
                  (hovered || pressed) && styles.smallBtnHover,
                ]}
              >
                <Text style={styles.smallBtnText}>Entfernen</Text>
              </Pressable>
            </View>
          )}

          {/* -------- Bilder Upload -------- */}
          <View style={styles.uploadRow}>
            <Text style={styles.uploadLabel}>Bilder</Text>
            <Pressable
              onPress={pickBilder}
              style={({ pressed, hovered }) => [
                styles.uploadBox,
                (hovered || pressed) && styles.uploadBoxHover,
              ]}
            >
              <Text style={styles.uploadIcon}>↑ +</Text>
            </Pressable>
          </View>

          {bilder.length > 0 && (
            <View style={styles.gallery}>
              {bilder.map((img, idx) => (
                <Image key={img.uri ?? idx} source={{ uri: img.uri }} style={styles.thumb} />
              ))}
              <Pressable
                onPress={() => setBilder([])}
                style={({ pressed, hovered }) => [
                  styles.smallBtn,
                  (hovered || pressed) && styles.smallBtnHover,
                ]}
              >
                <Text style={styles.smallBtnText}>Alle entfernen</Text>
              </Pressable>
            </View>
          )}

          {/* -------- Actions (Hover + Pressed Farbwechsel) -------- */}
          <View style={styles.actions}>
            <Pressable
              onPress={onCancel}
              style={({ pressed, hovered }) => [
                styles.btn,
                styles.btnCancel,
                (hovered || pressed) && styles.btnHover,
              ]}
            >
              <Text style={styles.btnCancelText}>Abbrechen</Text>
            </Pressable>

            <Pressable
              onPress={onConfirm}
              style={({ pressed, hovered }) => [
                styles.btn,
                styles.btnOk,
                (hovered || pressed) && styles.btnHover,
              ]}
            >
              <Text style={styles.btnOkText}>Bestätigen</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77363E",
    paddingTop: 60,
    paddingHorizontal: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
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
  },

  card: { flex: 1, backgroundColor: "#fff", borderRadius: 28, padding: 18 },
  form: { gap: 10, paddingBottom: 20 },

  input: {
    backgroundColor: "#dedede",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
  },
  textarea: { minHeight: 110, textAlignVertical: "top" },

  uploadRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 4,
  },
  uploadLabel: { fontSize: 16, fontWeight: "700", color: "#444" },
  uploadBox: {
    flex: 1,
    backgroundColor: "#dedede",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadBoxHover: {
    backgroundColor: "#cfcfcf", // kurzer Farbwechsel bei Hover/Press
  },
  uploadIcon: { fontSize: 22, fontWeight: "700", color: "#444" },

  actions: { flexDirection: "row", gap: 12, marginTop: 14 },
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
  btnCancel: {},
  btnOk: {},
  btnHover: {
    backgroundColor: "#ffd6d6", // Hover/Pressed Farbe
    transform: [{ scale: 0.99 }],
  },
  btnCancelText: { color: "#b00020", fontSize: 15, fontWeight: "700" },
  btnOkText: { color: "#b00020", fontSize: 15, fontWeight: "700" },

  previewRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 6,
  },
  logoPreview: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#eee",
  },

  gallery: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: "#eee",
  },

  smallBtn: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#b00020",
    backgroundColor: "#ffecec",
  },
  smallBtnHover: {
    backgroundColor: "#ffd6d6",
  },
  smallBtnText: {
    color: "#b00020",
    fontWeight: "700",
    fontSize: 13,
  },
});

