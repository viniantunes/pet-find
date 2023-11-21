import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [listaAnimais, setListaAnimais] = useState([]);
    const [listaAdocao, setListaAdocao] = useState([]);
    const [isPerdido, setPerdido] = useState(false);
    const [isAdocao, setAdocao] = useState(false);
    const [anuncio, setAnuncio] = useState(null);
    const [id, setId] = useState(0);

    function signIn(usuario, pass){
        pass == 'teste' ? setUser({ nome: usuario }) : alert('Dados incorretos!');
    };

    function signOut(){
        setUser(null);
    }
    
    return(
        <AuthContext.Provider value={{ 
            signed: !!user, 
            user,
            id,
            setId,
            anuncio,
            setAnuncio, 
            signIn, 
            signOut, 
            listaAnimais,
            setListaAnimais,
            isPerdido,
            setPerdido,
            listaAdocao,
            setListaAdocao,
            isAdocao,
            setAdocao 
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;