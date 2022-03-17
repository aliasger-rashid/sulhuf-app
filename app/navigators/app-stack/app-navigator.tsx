import * as React from "react"
import { NavigatorScreenParams } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DemoScreen } from "../../screens"

export type HomeNavigatorParamList = {
  HomeScreen: undefined
}

export type AppStackNavigatorParamList = {
  Home: NavigatorScreenParams<HomeNavigatorParamList>
}

const Stack = createNativeStackNavigator<AppStackNavigatorParamList>()

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DemoScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
