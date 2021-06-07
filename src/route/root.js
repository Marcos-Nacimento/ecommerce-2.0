import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Screen, Navigator } = createStackNavigator();

import HomeScreen from '../screens/home';
import ProductScreen from '../screens/product';

export default () => {
    return(
        <Navigator
            headerMode="none"
        >
            <Screen 
                name="home"
                component={HomeScreen}
            />
            <Screen
                name="product"
                component={ProductScreen}
            />
        </Navigator>
    );
};