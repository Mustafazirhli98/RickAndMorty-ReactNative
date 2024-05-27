import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';
import { Provider } from 'react-redux';
import store from './store/store';
import * as Notification from "expo-notifications"
import { useEffect } from 'react';



export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </Provider>
    </>
  );
}


//TODOS
// input search fix
// General UI Fix 