import React from "react";
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, MaterialIcons} from '@expo/vector-icons';
import Home from '../pages/Home';
import UserAccount from '../pages/UserAccount';
import NavProject from "../navegation/NavProject";
import NavClient from "../navegation/NavClient";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 80,
    backgroundColor: "#ddeee9" 
  }
}

const MenuNavigation = () => {
  return(
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({focused}) => (
          <View style={{ alignItems: "center", justifyContent: "center"}}>
            <Entypo name="home" size={30} color={focused ? "white" : "#90DECD"} />
          </View>
        )
      }}/>


        <Tab.Screen name='NavClient' component={NavClient} options={{
        tabBarIcon: ({focused}) => (
          <View style={{ alignItems: "center", justifyContent: "center"}}>
            <FontAwesome name="user-plus" size={30} color={focused ? "white" : "#FA5281"} />
          </View>
        )
        }}/>

      <Tab.Screen name='NavProject' component={NavProject} options={{
        tabBarIcon: ({focused}) => {
          return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MaterialIcons name="solar-power" size={30} color={focused ? "white" :"#009782"} />
            </View>
          )
        }
      }}/>
      <Tab.Screen name='User' component={UserAccount} options={{
        tabBarIcon: ({focused}) => {
          return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FontAwesome name="user-circle-o" size={30} color={focused ? "white" : "#FDACC8"} />
            </View>
          )
        }
      }}/>
     </Tab.Navigator>
    
  )
} 

export default MenuNavigation;