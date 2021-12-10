import React from "react";
import { View , StyleSheet , Text, Image , TextInput , Button } from "react-native";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default class Register extends React.Component{

    constructor(props)
    {
        super(props)
    }

    _toRecovery(){
        this.props.navigation.navigate("Recovery")
    } 

    _toConnect(){
        this.props.navigation.navigate("Home")
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize:20,color:'black', fontWeight:'bold'}}> Bonjour, amoureux de la litterature .</Text>
                <View style={{padding:10,position:'relative',top:20}}>
                    <Image style={{width:300,height:300}} source={require('../assets/pictures/login.jpg')}/>
                </View>
                <Text style={{padding:10,fontWeight:'bold',fontSize:18,textAlign:'center'}}>
                    Renseigné vos identifiants afin d'acceder à votre Espace .
                </Text>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="Entrer votre addresse email"
                        keyboardType="email"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaEnvelope style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="Entrer votre mot de passe"
                        secureTextEntry={true}
                        keyboardType="password"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaLock style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={{width:'100%',padding:10}}>
                    <Button
                        title="Se Connecter"
                        color="blue"
                        style={{borderRadius:5,padding:5}}
                        onPress={()=>this._toConnect()}
                    />
                    <View style={{width:'100%',padding:10,textAlign:'center'}}>
                        <Text style={{fontSize:15,marginBottom:5}}>
                            Mot de passe Oublié ? Cliquez ci-dessous
                        </Text>
                        <Button
                        onPress={()=>this._toRecovery()}
                        title="Recuperer mon compte"
                        color="red"
                        style={{borderRadius:5,padding:5}}
                        />
                    </View>
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