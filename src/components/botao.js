import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native'
export default function (props){
return(
    <TouchableOpacity onPress={props.onClick}>
        <View style={[styles.botao,{backgroundColor:props.bg||"#CEDAE6"}]}>
            <Text>{props.valor}</Text>
        </View>
    </TouchableOpacity>
)
}
const styles = StyleSheet.create({
    botao:{
        width: Dimensions.get('window').width/4,
        height:  Dimensions.get('window').width/4, 
        textAlign:"center",       
        justifyContent:"center",
        alignItems:"center"       
    }
})