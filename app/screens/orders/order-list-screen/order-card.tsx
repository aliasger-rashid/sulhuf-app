import React from "react"
import { StyleSheet, View } from "react-native"

import { Text } from "../../../components"
import { color, flexStyles, spacing } from "../../../theme"

interface OrderCardProps {
  item: any // TODO: Type of order object needs to be created
}

export const OrderCard = (props: OrderCardProps) => {
  const { item } = props

  return (
    <View style={styles.container}>
      <Text text={`Id: ${item?.id}`} />
      <Text text={`Status: ${item?.status}`} />
      <Text text={`Price: ${item?.totalAmount} ${item?.currency}`} />
      <Text text={`Total Items : ${item?.itemCount}`} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    padding: spacing[2],
    ...flexStyles.shadow,
    borderRadius: 8,
    marginVertical: spacing[1],
  },
})
