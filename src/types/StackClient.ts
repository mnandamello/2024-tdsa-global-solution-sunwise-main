import { NavigationProp } from "@react-navigation/native";

type ClientStack = {
  ViewClients: undefined;
  ClientForm: undefined;
};

type ClientNavigation = NavigationProp<ClientStack>;

export { ClientStack, ClientNavigation };