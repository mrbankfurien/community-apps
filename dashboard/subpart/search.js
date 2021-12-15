import React from 'react'
import { View , Text  , StyleSheet , TextInput } from 'react-native'
import { FaSearch } from 'react-icons/fa'
import BookItem from '../layout/bookItem'
import community from '../data/community'

export default class Search extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Taper une Oeuvre"
                        keyboardType="email"
                      style={{height:50,borderWidth:1,padding:10,outline:'none',borderRadius:5,marginBottom:10}}  
                    />
                    <FaSearch style={{position:'absolute',top:25,right:20}}/>
                </View>
                <View style={styles.dataContent}>
                    {
                        community.map((data)=>(
                            <BookItem data={data} key={data.id}/>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        alignItems:'center' , 
        padding : 5
    } ,
    input :{
        width:'100%',
        padding:10,
        position:'relative'
    } ,
    dataContent:{
        width:'100%',
        height:'88%',
        justifyContent : 'center',
        flexDirection : 'row',
        gap : 2 ,
        flexWrap : 'wrap',
        overflow : 'scroll',
    }
})