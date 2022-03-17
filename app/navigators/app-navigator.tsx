/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React, { useEffect } from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WelcomeScreen, DemoScreen, DemoListScreen, SplashScreen } from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { useAppSelector } from "../hooks"
import { restoreSplash } from "../redux/actions/common-action"
import { useDispatch } from "react-redux"
import { SPLASH_TIMEOUT } from "../utils/constant"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  welcome: undefined
  demo: undefined
  demoList: undefined
  SplashScreen: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  const { loading } = useAppSelector(({ common }) => common)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(restoreSplash())
    }, SPLASH_TIMEOUT)
  }, [])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SplashScreen"
    >
      {loading ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      ) : (
        <>
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="demo" component={DemoScreen} />
          <Stack.Screen name="demoList" component={DemoListScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
