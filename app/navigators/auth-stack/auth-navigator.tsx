import * as React from "react"
import { NavigatorScreenParams } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../../screens"

export type AuthTabNavigatorParamList = {
  Login: undefined
}

export type AuthStackNavigatorParamList = {
  Login: NavigatorScreenParams<AuthTabNavigatorParamList>
}

const AuthenticationStack = createNativeStackNavigator<AuthStackNavigatorParamList>()

export const AuthStack = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="Login" component={LoginScreen} />
    </AuthenticationStack.Navigator>
  )
}
