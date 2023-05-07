import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/Home";
import Cadastro from '../pages/Cadastro';

const AppStack = createNativeStackNavigator();

function AppRoutes(){
    const registros = [];
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
                component={Cadastro} 
                options={{
                    title: 'Reportar animal perdido'
                }}
            />
            <AppStack.Screen 
                name='Encontrado' 
                component={Cadastro} 
                options={{
                    title: 'Reportar animal encontrado'
                }}
            />                           
        </AppStack.Navigator>
    )
}

export default AppRoutes;