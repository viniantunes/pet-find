import React from "react";

import { Item, Button, Title } from "./styles"; 
import Icon from "react-native-vector-icons/Feather";

export default function MenuItem({iconName, title, onPress}){
    return(
        <Item onPress={onPress}>
            <Button>
                <Icon name={iconName} size={35} color='#121212' />
            </Button>
            <Title>{title}</Title>
        </Item>
    )
}