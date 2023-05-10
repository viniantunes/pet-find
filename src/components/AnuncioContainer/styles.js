import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const AreaFoto = styled.View`
    max-height : 300px;
`;

export const Foto = styled.Image`
    margin-bottom: 25px;
    width: 300px;
    height: 300px;
`;

export const AreaText = styled.View`
    flex-direction: column;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;

export const SmallButton = styled.TouchableOpacity`
    border-radius: 8px;
    margin: 10px;
    align-items: center;
    justify-content: center;
`;

export const WhiteText = styled.Text`
    font-size: 20px;
    color: #fff;
`;

export const BlackText = styled.Text`
    font-size: 20px;
    color: #000;
    margin-bottom: 10px;
`

export const AreaInfo = styled.View`
    width: 100%;
    padding-right: 10px;
    flex-direction: row;
    justify-content: space-around;
    margin: 30px;
`