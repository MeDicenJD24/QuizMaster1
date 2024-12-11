import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'; // Importamos la pantalla de inicio de sesión
import RegisterScreen from './screens/RegisterScreen'; // Importamos la pantalla de registro
import HomeScreen from './screens/HomeScreen'; // Importa la pantalla principal

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Ocultamos el header para esta pantalla
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} // Ocultamos el header para esta pantalla
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Ocultamos el header para la pantalla Home
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

