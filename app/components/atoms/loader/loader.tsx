import React from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import RootSiblings from "react-native-root-siblings"
import { color, flexStyles } from "../../../theme"

let spinner

export function showLoader() {
  if (spinner === undefined) {
    spinner = new RootSiblings(
      (
        <View style={[StyleSheet.absoluteFill, flexStyles.columnCenter]}>
          <ActivityIndicator size="large" color={color.primary} />
        </View>
      ),
    )
  }
}

export function hideLoader() {
  if (spinner !== undefined) {
    spinner.destroy()
    spinner = undefined
    return true
  }
  return false
}

export function isShowing() {
  if (spinner !== undefined) {
    return true
  }
  return false
}
