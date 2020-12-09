import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createStackNavigator } from '@react-navigation/stack'; const Stack = createStackNavigator();
import { setGlobal } from 'reactn';

// 0071e3

// Components
import NewMessage from './src/components/buttons/NewMessage';

// Screens
import MessagesListScreen from './src/screens/MessagesListScreen';
import MessageScreen from './src/screens/MessageScreen';

export default function App() {
  const scheme = useColorScheme();

  const iOSLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#0071e3",
      subtext: "#999999"
    }
  }

  const iOSDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "#0071e3",
      subtext: "#999999"
    }
  }

  return (
    <>
      <StatusBar barStyle={scheme === "dark" ? 'light-content' : "dark-content"}/>
      <AppearanceProvider>
        <NavigationContainer theme={scheme === "dark" ? iOSDarkTheme : iOSLightTheme}>
          <Stack.Navigator initialRouteName="MessagesListScreen">
            <Stack.Screen name="MessagesListScreen" component={MessagesListScreen} options={{
              title: 'Messages',
              headerRight: props => (<NewMessage {...props} />),
            }}/>
            <Stack.Screen name="Message" component={MessageScreen} options={{ 
              title: "Message",
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </>
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
