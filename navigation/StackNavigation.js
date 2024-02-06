import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screen/Home';
import Login from '../screen/Login';
import Register from '../screen/Register';
import OnboardingScreen from '../screen/OnboardingScreen';
import BottomNavigation from '../navigation/BottomNavigation';
import ProductInfo from '../screen/ProductInfo';
import Checkout from '../screen/Checkout';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
        options={{
            headerShown:false,
        }}
        name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen
        options={{
            headerShown:false,
        }}
        name="BottomNavigation" component={BottomNavigation} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="shop" component={ProductInfo} />
        <Stack.Screen name="checkout" component={Checkout} />
      </Stack.Navigator>
  )
}

export default StackNavigation