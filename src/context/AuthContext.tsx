import React, {useState, createContext, PropsWithChildren} from "react";
import { Alert } from "react-native";


type Usuario = {
    id?: number; //ele é opcional
    nomeEmpresa?:string;
    email:string;
    senha:string;
}

type AuthContextProps = {
    signIn: (usuario: Usuario) => void;
    register: (usuario: Usuario) => void;  
    signOut: () => void;
    user?: Usuario
  };

  const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

  const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const [user, setUser] = useState<Usuario>();
  
    const signIn = async (usuario: Usuario) => {
        try {
          const response = await fetch(`http://localhost:8080/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                usuario
            ),
          });
    
          if (response.ok) {
            setUser(await response.json());
            Alert.alert('Sucesso', 'Login realizado com sucesso!');
            console.log(response)
          } else {
            const errorData = await response.json();
            Alert.alert('Erro', errorData.message || 'Credenciais inválidas');
          }
        } catch (error) {
          Alert.alert('Erro', 'Não foi possível conectar ao servidor');
        }
      };
  
  
      const register = async (usuario: Usuario) => {
        try {
          const response = await fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                usuario
            ),
          });
    
          if (response.ok) {
            setUser(await response.json());
            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
            console.log(response)
          } else {
            const errorData = await response.json();
            Alert.alert('Erro', errorData.message || 'Ocorreu um erro ao cadastrar o usuário');
          }
        } catch (error) {
          Alert.alert('Erro', 'Não foi possível conectar ao servidor');
        }
      };
  
  
    const signOut = () => {
        setUser(undefined);
    };
  

  
    return (
      <AuthContext.Provider value={{ signIn, register, signOut, user }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export { AuthContext, AuthProvider };
