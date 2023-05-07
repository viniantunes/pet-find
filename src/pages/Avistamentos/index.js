import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import { Area, Background, List } from './styles';
import ListItem from "../../components/ListItem";

export default function Avistamentos(){
    const { animaisPerdidos, animaisEncontrados } = useContext(AuthContext);
    return(
        <Background>
            <Area>
                <List
                    data={animaisPerdidos}
                    keyExtractor={ item => item.nome }
                    renderItem={({item}) => <ListItem data={item}/>}
                    showsVerticalScrollIndicator={false}
                />
            </Area>
        </Background>
    )
}