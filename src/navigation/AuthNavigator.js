import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { createStackNavigator } from '@react-navigation/stack';
const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
    <AuthStack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}/>
  </AuthStack.Navigator>
);
export default AuthNavigator;