import React from "react"
import { View , StyleSheet , FlatList  } from 'react-native'
import community from '../community'
import CommunityItem from "../layout/communityItem"
export default class Community extends React.Component{
    render(){
        return(
            <View style={styles.container}>

                <FlatList
                    style={{padding:10}}
                    data={community}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <CommunityItem data={item}/>}
                />                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8f8ff`',
        padding:10,
        flexWrap : 'wrap',
        flexDirection : 'row' ,
        justifyContent : 'center',
        gap:2,
    } 
})