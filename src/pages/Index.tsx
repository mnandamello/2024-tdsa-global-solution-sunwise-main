import React, { useContext } from "react";
import NavAuth from "../navegation/NavAuth";
import { AuthContext } from "../context/AuthContext";
import MenuNavigation from "../components/MenuNavigation";

const Index = () => {
    const {user}  = useContext(AuthContext); 

  return user ? <MenuNavigation /> : <NavAuth />;
};

export default Index;