import React, { useContext } from "react";

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import MenuItem from "../../components/MenuItem";
import { Background, Container, Logo, Menu } from "./styles";

export default function Home(){
    const navigation = useNavigation();
    const { setPerdido } = useContext(AuthContext);

    function handlePerdido(){
        setPerdido(true);
        navigation.navigate('Perdido');
    }

    function handleEncontrado(){
        setPerdido(false);
        navigation.navigate('Encontrado');
    }    

    return(
        <Background>
            <Header />
            <Container>
                <Logo source={require('../../assets/logo.png')} />
                <Menu>
                    <MenuItem 
                        title="Reportar animal perdido" 
                        iconName="search" 
                        onPress={() => handlePerdido()}
                    />
                    <MenuItem 
                        title="Reportar animal avistado" 
                        iconName="eye"
                        onPress={() => handleEncontrado()}                         
                    />
                    <MenuItem 
                        title="Avistamentos reportados" 
                        iconName="alert-triangle"
                        onPress={() => navigation.navigate('Avistamentos')}
                    />
                    <MenuItem 
                        title="Meu anúncio" 
                        iconName="trello" 
                    />                                                            
                </Menu>
            </Container>
        </Background>
    )
}