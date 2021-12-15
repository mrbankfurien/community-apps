import React from "react";
import { View , ImageBackground , Text , StyleSheet} from "react-native";
import { FaHeart , FaEye } from "react-icons/fa";

class FavorisItem extends React.Component{

    constructor(props){
        super(props)
    }

    
    render(){
        const data = this.props.data;

        return(
            <View style={styles.itemContent}>
                    <View style={styles.img}>
                        <ImageBackground style={styles.imgView} resizeMode="contain" source={require('../../assets/pictures/community.jpg')}></ImageBackground >
                    </View>
                    <View style={styles.data}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>{data.nom}</Text>
                        <Text style={{fontSize:15,color:'white'}}>{data.prenom} </Text>
                    </View>
                    <View style={{textAlign:'left',width:'100%'}}>
                        <Text style={{fontWeight:'bold',fontSize:20}}>Auteur : 
                            <Text style={{color:'red' , opacity:0.7}}> {data.counter} </Text>
                        </Text>
                        <Text style={{fontWeight:'bold',fontSize:20}}>Oeuvre / Roman  : 
                            <Text style={{color:'red' , opacity:0.7}}> Le titre de l'ouvrage  </Text>
                        </Text>
                    </View>
                    <View style={{justifyContent:'space-evenly',width:'100%' , marginTop :10 , flexDirection:'row'}}>
                        <Text style={{fontSize:19,fontWeight:'bold',color:'white'}}>
                            Retirer <FaHeart  size={19} color='red' style={{fontWeight:'bold',position:'relative',top:3}}/>
                        </Text>
                        <Text style={{fontSize:19,fontWeight:'bold',color:'white'}}>
                            Détails <FaEye  size={19} color='orange' style={{fontWeight:'bold',position:'relative',top:4    }}/>
                        </Text>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContent:{
        borderRadius:5,
        backgroundColor:'grey',
        padding:5,
        width : '100%' ,
        height:'300px'
    },
    img:{
        width : '100%',
        height : '100px',
        position : 'relative'
    },
    imgView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    } ,
    data : {
        padding : 5,
        alignItems:'flex-start'
    }
})

export default FavorisItem