import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
 
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';

import Prediction from "./src/screens/Profile"
import StackNavigator from "./src/navigation/StackNavigator";
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  
   <NavigationContainer>
<StackNavigator/>
   </NavigationContainer>
   
  );
}


export default App;
