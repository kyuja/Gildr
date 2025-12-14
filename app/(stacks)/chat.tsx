import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Chat() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={40} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="settings-outline" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#300000",
    paddingTop: 60,
    paddingHorizontal: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
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
});
