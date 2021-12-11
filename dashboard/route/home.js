import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../part/home';
import Create from '../subpart/createPoste';

const Stack = createStackNavigator();

export default class RouteHome extends React.Component{
    
    render(){
        return(
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
        )
    }
}