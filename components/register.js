import React from "react";
import { View , StyleSheet , Text, Image , TextInput , Button } from "react-native";
import { FaPhoneAlt , FaEnvelope, FaLock } from "react-icons/fa";

export default class Register extends React.Component{

    constructor(props)
    {
        super(props)
    }

    _toLogin(){
        this.props.navigation.navigate("Login")
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize:20,color:'black', fontWeight:'bold'}}> Hey , Bienvenue sur mon Blog App .</Text>
                <View style={{padding:10,position:'relative',top:20}}>
                    <Image style={{width:300,height:300}} source={require('../assets/pictures/register.gif')}/>
                </View>
                <Text style={{padding:10,fontWeight:'bold',fontSize:18}}>
                    Rejoingner notre Communauté de lecteur, et plongé dans l'Univers de la Litterature . Pour tout adhésion, renseigné le formulaire ci dessous .
                </Text>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                      placeholder="Entrer votre addresse email"
                      keyboardType="email"
                    />
                    <FaEnvelope style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="Entrer un mot de passe"
                        secureTextEntry={true}
                        keyboardType="password"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaLock style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="Contact telephonique"
                        keyboardType="numeric"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaPhoneAlt style={{position:'absolute',top:25,right:20}}/>
                </View>
                
                <View style={{width:'100%',padding:5}}>
                    <Button
                        title="S'enregistrer"
                        color="blue"
                        style={{borderRadius:5,padding:5}}
                    />
                </View>
                <View style={{width:'100%',padding:5}}>
                    <Button
                        onPress= {()=>this._toLogin()}
                        title="Se Connecter"
                        color="orange"
                        style={{borderRadius:5,padding:5,position:'relative'}}
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