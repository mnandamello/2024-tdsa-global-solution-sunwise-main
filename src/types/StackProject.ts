import { NavigationProp } from "@react-navigation/native";

type ProjectStack = {
  ViewProjects: undefined;
  ProjectForm: undefined;
  ProjectDetails: {projectId: number};
};

type ProjectNavigation = NavigationProp<ProjectStack>;

export { ProjectStack, ProjectNavigation };