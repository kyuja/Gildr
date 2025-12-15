import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BackButton from "../components/BackButton";

export default function GildeBearbeiten() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        
          <BackButton></BackButton>
      
        <Text style={styles.headerTitle}>Gilde bearbeiten</Text>

        <Ionicons name="settings-outline" size={40} color="#fff" />
      </View>

      <View style={styles.card}>
        <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#777" />
          <TextInput style={styles.input} placeholder="Kategorie" placeholderTextColor="#777" />
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Beschreibung"
            placeholderTextColor="#777"
            multiline
          />
          <TextInput style={styles.input} placeholder="Ort" placeholderTextColor="#777" />
          <TextInput style={styles.input} placeholder="Wann" placeholderTextColor="#777" />

          <View style={styles.uploadRow}>
            <Text style={styles.uploadLabel}>Logo</Text>
            <Pressable style={styles.uploadBox}>
              <Text style={styles.uploadIcon}>↑ +</Text>
            </Pressable>
          </View>

          <View style={styles.uploadRow}>
            <Text style={styles.uploadLabel}>Bilder</Text>
            <Pressable style={styles.uploadBox}>
              <Text style={styles.uploadIcon}>↑ +</Text>
            </Pressable>
          </View>

          <View style={styles.actions}>
            <Pressable style={[styles.btn, styles.btnCancel]}>
              <Text style={styles.btnCancelText} >Abbrechen</Text> 
            </Pressable>
            <Pressable style={[styles.btn, styles.btnOk]}>
              <Text style={styles.btnOkText}>Bestätigen</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#3a000a", paddingHorizontal: 18, paddingTop: 18 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  headerTitle: { color: "#fff", fontSize: 24, fontWeight: "700" },

  roundBtn: {
    width: 42, height: 42, borderRadius: 999, backgroundColor: "#f5e2e2",
    alignItems: "center", justifyContent: "center",
  },
  roundBtnText: { fontSize: 20, color: "#2b0010", fontWeight: "700" },

  card: { flex: 1, backgroundColor: "#fff", borderRadius: 28, padding: 18 },
  form: { gap: 10, paddingBottom: 20 },

  input: {
    backgroundColor: "#dedede", borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10,
    fontSize: 16, fontWeight: "600", color: "#444",
  },
  textarea: { minHeight: 110, textAlignVertical: "top" },

  uploadRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 },
  uploadLabel: { fontSize: 16, fontWeight: "700", color: "#444" },
  uploadBox: {
    flex: 1, backgroundColor: "#dedede", borderRadius: 10, paddingVertical: 14,
    alignItems: "center", justifyContent: "center",
  },
  uploadIcon: { fontSize: 22, fontWeight: "700", color: "#444" },

  actions: { flexDirection: "row", gap: 12, marginTop: 14 },
  btn: {
    flex: 1, borderRadius: 10, paddingVertical: 10, alignItems: "center", justifyContent: "center",
    borderWidth: 1, borderColor: "#b00020",
  },
  btnCancel: { backgroundColor: "#ffecec" },
  btnOk: { backgroundColor: "#b00020" },
  btnCancelText: { color: "#b00020", fontSize: 15, fontWeight: "700" },
  btnOkText: { color: "#fff", fontSize: 15, fontWeight: "700" },
});
