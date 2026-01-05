import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, router, useNavigation } from "expo-router";

const props = {
    useBack?: boolean;
    useFallbackHref?: string;
    backHref?: string;
    settingsHref?: string;
    onPressSettings?: () => void;
    topOffset?: number;
};

export function BackAndSettingHeader({
    useBack = true,
    useFallbackHref = "/home",

}: props ) {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const handleBack = () => {
        if (useBack)
    }
}