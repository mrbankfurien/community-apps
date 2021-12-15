import React from "react"
import Create from "../subpart/createPoste"
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeDashboard from "../subpart/home"
import Update from "../subpart/updatePost"


const Naviguation = createStackNavigator({
    Homedashboard : {
        screen : HomeDashboard,
        navigationOptions:({navigation})=>({     
            headerShown:false
        })
    } ,
    Create : {
        screen : Create,
        navigationOptions:({navigation})=>({     
            headerShown:false
        })
    } ,
    Update : {
        screen : Update,
        navigationOptions:({navigation})=>({     
            headerShown:false
        })
    } 
});




export default createAppContainer(Naviguation);