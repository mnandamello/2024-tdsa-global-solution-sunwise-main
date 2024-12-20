import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { AuthStack } from "../types/StackAuth";

const Stack = createNativeStackNavigator<AuthStack>();

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Auth;