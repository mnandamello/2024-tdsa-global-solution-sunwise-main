import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewClients from "../pages/ViewClients";
import ClientForm from "../pages/ClientForm";
import { ClientStack } from "../types/StackClient";

const Stack = createNativeStackNavigator<ClientStack>();

const NavClient = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="ViewClients" component={ViewClients} />
      <Stack.Screen name="ClientForm" component={ClientForm} />
    </Stack.Navigator>
  );
};

export default NavClient;