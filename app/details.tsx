import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "./components/BackButton";

export default function BeitretenScreen() {
   const [showToast, setShowToast] = useState(false);
  
   const handleJoinPress = () => {
    Alert.alert(
      "Gilde beitreten",
      "Möchten Sie dieser Gilde wirklich beitreten?",
      [
        {
          text: "Abbrechen",
          style: "cancel",
        },
        {
          text: "Bestätigen",
          onPress: () => {
            setShowToast(true);

            setTimeout(() => {
              setShowToast(false);
              router.push("/chat");
            }, 1500);
          },
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton></BackButton>

        <TouchableOpacity>
          <Ionicons name="settings-outline" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Generic Title</Text>

        <Text style={styles.description}>Beschreibung ...</Text>
      </View>

      <TouchableOpacity
        style={styles.joinButton}
        onPress={handleJoinPress}
      >
        <Text style={styles.joinText}>Beitreten</Text>
      </TouchableOpacity>

      {showToast && (
      <View style={styles.toast}>
      <Text style={styles.toastText}>
        Sie sind jetzt Mitglied der Gilde
      </Text>
      </View>
)}

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
    marginBottom: 20,
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
  toast: {
  position: "absolute",
  bottom: 100,
  left: 30,
  right: 30,
  backgroundColor: "#ffffff",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 20,
  alignItems: "center",
  opacity: 0.9,
},

toastText: {
  color: "#000000",
  fontSize: 20,
  fontWeight: "600",
},
});
