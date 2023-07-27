import React, { FC } from "react"
import { Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { View, Image } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

export const DemoCommunityScreen: FC<DemoTabScreenProps<"Shopping">> = function DemoCommunityScreen(
  _props,
) {
  return <Screen preset="scroll" safeAreaEdges={["top"]}></Screen>
}
