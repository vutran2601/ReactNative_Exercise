import React, { FC } from "react"
import { Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { View, Image } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const DemoPodcastListScreen: FC<DemoTabScreenProps<"Tools">> = function DemoDebugScreen(
  _props,
) {
    return (
        <Screen preset="scroll" safeAreaEdges={["top"]}>
            
        </Screen>
    )
}
