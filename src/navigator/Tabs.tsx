import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tabs2';


const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={{ 
            tabBarActiveTintColor: '#5856D5',
            tabBarStyle: { 
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.88)', 
                paddingBottom: 10, 
                borderWidth: 0,
                elevation: 0,
                height: 60,

            },
            tabBarLabelStyle: {
                fontSize: 15,
            },
            headerShown: false,
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={ Navigator } 
        options={{
            tabBarLabel: "Pokemons",
            tabBarIcon: ({ color }) => (
                <Icon
                    color={ color }
                    size={ 30 }
                    name={ "list-outline" }
                />
            )
        }}
      
      />
      <Tab.Screen 
        name="Search" 
        component={Tab2Screen}
        options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
                <Icon
                    color={ color }
                    size={ 30 }
                    name={ "search" }
                />
            )
        }}
      />
    </Tab.Navigator>
  );
}