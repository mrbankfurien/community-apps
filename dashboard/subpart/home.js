import React from 'react';
import {  View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import data from '../data/data'
import { FaPen } from "react-icons/fa"
import PosteItem from '../layout/posteItem'
import { connect } from 'react-redux';


const mapStateToProps = (state) =>{
  return {part : state.part}
}


const mapDispatchToProps = (dispath) =>{
  return{
    dispath : (action) =>{dispath(action)}
  }
}

class HomeDashboard extends React.Component{

  constructor(props)
    {
        super(props)
      }
      
    _goToCreate()
    {
      this.props.navigation.navigate('Create') ;
      const action = { type : 'GO_TO_CREATE' , value : 'CREATE_PART'}
      this.props.dispath(action)
    }


    render(){
  return (
    <View style={styles.container}>
            <FlatList
              style={{padding:10}}
              data={data}
              keyExtractor={item => item.id}
              renderItem={({item}) => <PosteItem {...this.props} data={item}/>}
            />

              <Text style={styles.penStyle}>
                  <FaPen size={20} style={{position:'relative' , top:3}} onClick={()=>this._goToCreate()}/>
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


export default  connect(mapStateToProps,mapDispatchToProps)(HomeDashboard)