import React from "react";
import { View , ImageBackground , Text , StyleSheet} from "react-native";
import { FaEye , FaHeart } from "react-icons/fa";

class BookItem extends React.Component{

    constructor(props){
        super(props)
    }

    
    render(){
        const data = this.props.data;

        return(
            <View style={styles.itemContent}>
                    <View style={styles.img}>
                        <ImageBackground style={styles.imgView} resizeMode="contain" source={require('../../assets/pictures/books.jpg')}></ImageBackground >
                    </View>
                    <View style={styles.data}>
                        <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>{data.nom}</Text>
                        <Text style={{fontSize:15,color:'white'}}>{data.prenom} </Text>
                    </View>
                    <View style={{textAlign:'center',width:'100%'}}>
                        <Text style={{fontSize:20}}>Oeuvres : 
                            <Text style={{color:'red' , opacity:0.7}}> Le nom de l'oeuvre </Text>
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',marginTop:5}}>
                        <Text style={{fontWeight:'bolder' , fontSize:19,color:'white'}}>
                            Details <FaEye size={18} color='orange' style={{fontWeight:'bold',position:'relative',top:3,opacity:0.6,left:20}}/>
                        </Text>
                        <Text style={{fontWeight:'bolder' , fontSize:19,color:'white'}}>
                            Favoris <FaHeart size={18} color='white' style={{fontWeight:'bold',position:'relative',top:3,opacity:0.6,left:20}}/>
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
        width : '160px' ,
        height:'320px'
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

export default BookItem