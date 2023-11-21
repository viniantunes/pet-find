import styled from "styled-components/native";

export const Background = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #f6f6f6;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    padding-top: 40px;
    justify-content: flex-end;
`;

export const AreaFoto = styled.View`
   max-height : 300px;
`;

export const Foto = styled.Image`
    margin-bottom: 25px;
    width: 300px;
    height: 300px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 15px;
`;

export const OrangeButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    background-color: #f06141;
    margin: 10px;
    align-items: center;
    justify-content: center;
`;

export const WhiteText = styled.Text`
    font-size: 20px;
    color: #fff;
`;