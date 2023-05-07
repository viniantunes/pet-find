import React from "react";

import { Container, AreaFoto, TextoPreto, Foto, AreaTexto } from "./styles";

export default function ListItem(){
    return(
        <Container>
            <AreaFoto>
                {/* {foto && <Foto source={{ uri: foto }} />} */}
            </AreaFoto>
            <AreaTexto>
                <TextoPreto> Teste </TextoPreto>
                <TextoPreto> Teste </TextoPreto>
            </AreaTexto>
        </Container>
    )
}