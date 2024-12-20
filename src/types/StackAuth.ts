import { NavigationProp } from "@react-navigation/native";

type AuthStack = {
  Login: undefined;
  Register: undefined;
};

type AuthNavigation = NavigationProp<AuthStack>;

export { AuthStack, AuthNavigation };