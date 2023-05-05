import React, { useContext } from "react";

import { useNavigation } from '@react-navigation/native'

import Header from "../../components/Header";
import MenuItem from "../../components/MenuItem";
import { Background, Container, Logo, Menu } from "./styles";

export default function Home(){
    const navigation = useNavigation();

    return(
        <Background>
            <Header />
            <Container>
                <Logo source={require('../../assets/logo.png')} />
                <Menu>
                    <MenuItem 
                        title="Reportar animal perdido" 
                        iconName="search" 
                        onPress={() => navigation.navigate('Perdido')}
                    />
                    <MenuItem 
                        title="Reportar animal avistado" 
                        iconName="eye" 
                    />
                    <MenuItem 
                        title="Avistamentos reportados" 
                        iconName="alert-triangle" 
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