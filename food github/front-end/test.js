const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
false;
import FrameScreen from "./screens/FrameScreen";
import Checkout from "./screens/Checkout";
import Basket from "./screens/Basket";
import SingleItem from "./screens/SingleItem";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Frame1"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Basket"
              component={Basket}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingleItem"
              component={SingleItem}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <FrameScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
