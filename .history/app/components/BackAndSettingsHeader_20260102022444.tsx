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
        if (useBack){
            if (navigation.canGoBack()) router.back();
            else router.replace(backFallbackHref);
            return;
        }
        if (backHref) router.push(backHref);
    };

    return (
        <View style={[styles.headerActions,{paddingTop: insets.top + 20}]}>
            <Link href='../chat' asChild>
                <TouchableOpacity>   
                    <Ionicons name="arrow-back" size={40} color="#fff" />
                </TouchableOpacity>
            </Link>
        
            <Link href='../home' asChild>    
                <TouchableOpacity>
                    <Ionicons name="settings-outline" size={40} color="#fff" />
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})