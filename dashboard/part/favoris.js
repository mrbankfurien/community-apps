import React from "react"
import { View , Text , Pressable } from 'react-native'
import { createDrawerNavigator , DrawerContentScrollView } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Search from "../subpart/search"
import Profil from "../subpart/profil"
import {  FaUser , FaHeart , FaSearch} from 'react-icons/fa'
import Favorie from "../subpart/favoris"

const Drawer = createDrawerNavigator()

export default class Favoris extends React.Component{

    _customer(props){
        return(
            <DrawerContentScrollView {...props}>
                <View style={{padding:10,width:'100%',backgroundColor:'black'}}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>
                        Mail
                    </Text>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>
                        bankfurienn@gmail.com
                    </Text>
                </View>
                <View style={{padding:10}}>
                    {props.state.routeNames.map((name,index)=>(
                        <Pressable
                        style={{
                            backgroundColor:index === props.state.index ? '#000' : '#f5f5f5' ,
                            padding : 15,
                            borderRadius:5,
                            marginBottom:5
                            }}
                            
                        key={index} 
                        
                        onPress={(ev)=>{props.navigation.navigate(name)}}
                        
                        >
                        <View style={{width:'100%',padding:5,flexWrap:'nowrap',flexDirection:'row',alignItems:'flex-start',gap:3}}>
                            <Text>
                                {name=='Favoris'? <FaHeart size={20} color={index === props.state.index ? '#ffa500' : '#000' } /> : ''}
                                {name=='Profil'? <FaUser size={20} color={index === props.state.index ? '#ffa500' : '#000' } /> : '' }
                                {name=='Rechercher'? <FaSearch size={20} color={index === props.state.index ? '#ffa500' : '#000' } /> : ''}
                            </Text>
                            <Text style={{fontWeight:'bold',fontSize:16,color:index === props.state.index ? '#ffa500' : '#000'}}>{name}</Text>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </DrawerContentScrollView>
        )
    }

    render(){
        return(
            <NavigationContainer independent={true}>

                <Drawer.Navigator 
                
                initialRouteName="Rechercher"

                screenOptions={({route})=>({
                    drawerActiveBackgroundColor : "#000",
                    drawerInactiveBackgroundColor : "#f5f5f5" ,
                    drawerActiveTintColor : '#ffa500' ,
                    drawerInactiveTintColor : '#000' ,
                    drawerIcon : ({focused,color='#000',size=20})=>{
                        if(route.name=='Search'){
                          return(
                            <FaSearch color={ focused? '#ffa500' : color } size={size}/>
                          )
                        }
          
                        if(route.name == 'Profil'){
                          return(
                            <FaUser color={focused? '#ffa500' : color } size={size}/>
                          )
                        }

                        if(route.name == 'Favoris'){
                            return(
                              <FaHeart color={focused? '#ffa500' : color } size={size}/>
                            )
                          }
                      }
                })} 

                drawerContent={(props)=><this._customer {...props}/>}

                >

                    <Drawer.Screen 
                    
                    name="Rechercher" component={Search}

                    options={({route})=>({
                        title: 'Rechercher un roman '
                         ,
                        drawerItemStyle:{
                            fontWeight : 'bold',
                            fontSize : 40
                        },
                        headerRight:()=>{
                                return(
                                    
                                    <FaSearch size={20} />
                                    )
                        }  ,
                        headerStyle:{
                            backgroundColor : 'blue'
                        } ,
                        headerTitleStyle:{
                            fontWeight : 'bold' ,
                            fontSize : 20 
                        }
                    })}
                    
                    
                    />



                    <Drawer.Screen 
                    
                    name="Profil" component={Profil}

                    options={{
                        title: ' Mon Profil ' ,
                        headerStyle:{
                            backgroundColor : 'blue'
                        } ,
                        headerRight:()=>{
                                return(
                                    
                                    <FaUser size={20} />
                                    )
                        }  ,
                        headerTitleStyle:{
                            fontWeight : 'bold' ,
                            fontSize : 20 
                        }
                    }}
                    
                    
                    />



                    <Drawer.Screen 
                    
                    name="Favoris" component={Favorie}

                    options={{
                        title: ' Mes Favoris' ,
                        headerRight:()=>{
                            return(
                            <FaHeart size={20} />
                            )
                        }  ,
                        headerStyle:{
                            backgroundColor : 'blue'
                        } ,
                        headerTitleStyle:{
                            fontWeight : 'bold' ,
                            fontSize : 20 
                        }
                    }}
                    
                    
                    />



                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}