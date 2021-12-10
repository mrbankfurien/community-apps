import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FaHome , FaHeart , FaUserFriends } from 'react-icons/fa';
import { FaSignOutAlt , FaUser } from 'react-icons/fa';
import Home from './part/home'
import Favoris from './part/favoris'
import Community from './part/community'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
        screenOptions={({route})=>({
            tabBarStyle:{
              backgroundColor:'black',
              padding:5
            } ,
            tabBarLabelStyle:{
              fontWeight : 'bold',
              fontSize : 18
            } ,
            tabBarInactiveTintColor : '#ffffff' ,
            tabBarActiveTintColor : '#ffa500' ,
            tabBarLabelPosition : 'below-icon' ,
            tabBarIcon : ({focused,color='#ffffff',size=20})=>{
              if(route.name=='Acceuil'){
                return(
                  <FaHome color={ focused? '#ffa500' : color } size={size}/>
                )
              }

              if(route.name == 'Favoris'){
                return(
                  <FaHeart color={focused? '#ffa500' : color } size={size}/>
                )
              }

              if(route.name == 'Communaute'){
                return(
                  <FaUserFriends color={focused? '#ffa500' : color } size={size}/>
                )
              }
            }
        })} 

        backBehavior='none'
      
      >
        <Tab.Screen name="Acceuil" 

        options={{
          headerTitle : 'Tableau de bord .' ,
          tabBarLabel : 'Acceuil' , 
          headerRight:()=>{
            return(
              <FaSignOutAlt size={20}/>
            )
          } ,
          headerStyle:{
            backgroundColor : 'blue'
          } ,
          headerTitleStyle:{
            fontWeight : 'bold' ,
            fontSize : 20 
          }
        }} 
        
        component={Home} />


        <Tab.Screen name="Communaute"

        options={{
          headerTitle : 'Notre Communauté .' ,
          tabBarLabel : 'Communaute' , 
          headerStyle:{
            backgroundColor : 'blue'
          } ,
          headerTitleStyle:{
            fontWeight : 'bold' ,
            fontSize : 20 
          }
        }} 

        component={Community} />

        <Tab.Screen name="Favoris" 
        
        options={{
          headerTitle : 'Vos Favoris .' ,
          tabBarLabel : 'Favoris' , 
          headerRight:()=>{
            return(
              <FaUser size={20}/>
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
        
        component={Favoris} />



      </Tab.Navigator>
    </NavigationContainer>
  );
}