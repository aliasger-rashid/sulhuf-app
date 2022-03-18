import * as React from "react"
import { NavigatorScreenParams } from "@react-navigation/native"
import { OrderListScreen, SettingsScreen } from "../../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"

import { color } from "../../theme"
import { ItemStackNavigator } from "./item-stack-navigator"

export type HomeNavigatorParamList = {
  HomeScreen: undefined
}

export type AppStackNavigatorParamList = {
  ItemRequest: NavigatorScreenParams<HomeNavigatorParamList>
  Orders: undefined
  Settings: undefined
}
const Tab = createBottomTabNavigator<AppStackNavigatorParamList>()

export const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="ItemRequest"
      screenOptions={{
        tabBarActiveTintColor: color.primaryDarker,
        tabBarStyle: {
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name="ItemRequest"
        component={ItemStackNavigator}
        options={() => ({
          tabBarLabel: "Item Request",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={30}
              color={focused ? color.primaryDarker : color.primary}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Orders"
        component={OrderListScreen}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="suitcase"
              size={30}
              color={focused ? color.primaryDarker : color.primary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings-sharp"
              size={30}
              color={focused ? color.primaryDarker : color.primary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
