import { Ionicons } from "@expo/vector-icons";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type props = {
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
    backHref

}: props ) {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const handleBack = () => {
        if (useBack){
            if (navigation.canGoBack()) router.back();
            else router.replace(useFallbackHref);
            return;
        }
        if (backHref) router.push(backHref);
    };

    return (
        <View style={[styles.container,{paddingTop: insets.top + 20}]}>
                <TouchableOpacity onPress={handleBack} hitSlop={10}>   
                    <Ionicons name="arrow-back" size={40} color="#fff" />
                </TouchableOpacity>
            
            {onPressSettings ? (
                <TouchableOpacity onPress={onPressSettings} hitSlop={10}>
                    <Ionicons name="settings-outline" size={40} color="#fff" />
                </TouchableOpacity>
            ) : (
                <Link href='/home' asChild>    
                <TouchableOpacity hitSlop={10}>
                    <Ionicons name="settings-outline" size={40} color="#fff" />
                </TouchableOpacity>
                </Link>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingHorizontal: 10,
        paddingBottom: 10,
    }
})