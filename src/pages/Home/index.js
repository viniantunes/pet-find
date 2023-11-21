import React, { useContext } from "react";

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import MenuItem from "../../components/MenuItem";
import { Background, Container, Logo, Menu } from "./styles";

export default function Home(){
    const navigation = useNavigation();
    const { setPerdido, setAdocao } = useContext(AuthContext);

    function handle(navigateTo){
        setPerdido(navigateTo === 'Perdido');
        setAdocao(navigateTo === 'Adocao');
        navigation.navigate(navigateTo);
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
                        onPress={() => handle('Perdido')}
                    />
                    <MenuItem 
                        title="Reportar animal avistado" 
                        iconName="eye"
                        onPress={() => handle('Encontrado')}                         
                    />
                    <MenuItem 
                        title="Avistamentos reportados" 
                        iconName="alert-triangle"
                        onPress={() => navigation.navigate('Avistamentos')}
                    />
                    <MenuItem 
                        title="Meu anúncio" 
                        iconName="trello"
                        onPress={() => navigation.navigate('Anuncio')}
                    />
                    <MenuItem 
                        title="Anunciar adoção" 
                        iconName="gitlab" 
                        onPress={() => handle('Adocao')}
                    />
                    <MenuItem 
                        title="Adote-me" 
                        iconName="github" 
                        onPress={() => navigation.navigate('AdoteMe')}
                    />                                                                                                     
                </Menu>
            </Container>
        </Background>
    )
}