import React from "react";

import { Container, AreaFoto, TextoPreto, Foto, AreaTexto, TextoTitulo } from "./styles";

export default function ListItem({ data }){
    var foto = '../../assets/no-image.png';

    return(
        <Container>
            <AreaFoto>
                {data.foto ? <Foto source={{ uri: data.foto}} /> : <Foto source={require(foto)} />}
            </AreaFoto>
            {data.isAdocao ? 
            <AreaTexto>
                <TextoTitulo>Adote-me</TextoTitulo>
                <TextoPreto> { data.nome } </TextoPreto>
                <TextoPreto> { data.descricao } </TextoPreto>
                <TextoPreto> { data.contato } </TextoPreto>
            </AreaTexto> :
            <AreaTexto>
                <TextoTitulo> { data.isPerdido ? 'Perdido' : 'Avistado' } </TextoTitulo>
                <TextoPreto> { data.nome } </TextoPreto>
                <TextoPreto> { data.descricao } </TextoPreto>
                <TextoPreto> { data.vistoUltimo } </TextoPreto>
                <TextoPreto> { data.contato } </TextoPreto>
            </AreaTexto> }
        </Container>
    )
}