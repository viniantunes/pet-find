import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/Home";
import Perdido from '../pages/Perdido';

const AppStack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name='Home' 
                component={Home} 
                options={{
                    headerShown: false
                }} 
            />
            <AppStack.Screen 
                name='Perdido' 
                component={Perdido} 
                options={{
                    title: 'Reportar animal perdido'
                }} 
            />            
        </AppStack.Navigator>
    )
}

export default AppRoutes;