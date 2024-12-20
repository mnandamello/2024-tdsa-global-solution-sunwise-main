import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewProjects from "../pages/ViewProjects";
import ProjectForm from "../pages/ProjectForm";
import ProjectDetails from "../pages/ProjectDetails";
import { ProjectStack } from "../types/StackProject";

const Stack = createNativeStackNavigator<ProjectStack>();

const NavProject = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="ViewProjects" component={ViewProjects} />
      <Stack.Screen name="ProjectForm" component={ProjectForm} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
    </Stack.Navigator>
  );
};

export default NavProject;