import React from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "../../components"
import { color, flexStyles } from "../../theme"

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text text="Welcome to Sulhuf App" style={styles.text} preset="header" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.white,
    flex: 1,
    ...flexStyles.columnCenter,
  },
  text: { color: color.palette.black },
})
