import React from 'react'
import { View , Text , StyleSheet , Image , TextInput , Button} from 'react-native'
import { FaUser , FaEnvelope , FaPhoneAlt } from 'react-icons/fa'


export default class Profil extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{padding:10,position:'relative',top:20}}>
                    <Image  style={{width:'220px',height:'220px',borderRadius:'50%'}} source={require('../../assets/pictures/profil.jpeg')}/>
                </View>
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:20}}> 
                    Configuré Votre Espace Utilisateur 
                </Text>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="Mr Banks Furienn"
                        secureTextEntry={true}
                        keyboardType="password"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaUser style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="bankfurienn@gmail.com"
                        secureTextEntry={true}
                        keyboardType="password"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaEnvelope style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="002250170810571"
                        secureTextEntry={true}
                        keyboardType="password"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaPhoneAlt style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={{width:'100%',padding:5}}>
                    <Button
                        title="Modifier"
                        color="blue"
                        style={{borderRadius:5,padding:5}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
        flex : 1 ,
        backgroundColor: 'white',
        alignItems : 'center',
        overflow:'scroll'
    }
})