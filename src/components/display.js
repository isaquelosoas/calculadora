import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native'
export default function (props){
return(
<View style={styles.display}>
    <Text numberOfLines="1" style={{textAlign:"right", fontSize:35, margin:10}}>{props.valor}</Text>
</View>
)
}
const styles = StyleSheet.create({
    display:{
        flex:1,
        width:Dimensions.get('window').width,
        alignItems:"flex-end",
        justifyContent:"flex-end",
        backgroundColor:"#CED7DE"
    }

})  