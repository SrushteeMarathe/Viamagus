import React from 'react';
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../screens/Home"
import Leagues from '../screens/Leagues';
import Research from '../screens/Research';
import Leaderboard from '../screens/Leaderboard';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/AntDesign';
import homeImage from '../assets/home.jpg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (
   
    <Tab.Navigator
   
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "Home") {
          return <Image source={homeImage} style={{width:24,height:24}}/>;
        } else if (route.name === "Leagues") {
          
          return <Image source={require("../assets/trophy.jpg")} style={{width:24,height:24}}/>;
        } else if (route.name === "Research") {
          return <Image source={require("../assets/research.jpg")} style={{width:24,height:24}}/>;
        } else if (route.name === "Leaderboard") {
          return <Image source={require("../assets/leaderboard.jpg")} style={{width:24,height:24}}/>;
        }
        else if(route.name === "Profile"){
          return <Image source={require("../assets/user.jpg")} style={{width:24,height:24}}/>;
        }
      },
      tabBarStyle: {
        height: 49, // Set your desired height here
        paddingBottom: 5, // Adjust padding as needed
        paddingTop: 7,
        
        position: "absolute",
        backgroundColor: "#FFFFFF", // Set your desired background color here
      },
      tabBarLabelStyle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 10, // Adjust font size as needed
        fontWeight: "500", // Adjust font weight as needed
        color:"#727682"
      },
      tabBarActiveTintColor: "#6231AD", // Change the active tab color here
      tabBarInactiveTintColor: "#B5C0C8", // Change the inactive tab color here
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Leagues" component={Leagues}  />
      <Tab.Screen name="Research" component={Research}  />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="Profile" component={Profile}  />

    </Tab.Navigator>
   
  );
}

export default BottomTabNavigator