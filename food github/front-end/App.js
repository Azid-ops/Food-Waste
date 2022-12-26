import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Importing Packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Creation Navigation Object
const Stack = createNativeStackNavigator();

import Splash from './SplashScreen/splash.js';
import SignIn from './Signin/components/signin';
import Signup from './Signup/Components/signup';
import Dashboard from './Restaurant/dashboard.js';
import Add from './Add/add.js';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Splash} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Restaurant Dashboard" component={Dashboard} />
        <Stack.Screen name="Add More Food" component={Add} />
      </Stack.Navigator>
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
