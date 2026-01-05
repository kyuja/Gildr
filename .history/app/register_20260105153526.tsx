import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "./components/BackButton";
import Button from "./components/Button";
import GildrLogo from "./components/GildrLogo";
import { InputField } from "./components/InputField";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#77363E', paddingTop: 150, width: '100%' }}>
       
      <View style={{ width: "100%", paddingHorizontal: 30, alignItems: "flex-start", top:-80 }}>
              <BackButton />
        </View>

      <GildrLogo size={35} style={{position: "absolute", top: 140, left: 40}}/>
      <Text style={{ position: "absolute", top: 180, left: 42, fontSize: 36, fontWeight: "700", fontFamily:"Inter-Bold", color:"#f3f3f3", textAlign: "left"}}>REGISTRIERUNG</Text>

      <View style={{ height: 59 }} />
        <InputField
              style={{ height: 60, fontSize: 24, width: 304}}
              label=""
              backgroundColor="#fff"
              placeholder="Name"
              autoCapitalize="none"
              value={name}
              onChangeText={setName}
            />
      
            <InputField
              style={{ height: 60, fontSize: 24, width: 304}}
              label=""
              backgroundColor="#ffffffff"
              placeholder="Addresse"
              value={address}
              onChangeText={setAddress}
            />
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
      
            <InputField
              style={{ height: 60, fontSize: 24, width: 304}}
              label=""
              backgroundColor="#ffffffff"
              placeholder="Passwort"
              secureTextEntry
              value={pw}
              onChangeText={setPw}
            />
            <View style={{ height: 54 }} /> 
      <Button
        title="Registrieren"
        variant="primary"
        onPress={() => router.replace("/(tabs)/home")}
      />
    </View>
  );
}