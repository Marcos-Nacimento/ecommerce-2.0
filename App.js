import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 
{
  useFonts, 
  Roboto_400Regular,
  Roboto_300Light,
  Roboto_700Bold,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import AppLoading from 'expo-app-loading';
import StatusBar from './src/config/StatusBar';
import RouteBottomTabs from './src/route/Bottom-Tabs';

export default () => {
  const [fontLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  });

  if(!fontLoaded) {
    return <AppLoading />
  };

  return(
    <>
      <StatusBar />
      <NavigationContainer>
        <Provider store={store}>
          <RouteBottomTabs />
        </Provider>
      </NavigationContainer>
    </>
  );
};