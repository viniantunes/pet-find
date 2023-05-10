import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import { Area, Background, List } from './styles';
import ListItem from "../../components/ListItem";

export default function Avistamentos(){
    const { listaAnimais } = useContext(AuthContext);
    return(
        <Background>
            <Area>
                <List
                    data={listaAnimais}
                    keyExtractor={ item => item.id }
                    renderItem={({item}) => <ListItem data={item}/>}
                    showsVerticalScrollIndicator={false}
                />
            </Area>
        </Background>
    )
}