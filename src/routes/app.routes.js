import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/Home";
import Cadastro from '../pages/Cadastro';
import Avistamentos from "../pages/Avistamentos";
import Anuncio from "../pages/Anuncio";

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
                component={Cadastro} 
                options={{
                    title: 'Reportar animal perdido'
                }}
            />
            <AppStack.Screen 
                name='Encontrado' 
                component={Cadastro} 
                options={{
                    title: 'Reportar animal avistado'
                }}
            />
            <AppStack.Screen 
                name='Avistamentos' 
                component={Avistamentos} 
                options={{
                    title: 'Avistamentos reportados'
                }}
            />
            <AppStack.Screen 
                name='Anuncio' 
                component={Anuncio} 
                options={{
                    title: 'Meu anúncio'
                }}
            />  
        </AppStack.Navigator>
    )
}

export default AppRoutes;