import React from "react"
import { View , StyleSheet  } from 'react-native'
import community from '../data/community'
import CommunityItem from "../layout/communityItem"
export default class Community extends React.Component{
    render(){
        return(
            <View style={styles.container}>   
                {
                    community.map((data)=>(
                        <CommunityItem data={data} key={data.id}/>
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