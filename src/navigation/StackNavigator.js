import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';

import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard'
import Prediction from '../screens/Prediction';

const Stack = createStackNavigator();

const StackNavigator=()=>{
    return(
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Prediction" component={Prediction} />
       <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        
      </Stack.Navigator>
    )
}
export default StackNavigator