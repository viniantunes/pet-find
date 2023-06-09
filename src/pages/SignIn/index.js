import React, { useState, useContext } from "react";
import { Platform } from "react-native";
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText } from './styles';

import { AuthContext } from "../../contexts/auth";

export default function SignIn(){
    const [usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');
    const { signIn } = useContext(AuthContext);
    
    function handleLogin(){
        signIn(usuario, pass);
    }

    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled >
                <Logo source={require('../../assets/logo.png')} />
                <AreaInput>
                    <Input 
                        placeholder="Seu usuário" 
                        value={usuario} 
                        onChangeText={(text) => setUsuario(text)} 
                    />
                </AreaInput>
                <AreaInput>
                    <Input 
                        placeholder="Sua senha"
                        value={pass} 
                        onChangeText={(text) => setPass(text)} 
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    )
}