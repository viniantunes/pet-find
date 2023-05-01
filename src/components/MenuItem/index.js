import React from "react";

import { Item, Button, Title } from "./styles"; 
import Icon from "react-native-vector-icons/Feather";

export default function MenuItem({iconName, title}){
    return(
        <Item>
            <Button>
                <Icon name={iconName} size={35} color='#121212' />
            </Button>
            <Title>{title}</Title>
        </Item>
    )
}