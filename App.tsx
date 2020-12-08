import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; const Stack = createStackNavigator();
import { useGlobal } from 'reactn';

// Components
import NewMessage from './src/components/buttons/NewMessage';

// Screens
import MessagesListScreen from './src/screens/MessagesListScreen';
import MessageScreen from './src/screens/MessageScreen';

export default function App() {
  const [ activeContact ] = useGlobal<any>('activeContact');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Messages">
        <Stack.Screen name="MessagesListScreen" component={MessagesListScreen} options={{ 
          title: "Messages",
          headerRight: props => <NewMessage {...props} />
        }}/>
        <Stack.Screen name="Messages" component={MessageScreen} options={{
          title: 'activeContact.name PLACEHOLDER',
          headerRight: props => (<NewMessage {...props} />),
        }}/>
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
