import React, { useState, createContext, PropsWithChildren, useContext } from "react";
import { AuthContext } from './AuthContext'; 
import {Client} from '../types/Clients'
import { Alert } from "react-native";

type ClientContextProps = {
  listClients: () => void; 
  deleteClient: (clientId: number) => void; // Ajustado para aceitar o clientId
  clients: Client[];
};

const ClientContext = createContext<ClientContextProps>({} as ClientContextProps);

const ClientProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const { user } = useContext(AuthContext); 
  const [clients, setClients] = useState<Client[]>([]);

  const  listClients = async () => {
    try {
      const response = await fetch(`http://localhost:8080/client/usuario/${user?.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const result = await response.json();
        setClients(result); 
      } else {
        console.error('Erro ao buscar clientes');
      }
    } catch (error) {
      console.error('Erro de rede', error);
    }
  };


  const deleteClient = async (clientId: number) => {
    try {
      const response = await fetch(`http://localhost:8080/client/${clientId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        setClients((prevClients) => prevClients.filter((client) => client.id !== clientId));
      } else {
        Alert.alert('Não é possivel apagar clientes vinculados a projetos!!');
        console.error('Erro ao deletar cliente');
      }
    } catch (error) {
      console.error('Erro de rede', error);
    }
  };
  

  return (
    <ClientContext.Provider value={{ listClients, clients, deleteClient}}>
      {children}
    </ClientContext.Provider>
  );
};

export { ClientContext, ClientProvider};