import { StyleSheet, View } from "react-native"
import React from "react"
import { Button } from "../../components"
import { useDispatch } from "react-redux"
import { logoutUser } from "../../redux/actions/user-action"
import { flexStyles } from "../../theme"

export const SettingsScreen = () => {
  const dispatch = useDispatch()

  const onLogoutPress = () => {
    dispatch(logoutUser())
  }
  return (
    <View style={styles.container}>
      <Button text="Logout" onPress={onLogoutPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...flexStyles.columnCenter,
  },
})
