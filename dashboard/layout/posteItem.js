import React from "react";
import { View , Text  , StyleSheet } from 'react-native'
import { FaTrash , FaBook } from "react-icons/fa"

class PosteItem extends React.Component{

    constructor(props){
        super(props)
    }

    _update(id){
        this.props.navigation.navigate('Update') ;
        const action = { type : 'GO_TO_UPDATE' , value : 'UPDATE_PART'}
        this.props.dispath(action)
    }

    _deleted(id){
        console.log("you delete poste id : "+id);
    }

    render(){

        return(
            <View style={styles.item}>
                <Text style={styles.itemHeader}> Publié le :
                    <Text style={styles.itemDate} > {this.props.data.date}</Text>
                </Text>
                <View style={styles.itemBody}>
                    <Text styles={styles.itemText}>{this.props.data.body}</Text>
                </View>
                <Text style={styles.itemAuteur}> Auteur :
                    <Text style={styles.itemName} > {this.props.data.auteur}</Text>
                </Text>
                <View style={styles.footer}>
                    <FaBook size={20} color="yellow" onClick={()=>this._update(this.props.data.id)}/>
                    <FaTrash size={20} color="red" onClick={()=>this._deleted(this.props.data.id)}/>
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