import React, { useContext } from "react";
import { AuthContext } from '../../contexts/auth';
import { Background, BlackText } from './styles';
import AnuncioContainer from "../../components/AnuncioContainer";

export default function Anuncio(){
    const { anuncio } = useContext(AuthContext);

    return(
        <Background>
            { anuncio ? <AnuncioContainer /> : <BlackText>Você ainda não criou um anúncio.</BlackText> }
        </Background>
    )
}