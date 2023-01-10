import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import Planetsapi from "../api/Planetsapi";
import IssLocation from "../api/Isslocation";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),

      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: [
        {
          display: "flex",
        },
        null,
      ],
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Restaurant"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Map"
          component={Planetsapi}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={IssLocation}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs;
