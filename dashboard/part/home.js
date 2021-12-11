import React from 'react';
import {  View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import data from '../data'
import { FaPen } from "react-icons/fa"
import PosteItem from '../layout/posteItem'


export default class Home extends React.Component{

  constructor(props)
    {
        super(props)
      }
      
    _navigate()
    {
      console.log(this.props)
    }

    render(){
  return (
    <View style={styles.container}>
      <FlatList
        style={{padding:10}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PosteItem data={item}/>}
      />

        <Text style={styles.penStyle}>
            <FaPen size={20} style={{position:'relative' , top:3}} onClick={()=>this._navigate()}/>
        </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
    container:{
        flex : 1 ,
        padding : 10,
        backgroundColor : "#fff0",
        position : 'relative'
    } ,
    penStyle:{
        zIndex: 9999,
        position : 'absolute' ,
        bottom : 5,
        right: 5 ,
        padding : 10,
        borderRadius: '50%',
        width : '50px',
        height : '50px',
        backgroundColor : '#f5f5f5',
        textAlign  : 'center',
    } ,

})
