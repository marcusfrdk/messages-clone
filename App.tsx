import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createStackNavigator } from '@react-navigation/stack'; const Stack = createStackNavigator();
import { useGlobal, setGlobal } from 'reactn';

// Components
import NewMessage from './src/components/buttons/NewMessage';

// Screens
import RecentMessagesListScreen from './src/screens/RecentMessagesListScreen';
import MessageScreen from './src/screens/MessageScreen';

// Data
import defaultContacts from './src/data/contacts.json';

export default function App() {
  const scheme = useColorScheme();
  const [ loaded, setLoaded ] = useState(false);
  const [ contacts ] = useGlobal<any>('contacts');

  useEffect(() => {
    if(!contacts){
      setGlobal({
        contacts: defaultContacts
      })
    }

    setLoaded(true)
  }, [])
  
  console.log(contacts)

  const iOSLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#0071e3",
      text: "#000",
      text2: "#999",
      border: "#EAEAEA",
      background: "#f3f3f3",
      card: "#fff"
    }
  }
  
  const iOSDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "#0071e3",
      text: "#FFF",
      text2: "#999",
      border: "#111",
      background: "#222",
      card: "#000"
    }
  }

  if(loaded){
    return (
      <>
        <StatusBar barStyle={scheme === "dark" ? 'light-content' : "dark-content"}/>
        <AppearanceProvider>
          <NavigationContainer theme={scheme === "dark" ? iOSDarkTheme : iOSLightTheme}>
            <Stack.Navigator initialRouteName="RecentMessagesListScreen">
              <Stack.Screen name="RecentMessagesListScreen" component={RecentMessagesListScreen} options={{
                title: 'Messages'
              }}/>
              <Stack.Screen name="Message" component={MessageScreen} options={{ 
                title: "Message",
              }}/>
            </Stack.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      </>
    );
  } else return null;
}
