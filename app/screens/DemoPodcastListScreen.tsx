import React, { FC, useState } from "react"
import { Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { View, Image, StyleSheet } from "react-native"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-svg';

export const DemoPodcastListScreen: FC<DemoTabScreenProps<"Tools">> = function DemoDebugScreen(
  _props,
) {
  const [scannedData, setScannedData] = useState(null)

  const handleQRCodeScanned = ({ data }) => {
    setScannedData(data)
  }
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]}>
      {/* <View style={styles.container}>
        {scannedData ? (
          <View style={styles.qrCodeContainer}>
            <Text style={styles.qrCodeText}>Scanned QR Code:</Text>
            <QRCodeScanner value={scannedData} size={200} color="black" backgroundColor="white" />
          </View>
        ) : (
          <RNCamera
            style={styles.camera}
            onBarCodeRead={handleQRCodeScanned}
            captureAudio={false}
          />
        )}
      </View> */}
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  qrCodeContainer: {
    alignItems: "center",
  },
  qrCodeText: {
    fontSize: 18,
    marginBottom: 10,
  },
})
