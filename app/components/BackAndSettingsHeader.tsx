import { Ionicons } from "@expo/vector-icons";
import { Href, router, useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
    useBack?: boolean;
    useFallbackHref?: Href;
    backHref?: Href;
    settingsHref?: Href;
    onPressSettings?: boolean;
};

export function BackAndSettingHeader({
    useBack = true,
    useFallbackHref = "/home",
    backHref,
    settingsHref = "/settings",
    onPressSettings = true,
}: Props ) {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const handleBack = () => {
          if (backHref) {
            router.replace(backHref);
            return;
        }
        
        if (useBack){
            if (navigation.canGoBack()) {
                router.back();
            } else {
                router.replace(useFallbackHref);
            }
        }    
    };

    const handleSettings = () => {
        if (onPressSettings) {
            router.push(settingsHref);
        } else {
            router.push(useFallbackHref);
        }
    };

    return (
        <View style={[styles.container,{paddingTop: insets.top + 20}]}>
                <TouchableOpacity onPress={handleBack} hitSlop={10}>   
                    <Ionicons name="arrow-back" size={40} color="#fff" />
                </TouchableOpacity>
            
                <TouchableOpacity onPress={handleSettings} hitSlop={10}>
                    <Ionicons name="settings-outline" size={40} color="#fff" />
                </TouchableOpacity>
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