import React, { useState } from "react";
import { 
    Background, 
    Container, 
    AreaInput, 
    Input, 
    OrangeButton, 
    WhiteText, 
    Foto, 
    AreaFoto, 
    AreaDateTime,
    DateTimeButton,
    BlackText
 } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function Perdido(){
    const [foto, setFoto] = useState(null);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [vistoUltimo, setVistoUltimo] = useState(new Date());
    const [data, setData] = useState('Selecione o dia');
    const [horario, setHorario] = useState('Selecione o horário');

    function handleCadastrar(){
        alert('cadastrado');
    }

    function onChange(event, selectedDate){
        const currentDate = selectedDate;
        setVistoUltimo(currentDate);
        setData(vistoUltimo.toLocaleDateString());
        setHorario(vistoUltimo.toLocaleTimeString());
      };

    function showMode(currentMode){
        DateTimePickerAndroid.open({
            value: vistoUltimo,
            onChange,
            mode: currentMode,
            is24Hour: true,
      });
    };
    
    function showDatepicker(){
      showMode('date');
    };
    
    function showTimepicker(){
      showMode('time');
    };          

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
                <BlackText>Visto por último:</BlackText>                   
                <AreaDateTime>
                    <DateTimeButton onPress={showDatepicker}>
                        <WhiteText>{data}</WhiteText>
                    </DateTimeButton>
                    <DateTimeButton onPress={showTimepicker} >
                        <WhiteText>{horario}</WhiteText>
                    </DateTimeButton>
                </AreaDateTime>
                <OrangeButton activeOpacity={0.8} onPress={handleCadastrar}>
                    <WhiteText>Cadastrar</WhiteText>
                </OrangeButton>
            </Container>
        </Background>
    )
}