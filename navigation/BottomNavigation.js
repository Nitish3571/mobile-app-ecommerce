import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Shop from '../screen/Shop';
import Support from '../screen/Support';
import Profile from '../screen/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
    const navigation = useNavigation();
  return (
    <Tab.Navigator 
    tabBarOptions={{
        activeTintColor: 'blue', 
        inactiveTintColor: 'gray', 
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        // options={{}}
        options={{
            headerShown:false,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        //   headerLeft: () => (
        //     <TouchableHighlight style={{marginLeft:10}} onPress={()=>navigation.navigate("Home")}>
        //        <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
        //     </TouchableHighlight>
        //   ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
