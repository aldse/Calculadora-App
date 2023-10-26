import { StatusBar } from 'expo-status-bar';
import { useState} from 'react'
import { UtilsContext } from './context';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Calculadora from './Calc';
import Historico from './Historico';

export default function App() {
  const [utils, setUtils] = useState({})
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
      <Stack.Navigator>
        <Stack.Screen name="Calculadora" component={Calculadora}/>
        <Stack.Screen name="Historico" component={Historico}/>
      </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
