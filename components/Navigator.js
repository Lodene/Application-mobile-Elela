import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, StyleSheet } from 'react-native';


import Home from './Home';
import Search from './Search';
// export { Home };

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100%',
      maxWidth: '100%',
    }
    
  });

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    );
}

export default function Navigator(){
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}