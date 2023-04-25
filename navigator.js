import * as React from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyProfileScreen from './screens/MyProfile';
import HomeScreen from './screens/HomeScreen';
import CampSearchScreen from './screens/CampSearchScreen';
import AboutUsScreen  from './screens/AboutUsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import LogoutScreen from './screens/LogoutScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#da3e56',
        },
        headerStyle: {
          backgroundColor: '#da3e56',
        },
        headerTintColor: '#FFFFFF',
       
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} 
        options={{drawerLabelStyle: { color: 'white' },
        }}/>
        <Drawer.Screen name="MyProfile" component={MyProfileScreen} 
        options={{drawerLabelStyle: { color: 'white' },}}/>
        <Drawer.Screen name="Campsearch" component={CampSearchScreen} 
        options={{drawerLabelStyle: { color: 'white' },}}/>
        <Drawer.Screen name="AboutUs" component={AboutUsScreen} 
        options={{drawerLabelStyle: { color: 'white' },}}/>
        <Drawer.Screen name="privacy policy" component={PrivacyPolicyScreen} 
        options={{drawerLabelStyle: { color: 'white' },}}/>
        <Drawer.Screen name="Log out" component={LogoutScreen} 
        options={{drawerLabelStyle: { color: 'white' },}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    
    
  );
}