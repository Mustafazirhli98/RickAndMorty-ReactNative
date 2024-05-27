import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';
import { Provider } from 'react-redux';
import store from './store/store';

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
//style changes
//input search fix
// async storage fix
//max 10 character fav
// local notification fix
// General UI Fix 