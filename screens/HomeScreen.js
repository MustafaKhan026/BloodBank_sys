import * as React from 'react';
import { Button, View,Text, ScrollView,StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from './SettingsScreen';
import HouseScreen from './HouseScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';
import AboutUsScreen from './AboutUsScreen';
import LoginPage from '../login';





export default function HomeScreen({ navigation }) {
    return (
      
      <ScrollView contentContainerStyle={{ flex: 1,  
      flexDirection: 'column', justifyContent: 'space-between' }}>
         
        {/*footer */}
         
        
          
      {/*footer end */}
      
      
      </ScrollView>
      
      
    );
  }
  const styles = StyleSheet.create({
    
    
    
  })