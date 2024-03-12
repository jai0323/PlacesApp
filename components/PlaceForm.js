import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constrants/colors";

function PlaceForm(){
    const [enteredTitle, setEntertedTitle] = useState('');

    function changeTitleHandler(enteredText){
        setEntertedTitle(enteredText);
    }
    return (
        <ScrollView >
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle} />
            </View>
        </ScrollView>
    )
}
export default PlaceForm;

const styles= StyleSheet.create({
    form:{
        flex:1,
        padding: 24
    },
    label:{
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500,
    },
    input:{
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical:8,
        fontSize: 16,
        borderRadius:4,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    }
});