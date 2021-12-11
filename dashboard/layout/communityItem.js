import React from "react";
import { View , ImageBackground , Text , StyleSheet} from "react-native";
import { FaEye } from "react-icons/fa";

class CommunityItem extends React.Component{

    constructor(props){
        super(props)
    }

    
    render(){
        const data = this.props.data;

        return(
            <View style={styles.itemContent}>
                    <View style={styles.img}>
                        <ImageBackground style={styles.imgView} resizeMode="contain" source={require('{../assets/pictures/community.jpg}')}></ImageBackground >
                    </View>
                    <View style={styles.data}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>{data.nom}</Text>
                        <Text style={{fontSize:15,color:'white'}}>{data.prenom} </Text>
                    </View>
                    <View style={{textAlign:'center',width:'100%'}}>
                        <Text>Oeuvres Lus : 
                            <Text style={{color:'red' , opacity:0.7}}> {data.counter} </Text>
                        </Text>
                    </View>
                    <View style={{textAlign:'right',width:'100%'}}>
                        <Text>
                            Details <FaEye size={18} color='black' style={{fontWeight:'bold',position:'relative',top:3}}/>
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
        height:'230px'
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

export default CommunityItem