import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, router, useNavigation } from "expo-router";

const messages = [
        { id: 1, text: "Das freut mich!", isUser: false},
        { id: 2, text: "Wann haben wir eigentlich das nächste Treffen geplant?", isUser: false},
        { id: 3, text: "Am nächsten Montag um 18 Uhr.", isUser: false }
];