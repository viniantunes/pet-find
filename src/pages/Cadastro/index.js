import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from '../../contexts/auth';
import { StyleSheet } from "react-native";
import { 
    Background, 
    Container, 
    AreaInput, 
    Input, 
    OrangeButton, 
    WhiteText, 
    Foto, 
    AreaFoto
 } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from "@react-navigation/native";

export default function Cadastro(){
    const [foto, setFoto] = useState(null);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [vistoUltimo, setVistoUltimo] = useState('');
    const [contato, setContato] = useState('');
    const { isPerdido, listaAnimais, setListaAnimais, anuncio, setAnuncio, id, setId } = useContext(AuthContext);
    const navigation = useNavigation();

    function handleCadastrar(registro){
        setAnuncio(registro);
        setListaAnimais(listaAnimais => [...listaAnimais, registro]);
        setId(id + 1);
        alert('CADASTRADO!');
        navigation.navigate('Home');
    }

    function validate(){
        var registro = { id: id, nome: nome, descricao: descricao, vistoUltimo: vistoUltimo, contato: contato, foto: foto, isPerdido: isPerdido };
        const errors = [];
        if(isPerdido){
            !registro.foto ? errors.push('Escolha uma foto') : null;
            !registro.nome ? errors.push('Informe o nome do animal') : null;
        } else {
            registro.nome ? setNome('Desconhecido') : null;
        }
        
        !registro.descricao ? errors.push('Informe a descrição do animal') : null;
        !registro.vistoUltimo ? errors.push('Informe a data e horário do último contato') : null;
        !registro.contato ? errors.push('Informe um telefone para contato') : null;

        if(errors.length){
            alert(errors[0]);
            return;
        }

        handleCadastrar(registro);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled) {
            setFoto(result.assets[0].uri);
        }
      };


      useEffect(() => {
        if(anuncio){
            setFoto(anuncio.foto);
            setNome(anuncio.nome);
            setDescricao(anuncio.descricao);
            setVistoUltimo(anuncio.vistoUltimo);
            setContato(anuncio.contato);
        }
      }, [])
    return(
        <Background>
            <Container 
                behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
                enabled 
            >
                <AreaFoto>
                    {foto && <Foto source={{ uri: foto }} />}
                </AreaFoto>
                <OrangeButton onPress={pickImage}>
                    <WhiteText>Selecione uma imagem</WhiteText>
                </OrangeButton>
                <AreaInput>
                    <Input 
                        placeholder="Nome" 
                        value={nome} 
                        onChangeText={(text) => setNome(text)}
                    />                                                       
                </AreaInput>
                <AreaInput>
                    <Input 
                        placeholder="Descrição" 
                        value={descricao} 
                        onChangeText={(text) => setDescricao(text)} 
                    />
                </AreaInput>
                <AreaInput>
                    <TextInputMask
                        style={styles.input}
                        type={'datetime'}
                        placeholder="Visto por último"
                        options={{
                            format: 'DD/MM/YYYY HH:mm'
                        }}
                        value={vistoUltimo}
                        onChangeText={(text) => setVistoUltimo(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <TextInputMask
                        style={styles.input}
                        type={'cel-phone'}
                        placeholder="Contato"
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={contato}
                        onChangeText={(text) => setContato(text)}
                    />
                </AreaInput>                                
                <OrangeButton activeOpacity={0.8} onPress={validate}>
                    <WhiteText>Cadastrar</WhiteText>
                </OrangeButton>
                <Container />
            </Container>
        </Background>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        width: '90%',
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: '#121212',
        marginBottom: 15
    }
})