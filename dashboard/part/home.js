import React from "react"
import { View , Text  , StyleSheet } from 'react-native'
import { FaPen } from "react-icons/fa"


export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.penStyle}>
                    <FaPen size={20} style={{position:'relative' , top:3}}/>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1 ,
        padding : 5,
        backgroundColor : "#fff0",
        position : 'relative'
    } ,
    penStyle:{
        position : 'absolute' ,
        bottom : 5,
        right: 5 ,
        padding : 10,
        borderRadius: '50%',
        width : '50px',
        height : '50px',
        backgroundColor : '#fff',
        textAlign  : 'center'
    }
})