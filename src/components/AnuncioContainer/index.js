import React, { useContext } from "react";

import { 
    Container, 
    AreaFoto, 
    Foto, 
    AreaInfo, 
    AreaText, 
    BlackText, 
    Button, 
    SmallButton
} from './styles';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { AuthContext } from "../../contexts/auth";


export default function AnuncioContainer(){
    const { listaAnimais, setAnuncio, anuncio } = useContext(AuthContext);
    const navigation = useNavigation();
    const foto = '../../assets/no-image.png';

    function handleExcluir(){
        var index = listaAnimais.filter( item => item.id == anuncio.id).indexOf();
        listaAnimais.splice(index, 1);
        setAnuncio(null);
    }

    return(
        <Container>
            <AreaFoto>
                {anuncio.foto ? <Foto source={{ uri: anuncio.foto}} /> : <Foto source={require(foto)} />}
            </AreaFoto>
            <AreaInfo>
                <AreaText>
                    <BlackText>{ anuncio.nome }</BlackText>
                    <BlackText>{ anuncio.descricao }</BlackText>
                    {anuncio.isAdocao ? null : <BlackText>{ anuncio.vistoUltimo }</BlackText> }
                    <BlackText>{ anuncio.contato }</BlackText>
                </AreaText>
                <SmallButton onPress={() => anuncio.isAdocao ? navigation.navigate('Adocao') : anuncio.isPerdido? navigation.navigate('Perdido') : navigation.navigate('Encontrado')}>
                    <Icon 
                        name='edit' 
                        size={30} 
                        color='#121212' 
                        style={ {marginBottom:20}}
                    />
                    <BlackText>Editar</BlackText>
                </SmallButton>
            </AreaInfo>
            <AreaInfo>
                <Button activeOpacity={0.8} onPress={handleExcluir}>
                    <Icon 
                        name='x' 
                        size={80} 
                        color='#121212' 
                        style={{marginBottom:20}} 
                    />
                    <BlackText>Excluir</BlackText>
                </Button>
                <Button activeOpacity={0.8} onPress={handleExcluir}>
                    <Icon name='check-circle' size={80} color='#121212' style={ {marginBottom:20}} />
                    { anuncio.isAdocao ? <BlackText>Adotado</BlackText> : <BlackText>Encontrado</BlackText> }
                </Button>
            </AreaInfo>
        </Container>
    )
}