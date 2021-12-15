import React from 'react'
import Register from '../components/register'
import Splash from '../components/splash-screen'
import Login from '../components/login'
import Recovery from '../components/recovery'
import Home from '../dashboard/home'
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { FaChevronLeft } from 'react-icons/fa'

const Naviguation = createStackNavigator({
    Splash : {
        screen : Splash,
        navigationOptions:{
            headerShown: false,
        }
    } ,
    Register : {
        screen : Register,
        navigationOptions:{
            headerShown: false
        }
    } ,
    Login : {
        screen : Login,
        navigationOptions:({navigation})=>({     
            title : 'CONNEXION',
            headerStyle:{
                backgroundColor : 'blue',
            } ,
            headerTitleAlign : 'center',
            headerTintColor : 'white',
            headerTitleStyle :{
                fontFamily : 'bolder'
            } ,
            headerLeft: ()=>{
                return(
                    <FaChevronLeft size={20} onClick={()=>{navigation.navigate("Register")}}/>
                )
            }
        })
    } , 
    Recovery : {
        screen : Recovery,
        navigationOptions:({navigation})=>({
            title : 'REINITIALISATION',
            headerStyle:{
                backgroundColor : 'orange',
            },
            headerTitleAlign : 'center',
            headerTintColor : 'white',
            headerTitleStyle :{
                fontFamily : 'bolder'
            },
            headerLeft: ()=>{
                return(
                    <FaChevronLeft size={20} onClick={()=>{navigation.navigate("Login")}}/>
                )
            }
        })
    } ,
    Home : {
        screen : Home,
        navigationOptions:{
            headerShown: false
        }
    }
});

export default createAppContainer(Naviguation);