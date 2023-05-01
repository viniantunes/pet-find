import React, { useContext } from "react";

import { AuthContext } from "../contexts/auth";

import AppRoutes from "./app.routes";
import SignIn from "../pages/SignIn";

function Routes(){
    const { signed } = useContext(AuthContext);

    return(
        signed ? <AppRoutes /> : <SignIn />
    )
}

export default Routes;