import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; const Stack = createStackNavigator();

// Components
import NewMessage from './src/components/buttons/NewMessage';

// Screens
import MessagesListScreen from './src/screens/MessagesListScreen';
import MessageScreen from './src/screens/MessageScreen';

export default function App() {
  return (
    <NavigationContainer>
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
