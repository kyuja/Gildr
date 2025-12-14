import { Ionicons } from "@expo/vector-icons"
import { View, Text, Pressable, Style } from "react-native"


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

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FFECED',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:15,
        marginTop:10,
        marginBottom:10,
    },
})