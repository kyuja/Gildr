import { View, Text } from "react-native"


export default function manageGuildMembers() {
    return (
    <View>
        <Pressable style={styles.header}>
            <View style={{width: 24}}/>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Beispiel Gildenname</Text>
            <Ionicons name="pencil" color={'black'} size={24}> </Ionicons>
        </Pressable>
        
    </View>
)}