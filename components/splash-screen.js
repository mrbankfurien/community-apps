import React from 'react';
import { StyleSheet, View , Image, Text} from 'react-native';

export default class Splash extends React.Component {

    constructor(props)
    {
      super(props) ;
      this._setTime();
    }
  
    _setTime(){
      setTimeout(()=>{
        this.props.navigation.navigate("Register")
      } , 5000)
    } 
  
    render() {
      return (
        <View style={styles.container}>
          <Image style={styles.img} source={require('../assets/pictures/bg.jpg')}/>
          <View style={styles.loder}>
            <Text style={styles.text}> Chargement en cours ...</Text>
            <Image style={styles.gif} source={require('../assets/pictures/loader.svg')}/>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      position : 'relative',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    img:{
      height : 300,
      width : 300
    } ,
    loder : {
      padding : 10,
      position : 'absolute',
      bottom : 0,
      alignItems : 'center'
    } ,
    text:{
      color : 'blue',
      fontSize : 20 ,
    } ,
    gif : {
      width : 80,
      height : 80,
      padding : 5
    }
  }); 
  