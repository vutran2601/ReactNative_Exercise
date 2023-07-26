import React, { FC } from "react"
import { Screen } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"


export const DemoDebugScreen: FC<DemoTabScreenProps<"Account">> = function DemoDebugScreen(
  _props,
) {
    return (
        <Screen preset="scroll" safeAreaEdges={["top"]}>
            
        </Screen>
    )
}
