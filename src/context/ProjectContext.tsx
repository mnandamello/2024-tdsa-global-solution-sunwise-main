// src/Context/CampContext.js
import React, { useState, createContext, PropsWithChildren, useContext } from "react";
import { AuthContext } from './AuthContext'; 
import {Client} from '../types/Clients'
import { Project } from "../types/Projects";

type ProjectContextProps = {
    listProjects: () => void; 
    projects: Project[];
};

const ProjectContext = createContext<ProjectContextProps>({} as ProjectContextProps);

const ProjectProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const { user } = useContext(AuthContext); 
  const [projects, setProjects] = useState<Project[]>([]);

  const  listProjects = async () => {
    try {
      const response = await fetch(`http://localhost:8080/projects/usuario/${user?.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const result = await response.json();
        setProjects(result); 
      } else {
        console.error('Erro ao buscar projetos');
      }
    } catch (error) {
      console.error('Erro de rede', error);
    }
  };

  return (
    <ProjectContext.Provider value={{ listProjects, projects}}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider};