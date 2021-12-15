import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FaHome , FaHeart , FaUserFriends , FaSignOutAlt , FaChevronLeft } from 'react-icons/fa';
import Home from './part/home'
import Favoris from './part/favoris'
import Community from './part/community'
import { connect } from 'react-redux'

const Tab = createBottomTabNavigator();

const mapStateToProps = (state) =>{
  return {part : state.part}
}

const mapDispatchToProps = (dispath) =>{
  return{
    dispath : (action) =>{dispath(action)}
  }
}

class App extends React.Component {

  constructor(props){
    super(props)
  }

  _goToHome(){
    this.props.navigation.navigate('Home',{screen:'Homedashboard'}) ;
    const action = { type : 'GO_TO_HOME' , value : 'HOME_PART'}
    this.props.dispath(action)
  }

  render(){
    return (
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName = "Acceuil"
          screenOptions={({route})=>({
              tabBarStyle:{
                backgroundColor:'black',
                padding:5,
                display : this.props.part=='CREATE_PART'?'none':this.props.part=='UPDATE_PART'?'none':'',
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
          
  
          options={({route})=>({
            headerTitle : this.props.part=='CREATE_PART' ? 'Ajouter lecture' : this.props.part=='UPDATE_PART'?'Modifier une lecture':'Tableau de bord .' ,
            tabBarLabel : 'Acceuil' , 
            headerRight:()=>{
              return(
                this.props.part=='CREATE_PART'?null:this.props.part=='UPDATE_PART'?null:<FaSignOutAlt size={20}/>
              )
            } ,
            headerLeft:()=>{
              return(
                this.props.part=='CREATE_PART'?<FaChevronLeft size={20} onClick={()=>this._goToHome()} />:this.props.part=='UPDATE_PART'?<FaChevronLeft size={20} onClick={()=>this._goToHome()} />:null
              )
            } ,
            headerStyle:{
              backgroundColor : 'blue',
            } ,
            headerTitleStyle:{
              fontWeight : 'bold' ,
              fontSize : 20 
            },
          })} 
          
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
            headerShown:false
          }} 
          
          component={Favoris} />
  
  
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(App)