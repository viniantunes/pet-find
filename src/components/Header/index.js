import React, { useContext } from "react";
import { Container, Title, ButtonLogOut } from './styles';
import Icon from 'react-native-vector-icons/Feather'

import { AuthContext } from '../../contexts/auth';

export default function Header({ title }){
    const { signOut, user } = useContext(AuthContext);

    return(
        <Container>
            { title ? (
                <Title>
                    {title}
                </Title>
            ) : (
                <Title>Bem vindo, {user.nome}</Title>
            )}
            <ButtonLogOut onPress={() => signOut()}>
                <Icon name="log-out" size={35} color='#121212' />
            </ButtonLogOut>
        </Container>
    )
}