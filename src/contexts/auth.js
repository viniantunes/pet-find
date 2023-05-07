import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const userTeste = { nome: 'Teste' };
    const [animaisPerdidos, setAnimaisPerdidos] = useState([]);
    const [animaisEncontrados, setAnimaisEncontrados] = useState([]);
    const [isPerdido, setPerdido] = useState(false);

    function signIn(email, pass){
        pass == 'teste' ? setUser(userTeste) : alert('Dados incorretos!');
    };

    function signOut(){
        setUser(null);
    }
    
    return(
        <AuthContext.Provider value={{ 
            signed: !!user, 
            user, 
            signIn, 
            signOut, 
            animaisEncontrados, 
            animaisPerdidos, 
            setAnimaisEncontrados, 
            setAnimaisPerdidos,
            isPerdido,
            setPerdido 
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;