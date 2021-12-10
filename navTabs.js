import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './dashboard/home'
import  React from 'react';

const NavTabs = createBottomTabNavigator() ;    



export default function Tabs(){
    return(
        <NavigationContainer>
            <NavTabs.Navigator>
                <NavTabs.Screen name='Home' component={Home}></NavTabs.Screen>
                <NavTabs.Screen name='Data' component={Home}></NavTabs.Screen>
            </NavTabs.Navigator>
        </NavigationContainer>
    )
}