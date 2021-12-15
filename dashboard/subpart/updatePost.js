import React from 'react'
import { View , Text , StyleSheet , TextInput , Button , Image } from 'react-native'
import { FaUser } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'


class Update extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                <View style={{padding:10,position:'relative',top:20}}>
                    <Image  style={{width:'220px',height:'220px',borderRadius:'50%'}} source={require('../../assets/pictures/edit.jpg')}/>
                </View>
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:20}}> 
                    Enregistrer une Oeuvre Lu ( Les differents champs ci-dessous sont obligatoire ) 
                </Text>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="Auteur : Mr Banks Furienn"
                        keyboardType="text"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaUser style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="Oeuvre : Bataille des Couples "
                        keyboardType="text"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaBook style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={{width:'100%',padding:10,position:'relative'}}>
                    <TextInput
                        placeholder="Donner un bref resumé après lecture ..."
                        keyboardType="text"
                      style={{height:90,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10,
                      whiteSpace:'wrap'}}  
                    />
                </View>
                <View style={{width:'100%',padding:5}}>
                    <Button
                        title="Enregistrer"
                        color="orange"
                        style={{borderRadius:5,padding:5}}
                    />
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
        flex : 1 ,
        alignItems : 'center',
        overflow:'scroll'
    }
})

export default  Update