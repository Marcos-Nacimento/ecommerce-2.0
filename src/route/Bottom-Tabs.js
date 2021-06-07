import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
const { Navigator, Screen } = createBottomTabNavigator();

import routeStack from './root';
import CartScreen from '../screens/cart';

const BottomTabs = ({ cart }) => {

    const counterItem = () => {
        let items = Object.values(cart);
        let counter = 0;

        for(let i = 0 ; i < items.length; i++) {
            counter = counter += items[i].quantity;
        };

        return counter;
    };

    return(
        <Navigator
            tabBarOptions={{
                style: {
                    height: hP('10%'),
                    backgroundColor: '#483d8b',
                    elevation: 0,
                    borderTopLeftRadius: hP('2%'),
                    borderTopRightRadius: hP('2%'),
                },
                activeTintColor: '#FFFFFF',
                labelStyle: {
                    paddingBottom: hP('2%'),
                    fontFamily: 'Roboto_400Regular',
                }
            }}
        >
            <Screen 
                name='root'
                component={routeStack}
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign 
                        name='home'
                        color={color}
                        size={size}
                    />,
                    tabBarLabel: 'Início'
                }}
            />
            <Screen 
                name='cart'
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons 
                        name='cart-outline'
                        color={color}
                        size={size}
                    />,
                    tabBarLabel: 'Carrinho',
                    tabBarBadge: counterItem(),
                    tabBarBadgeStyle: {
                        backgroundColor: '#dc143c'
                    }
                }}
            />
        </Navigator>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(BottomTabs);