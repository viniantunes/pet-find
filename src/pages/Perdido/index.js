import React, { useState, useContext } from "react";
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
import { TextInputMask } from 'react-native-masked-text'

export default function Perdido(){
    const [foto, setFoto] = useState(null);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [vistoUltimo, setVistoUltimo] = useState('');
    const [contato, setContato] = useState('');
    const { setAnimaisPerdidos } = useContext(AuthContext);

    function handleCadastrar(){
        setAnimaisPerdidos([{ nome: nome, descricao: descricao, vistoUltimo: vistoUltimo, contato: contato, foto: foto}]);
        alert('CADASTRADO!');
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

    return(
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled >
                <AreaFoto>
                    {foto && <Foto source={{ uri: foto }} style={{ width: 300, height: 300 }} />}
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
                <OrangeButton activeOpacity={0.8} onPress={handleCadastrar}>
                    <WhiteText>Cadastrar</WhiteText>
                </OrangeButton>
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