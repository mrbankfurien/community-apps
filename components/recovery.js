import React from "react";
import { View , StyleSheet , Text, Image , TextInput , Button } from "react-native";
import { FaEnvelope } from "react-icons/fa";

export default class Recovery extends React.Component{

    constructor(props)
    {
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize:20,color:'black', fontWeight:'bold'}}> Identifiants perdu ? No probleme .</Text>
                <View style={{padding:10,position:'relative',top:20}}>
                    <Image style={{width:300,height:300}} source={require('../assets/pictures/recovery.jpg')}/>
                </View>
                <Text style={{padding:10,fontWeight:'bold',fontSize:18,textAlign:'center'}}>
                    Entrez votre addresse email fourni lors de votre inscription
                </Text>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="Entrer votre addresse email"
                        keyboardType="email"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaEnvelope style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={{width:'100%',padding:10}}>
                    <Button
                        title="Reinitialiser"
                        color="orange"
                        style={{borderRadius:5,padding:5}}
                    />
                </View>
                <Text style={{color:'orange',textAlign:'right',width:'100%',marginTop:10}}>Mr Banks Furienn, @Coders Apps.</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        padding : 10,
        flex : 1 ,
        backgroundColor: 'white',
        alignItems : 'center'
    }
}) ;