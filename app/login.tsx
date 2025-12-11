import { router } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "./components/BackButton";
import Button from "./components/Button";
import GildrLogo from "./components/GildrLogo";
import { InputField } from "./components/InputField";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#5a0b0b', paddingTop: 150, width: '100%' }}>
       <BackButton />

      <GildrLogo size={35} style={{position: "absolute", top: 120, left: 40}}/>
      <Text style={{ position: "absolute", top: 160, left: 42, fontSize: 40, fontWeight: "700", fontFamily:"Inter-Bold", color:"#f3f3f3", textAlign: "left"}}>LOGIN</Text>
      
      <View style={{ height: 140 }} /> 
       <InputField
        style={{ height: 60, fontSize: 24, width: 304}}
        label=""
        backgroundColor="#ffffffff"
        placeholder="E-Mail/Telefonnummer"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <View style={{ height: 15 }} />  

      <InputField
        style={{ height: 60, fontSize: 24, width: 304}}
        label=""
        backgroundColor="#ffffffff"
        placeholder="Passwort"
        secureTextEntry
        value={pw}
        onChangeText={setPw}
      />
      <View style={{ height: 62 }} /> 
      <Button
        title="Anmelden" 
        variant="primary"
        onPress={() => router.replace("/(tabs)/home")}
      />
    </View>
  );
}