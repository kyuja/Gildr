import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../components/BackButton";

export default function BeitretenScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackButton></BackButton>

        <TouchableOpacity>
          <Ionicons name="settings-outline" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Generic Title</Text>

        <Text style={styles.description}>Beschreibung ...</Text>
      </View>

      {/* Join Button */}
      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => router.push("/(tabs)/chat")}
      >
        <Text style={styles.joinText}>Beitreten</Text>
      </TouchableOpacity>
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

  content: {
    flex: 1,
  },

  title: {
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    borderRadius: 10,
    height: 50,
    fontWeight: "bold",
    marginBottom: 20,
  },

  description: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    height: 400,
    fontSize: 20,
  },

  joinButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 100,
  },

  joinText: {
    fontWeight: "600",
    fontSize: 20,
  },
});
