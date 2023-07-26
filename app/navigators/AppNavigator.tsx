import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { useStores } from "../models"
import { DemoNavigator, DemoTabParamList } from "./DemoNavigator"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { View } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faBars, faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "../components"

export type AppStackParamList = {
  Demo: NavigatorScreenParams<DemoTabParamList>
}

const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

const Stack = createNativeStackNavigator<AppStackParamList>()

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#2B2768",
        paddingTop: 50,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        height: 75,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* Menu icon */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon icon={faBars} color="white" size={25} />
      </View>

      {/* Cart & Language */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <FontAwesomeIcon icon={faCartArrowDown} color="white" size={25} />
        <Icon icon="unitedkingdom" size={25} style={{}} />
      </View>
    </View>
  )
}

const AppStack = observer(function AppStack() {
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="Demo" component={DemoNavigator}/>
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
