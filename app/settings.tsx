import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Optional: Persistenz (falls installiert)
// npm i @react-native-async-storage/async-storage
let AsyncStorage: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AsyncStorage = require("@react-native-async-storage/async-storage").default;
} catch (e) {
  AsyncStorage = null;
}

type FontSizeMode = "small" | "medium" | "large";
type Language = "de" | "en";

type Settings = {
  fontSize: FontSizeMode;
  language: Language;
  darkMode: boolean;
  notifications: boolean;
  haptics: boolean;
  wifiUpdates: boolean;
  username: string;
};

const STORAGE_KEY = "gildr_settings_v1";

const DEFAULT_SETTINGS: Settings = {
  fontSize: "medium",
  language: "de",
  darkMode: false,
  notifications: true,
  haptics: true,
  wifiUpdates: true,
  username: "",
};

function fontScale(mode: FontSizeMode) {
  if (mode === "small") return 0.92;
  if (mode === "large") return 1.12;
  return 1.0;
}

export default function SettingsScreen() {
  // gespeicherte Settings (Quelle der Wahrheit)
  const [saved, setSaved] = useState<Settings>(DEFAULT_SETTINGS);

  // Draft, den der User gerade editiert
  const [draft, setDraft] = useState<Settings>(DEFAULT_SETTINGS);

  const scale = useMemo(() => fontScale(draft.fontSize), [draft.fontSize]);

  const theme = useMemo(() => {
    const dark = draft.darkMode;
    return {
      screenBg: dark ? "#2a1418" : "#77363E",
      cardBg: dark ? "#1f1f1f" : "#ffffff",
      rowBg: dark ? "#2a2a2a" : "#f3f3f3",
      text: dark ? "#ffffff" : "#111111",
      muted: dark ? "#cfcfcf" : "#444444",
      border: dark ? "#3a3a3a" : "#dedede",
      accent: "#b00020",
      pillActive: dark ? "#3a3a3a" : "#dedede",
      pillInactive: dark ? "#2a2a2a" : "#f0f0f0",
      dangerBg: dark ? "#332126" : "#ffecec",
      dangerBgHover: dark ? "#3a262c" : "#ffd6d6",
    };
  }, [draft.darkMode]);

  useEffect(() => {
    (async () => {
      if (!AsyncStorage) {
        setSaved(DEFAULT_SETTINGS);
        setDraft(DEFAULT_SETTINGS);
        return;
      }
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (!raw) {
          setSaved(DEFAULT_SETTINGS);
          setDraft(DEFAULT_SETTINGS);
          return;
        }
        const parsed: Settings = JSON.parse(raw);
        setSaved(parsed);
        setDraft(parsed);
      } catch {
        setSaved(DEFAULT_SETTINGS);
        setDraft(DEFAULT_SETTINGS);
      }
    })();
  }, []);

  const resetSettings = () => setDraft(DEFAULT_SETTINGS);

  const onCancel = () => {
    // zurück auf gespeicherte Werte
    setDraft(saved);
  };

  const onConfirm = async () => {
    // speichern
    setSaved(draft);
    if (AsyncStorage) {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
      } catch {
        // ignore
      }
    }
  };

  const Row = ({
    icon,
    title,
    subtitle,
    right,
  }: {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle?: string;
    right: React.ReactNode;
  }) => (
    <View
      style={[
        styles.row,
        { backgroundColor: theme.rowBg, borderColor: theme.border },
      ]}
    >
      <View style={styles.rowLeft}>
        <Ionicons name={icon} size={22} color={theme.text} />
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.rowTitle,
              { color: theme.text, fontSize: 16 * scale },
            ]}
          >
            {title}
          </Text>
          {subtitle ? (
            <Text
              style={[
                styles.rowSub,
                { color: theme.muted, fontSize: 13 * scale },
              ]}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>
      <View style={styles.rowRight}>{right}</View>
    </View>
  );

  const SegButton = ({
    label,
    active,
    onPress,
  }: {
    label: string;
    active: boolean;
    onPress: () => void;
  }) => (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.segBtn,
        {
          backgroundColor: active ? theme.pillActive : theme.pillInactive,
          borderColor: theme.border,
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      <Text
        style={{ color: theme.text, fontWeight: "800", fontSize: 13 * scale }}
      >
        {label}
      </Text>
    </Pressable>
  );

  return (
    <View style={[styles.screen, { backgroundColor: theme.screenBg }]}>
      {/* ✅ Nur Back-Pfeil (kein Zahnrad) */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={36} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={[styles.card, { backgroundColor: theme.cardBg }]}>
        <ScrollView
          contentContainerStyle={styles.form}
          showsVerticalScrollIndicator={false}
        >
          <Text
            style={[
              styles.pageTitle,
              { color: theme.text, fontSize: 20 * scale },
            ]}
          >
            Einstellungen
          </Text>

          {/* Username (praktisch) */}
          <Row
            icon="person-outline"
            title={draft.language === "de" ? "Profilname" : "Profile name"}
            subtitle={
              draft.language === "de"
                ? "Wird in der App angezeigt"
                : "Shown in the app"
            }
            right={
              <View style={{ width: 160 }}>
                <TextInput
                  value={draft.username}
                  onChangeText={(v) => setDraft((p) => ({ ...p, username: v }))}
                  placeholder={draft.language === "de" ? "Name" : "Name"}
                  placeholderTextColor={draft.darkMode ? "#aaa" : "#777"}
                  style={[
                    styles.textField,
                    {
                      color: theme.text,
                      borderColor: theme.border,
                      backgroundColor: theme.pillInactive,
                    },
                  ]}
                />
              </View>
            }
          />

          {/* Schriftgröße */}
          <Row
            icon="text-outline"
            title={draft.language === "de" ? "Schriftgröße" : "Font size"}
            subtitle={
              draft.language === "de"
                ? "Ändert die Textgröße in der App"
                : "Changes text size in the app"
            }
            right={
              <View style={styles.segWrap}>
                <SegButton
                  label={draft.language === "de" ? "Klein" : "Small"}
                  active={draft.fontSize === "small"}
                  onPress={() => setDraft((p) => ({ ...p, fontSize: "small" }))}
                />
                <SegButton
                  label={draft.language === "de" ? "Mittel" : "Medium"}
                  active={draft.fontSize === "medium"}
                  onPress={() =>
                    setDraft((p) => ({ ...p, fontSize: "medium" }))
                  }
                />
                <SegButton
                  label={draft.language === "de" ? "Groß" : "Large"}
                  active={draft.fontSize === "large"}
                  onPress={() => setDraft((p) => ({ ...p, fontSize: "large" }))}
                />
              </View>
            }
          />

          {/* Sprache */}
          <Row
            icon="language-outline"
            title={draft.language === "de" ? "Sprache" : "Language"}
            subtitle={
              draft.language === "de"
                ? "Wähle deine App-Sprache"
                : "Choose your app language"
            }
            right={
              <View style={styles.segWrap}>
                <SegButton
                  label="DE"
                  active={draft.language === "de"}
                  onPress={() => setDraft((p) => ({ ...p, language: "de" }))}
                />
                <SegButton
                  label="EN"
                  active={draft.language === "en"}
                  onPress={() => setDraft((p) => ({ ...p, language: "en" }))}
                />
              </View>
            }
          />

          {/* Dark Mode */}
          <Row
            icon="moon-outline"
            title={draft.language === "de" ? "Dark Mode" : "Dark mode"}
            subtitle={
              draft.language === "de"
                ? "Dunkles Farbschema aktivieren"
                : "Enable dark theme"
            }
            right={
              <Switch
                value={draft.darkMode}
                onValueChange={(v) => setDraft((p) => ({ ...p, darkMode: v }))}
              />
            }
          />

          {/* Benachrichtigungen */}
          <Row
            icon="notifications-outline"
            title={
              draft.language === "de" ? "Benachrichtigungen" : "Notifications"
            }
            subtitle={
              draft.language === "de"
                ? "Push-Benachrichtigungen erlauben"
                : "Allow push notifications"
            }
            right={
              <Switch
                value={draft.notifications}
                onValueChange={(v) =>
                  setDraft((p) => ({ ...p, notifications: v }))
                }
              />
            }
          />

          {/* Haptik */}
          <Row
            icon="phone-portrait-outline"
            title={draft.language === "de" ? "Haptik" : "Haptics"}
            subtitle={
              draft.language === "de"
                ? "Vibration bei Interaktionen"
                : "Vibration feedback"
            }
            right={
              <Switch
                value={draft.haptics}
                onValueChange={(v) => setDraft((p) => ({ ...p, haptics: v }))}
              />
            }
          />

          {/* Updates über WLAN */}
          <Row
            icon="wifi-outline"
            title={
              draft.language === "de"
                ? "Updates nur über WLAN"
                : "Updates over Wi-Fi"
            }
            subtitle={
              draft.language === "de"
                ? "Spart Datenvolumen"
                : "Saves mobile data"
            }
            right={
              <Switch
                value={draft.wifiUpdates}
                onValueChange={(v) =>
                  setDraft((p) => ({ ...p, wifiUpdates: v }))
                }
              />
            }
          />

          {/* Hilfe */}
          <Row
            icon="help-circle-outline"
            title={draft.language === "de" ? "Hilfe" : "Help"}
            subtitle={
              draft.language === "de" ? "FAQ & Support" : "FAQ & support"
            }
            right={
              <Pressable
                onPress={() => router.push("/hilfe")}
                style={({ pressed }) => [
                  styles.linkBtn,
                  {
                    borderColor: theme.accent,
                    backgroundColor: pressed
                      ? theme.dangerBgHover
                      : theme.dangerBg,
                  },
                ]}
              >
                <Text
                  style={{
                    color: theme.accent,
                    fontWeight: "800",
                    fontSize: 13 * scale,
                  }}
                >
                  {draft.language === "de" ? "Öffnen" : "Open"}
                </Text>
              </Pressable>
            }
          />

          {/* Reset */}
          <Pressable
            onPress={resetSettings}
            style={({ pressed }) => [
              styles.resetBtn,
              {
                borderColor: theme.accent,
                backgroundColor: pressed ? theme.dangerBgHover : theme.dangerBg,
              },
            ]}
          >
            <Ionicons name="refresh-outline" size={18} color={theme.accent} />
            <Text
              style={{
                color: theme.accent,
                fontWeight: "800",
                fontSize: 14 * scale,
              }}
            >
              {draft.language === "de"
                ? "Auf Standard zurücksetzen"
                : "Reset to default"}
            </Text>
          </Pressable>

          {/* Actions */}
          <View style={styles.actions}>
            <Pressable
              onPress={onCancel}
              style={({ pressed, hovered }) => [
                styles.btn,
                styles.btnCancel,
                (hovered || pressed) && styles.btnHover,
              ]}
            >
              <Text style={styles.btnCancelText}>
                {draft.language === "de" ? "Abbrechen" : "Cancel"}
              </Text>
            </Pressable>

            <Pressable
              onPress={onConfirm}
              style={({ pressed, hovered }) => [
                styles.btn,
                styles.btnOk,
                (hovered || pressed) && styles.btnHover,
              ]}
            >
              <Text style={styles.btnOkText}>
                {draft.language === "de" ? "Bestätigen" : "Save"}
              </Text>
            </Pressable>
          </View>

          {!AsyncStorage ? (
            <Text
              style={[
                styles.note,
                { color: theme.muted, fontSize: 12 * scale },
              ]}
            ></Text>
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  header: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 10,
    alignItems: "flex-start",
  },

  card: {
    flex: 1,
    width: "92%",
    borderRadius: 28,
    padding: 18,
  },

  form: {
    gap: 12,
    paddingBottom: 22,
  },

  pageTitle: {
    fontWeight: "900",
    marginBottom: 2,
  },

  row: {
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },

  rowRight: {
    alignItems: "flex-end",
    justifyContent: "center",
  },

  rowTitle: {
    fontWeight: "900",
  },

  rowSub: {
    marginTop: 2,
    fontWeight: "600",
  },

  segWrap: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },

  segBtn: {
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  linkBtn: {
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  resetBtn: {
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },

  textField: {
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "700",
  },

  actions: { flexDirection: "row", gap: 12, marginTop: 10 },

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
    backgroundColor: "#ffd6d6",
    transform: [{ scale: 0.99 }],
  },
  btnCancelText: { color: "#b00020", fontSize: 15, fontWeight: "700" },
  btnOkText: { color: "#b00020", fontSize: 15, fontWeight: "700" },

  note: {
    marginTop: 8,
    fontWeight: "600",
  },
});
