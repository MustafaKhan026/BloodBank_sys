import { NavigationContainer,   createNavigationContainerRef,
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from './login';
import House from './screens/HouseScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import SettingsScreen from './screens/SettingsScreen'
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import BottomTabNavigator from './components/BottomtabNavigator';


const Tab = createBottomTabNavigator();
const navigationRef = createNavigationContainerRef();

export default function LoginSignupPage() {
  const [routeName,setRouteName] = useState("")
  // const navigation = useNavigation()
  return (
    < >
      {/* <LoginScreen /> */}
      {/* <HomeScreen /> */}
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          setRouteName(navigationRef.getCurrentRoute().name);
        }}
        onStateChange={async () => {
          const previousRouteName = routeName;
          const currentRouteName = navigationRef.getCurrentRoute().name;
          // console.log('route', currentRouteName);
          setRouteName(currentRouteName);
        }}
      >
        <Tab.Navigator
             tabBar={props => (
              <BottomTabNavigator {...props} routeName={routeName} />
            )}
            screenOptions={{
              headerShown: false,
              tabBarHideOnKeyboard: true,
            }}
            initialRouteName='Entry'
          >
            <Tab.Screen name="Entry" component={LoginScreen}/>
            <Tab.Screen name="Login" component={LoginPage} />
            <Tab.Screen name="House" component={House} />
            <Tab.Screen name="AboutUs" component={AboutUsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="guide" component={PrivacyPolicyScreen} />
          
          </Tab.Navigator>
          </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#da3e56',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color:'#fff',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '65%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:15,
  },
});
