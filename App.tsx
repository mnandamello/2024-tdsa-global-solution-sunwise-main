import { NavigationContainer } from "@react-navigation/native";
import MenuNavigation from "./src/components/MenuNavigation";
import NavAuth from "./src/navegation/NavAuth";
import { AuthProvider } from "./src/context/AuthContext";
import Index from "./src/pages/Index";
import { ClientProvider } from "./src/context/ClientContext";
import { ProjectProvider } from "./src/context/ProjectContext";

export default function App(): React.JSX.Element {
  return (

    <NavigationContainer>
      <AuthProvider>
        <ProjectProvider>
          <ClientProvider>
            <Index/>
          </ClientProvider>
        </ProjectProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}