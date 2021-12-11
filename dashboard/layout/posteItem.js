import React from "react";
import { View , Text  , StyleSheet } from 'react-native'
import { FaTrash , FaBook } from "react-icons/fa"

class PosteItem extends React.Component{

    _update(id){
        console.log("you update poste id : "+id);
    }

    _deleted(id){
        console.log("you delete poste id : "+id);
    }

    render(){

        const data = this.props.data;

        

        return(
            <View style={styles.item}>
                <Text style={styles.itemHeader}> Publié le :
                    <Text style={styles.itemDate} > {data.date}</Text>
                </Text>
                <View style={styles.itemBody}>
                    <Text styles={styles.itemText}>{data.body}</Text>
                </View>
                <Text style={styles.itemAuteur}> Auteur :
                    <Text style={styles.itemName} > {data.auteur}</Text>
                </Text>
                <View style={styles.footer}>
                    <FaBook size={20} color="yellow" onClick={()=>this._update(data.id)}/>
                    <FaTrash size={20} color="red" onClick={()=>this._deleted(data.id)}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item :{
        backgroundColor : 'white',
        padding:10,
        borderTopLeftRadius:10,
        borderTopRightRadius : 10,
        backgroundColor : 'grey',
        marginBottom:10,
        marginTop : 10
    } ,
    itemHeader :{
        includeFontPadding:false,
        fontWeight:'bold',
        fontSize : 20,
        textAlignVertical : 'center',
        padding :5
    } ,
    itemDate : {
        color:'white'      
    },
    itemBody:{
        padding:10,
        textAlign: 'justify'
    } ,
    itemText:{
        fontSize:18,
        color:'black',
        opacity:0.8
    },
    itemAuteur:{
        fontSize : 18,
        textDecorationStyle:'solid'
    } ,
    itemName:{
        color:'orange',
        fontWeight:'bold',
        fontSize:18
    },
    footer:{
        flexDirection:'row',
        padding:2,
        justifyContent:'space-evenly',
        marginTop:10,
    } ,
})

export default PosteItem