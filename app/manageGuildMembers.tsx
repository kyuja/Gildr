import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackAndSettingHeader } from "./components/BackAndSettingsHeader";

const members = [
  { id: 1, name: "Mitglied 1" },
  { id: 2, name: "Mitglied 2" },
  { id: 3, name: "Mitglied 3" },
  { id: 4, name: "Mitglied 4" },
  { id: 5, name: "Mitglied 5" },
  { id: 6, name: "Mitglied 6" },
];

export default function ManageGuildMembers() {
  const insets = useSafeAreaInsets();

  const [memberList, setMemberList] = React.useState(members);
  const [memberDeleteFlag, setMemberDeleteFlag] = React.useState<number[]>([]);

  const isMarkedForDeletion = (id: number) => memberDeleteFlag.includes(id);

  const toggleMemberDelete = async (id: number) => {
    setMemberDeleteFlag((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id],
    );
    await Haptics.selectionAsync();
  };

  const deleteMember = () => {
    setMemberList((prev) =>
      prev.filter((member) => !memberDeleteFlag.includes(member.id)),
    );
    setMemberDeleteFlag([]);
  };

  const [showToast, setShowToast] = useState(false);

  const handleDeletePress = () => {
    if (memberDeleteFlag.length === 0) {
      Alert.alert(
        "Keine Auswahl",
        "Bitte wählen Sie mindestens ein Mitglied aus.",
      );
      return;
    }

    Alert.alert(
      "Mitglieder bearbeiten",
      "Möchten Sie diese Mitglieder wirklich löschen?",
      [
        {
          text: "Abbrechen",
          style: "cancel",
        },
        {
          text: "Bestätigen",
          onPress: () => {
            deleteMember();
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
              router.replace("/guilds");
            }, 1500);
          },
        },
      ],
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={insets.top - 100}
    >
      <View style={styles.screenContainer}>
        <View style={{ paddingHorizontal: 10 }}>
          <BackAndSettingHeader
            useBack={true}
            useFallbackHref={"../home"}
            settingsHref={"/settings"}
          />
        </View>
        <Pressable style={styles.header}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Beispiel Gildenname
          </Text>
        </Pressable>

        <TextInput
          style={styles.inputBar}
          placeholder="Beschreibung eingeben..."
        />

        <Text style={styles.membersBar}>Mitglieder</Text>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            flex: 1,
          }}
        >
          <ScrollView>
            {memberList.map((member) => (
              <View
                key={member.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: isMarkedForDeletion(member.id) ? "gray" : "black",
                  }}
                >
                  {member.name}
                </Text>

                <TouchableOpacity onPress={() => toggleMemberDelete(member.id)}>
                  <Ionicons
                    name="remove-circle"
                    size={40}
                    style={{
                      right: 10,
                      padding: 5,
                      color: isMarkedForDeletion(member.id)
                        ? "maroon"
                        : "black",
                    }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={styles.manageButton}
            onPress={() => router.push("/gilde-bearbeiten")}
          >
            <Text style={styles.manageButtonText}>Mehr Optionen</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => router.back()}
          >
            <Text style={{ fontSize: 20, fontWeight: "800" }}>Abbrechen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleDeletePress}
          >
            <Text style={{ fontSize: 20, fontWeight: "800" }}>Bestätigen</Text>
          </TouchableOpacity>
          {showToast && (
            <View style={styles.toast}>
              <Text style={styles.toastText}>Mitglieder wurden gelöscht</Text>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#FFECED",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 38,
    marginTop: 20,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: "#070707",
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#77363E",
  },
  inputBar: {
    color: "black",
    marginTop: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 10,
  },
  membersBar: {
    color: "black",
    marginTop: 10,
    padding: 10,
    marginRight: 265,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "white",
    borderRadius: 10,
  },
  headerActions: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  manageButton: {
    width: "100%",
    marginTop: 15,
    backgroundColor: "#FFECED",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#070707",
  },

  manageButtonText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#000000",
  },
  toast: {
    position: "absolute",
    bottom: 240,
    left: 30,
    right: 30,
    backgroundColor: "rgb(26, 2, 2)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    opacity: 0.9,
  },

  toastText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
});
