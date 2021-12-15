import React from "react"
import { View , StyleSheet  } from 'react-native'
import community from '../data/community'
import FavorisItem from "../layout/favorisItem"

export default class Favoris extends React.Component{


    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>   
                {
                    community.map((data)=>(
                        <FavorisItem data={data} key={data.id}/>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8f8ff',
        padding:10,
        justifyContent : 'center',
        flexDirection : 'row',
        gap : 2 ,
        flexWrap : 'wrap',
        overflow : 'scroll'
    }
})