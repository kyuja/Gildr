import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { BackAndSettingHeader } from "./components/BackAndSettingsHeader";


export default function SettingsScreen() {

    const resetSettings = () => {

  };

    const onCancel = () => {
    resetSettings();
  };

  const onConfirm = () => {
    resetSettings();
  };
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#77363E', width: '100%' }}>
            <BackAndSettingHeader useBack={true} settingsHref={"/settings"} useFallbackHref={"../settings"} />
            <View style={styles.card}>
                    <ScrollView
                      contentContainerStyle={styles.form}
                    showsVerticalScrollIndicator={false}
                    >
                    <View style={styles.content}>
                            <Text style={styles.description}>Einstellungen</Text>
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
                    </View>
                </ScrollView>;
        </View>
    </View>
   

    );
}

const styles = StyleSheet.create({
    content: {
    flex: 1,
    },
    description: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    height: 400,
    fontSize: 20,
    },
    container: {
        flex: 1,
        backgroundColor: "#77363E",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    card: { flex: 1, backgroundColor: "#fff", borderRadius: 28, padding: 18 },
    form: {
        gap: 15,
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        fontSize: 16,
        fontWeight: "600",
        color: "#444",
    },
    textarea: {
        minHeight: 100,
        textAlignVertical: "top",
    },
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
});