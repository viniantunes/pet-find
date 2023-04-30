import React from "react";
import { View, Text } from "react-native";

import { Background, Container, Logo, AreaInput, Input } from './styles';

export default function SignIn(){
    return (
        <Background>
            <Container>
                <Logo source={require('../../assets/logo.png')} />
                <AreaInput>
                    <Input placeholder="Seu email"/>
                </AreaInput>
            </Container>
        </Background>
    )
}