import React from "react";

import { Container, AreaFoto, TextoPreto, Foto, AreaTexto } from "./styles";

export default function ListItem({ data }){
    var foto = '../../assets/no-image.png';

    return(
        <Container>
            <AreaFoto>
                {data.foto ? <Foto source={{ uri: data.foto}} /> : <Foto source={require(foto)} />}
            </AreaFoto>
            <AreaTexto>
                <TextoPreto> { data.nome } </TextoPreto>
                <TextoPreto> { data.descricao } </TextoPreto>
                <TextoPreto> { data.vistoUltimo } </TextoPreto>
                <TextoPreto> { data.contato } </TextoPreto>
            </AreaTexto>
        </Container>
    )
}