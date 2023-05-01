import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    width: 100%;
    max-height: 70px;
`;

export const Title = styled.Text`
    font-size: 22px;
    margin-left: 8px;
`;

export const ButtonLogOut = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;