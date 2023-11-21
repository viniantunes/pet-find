import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/Home";
import Cadastro from '../pages/Cadastro';
import Adocao from '../pages/Adocao';
import Avistamentos from "../pages/Avistamentos";
import Anuncio from "../pages/Anuncio";
import AdoteMe from "../pages/AdoteMe";

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
            <AppStack.Screen 
                name='Adocao' 
                component={Adocao} 
                options={{
                    title: 'Anunciar adocao'
                }}
            />
            <AppStack.Screen 
                name='AdoteMe' 
                component={AdoteMe} 
                options={{
                    title: 'Adote-Me'
                }}
            />               
        </AppStack.Navigator>
    )
}

export default AppRoutes;