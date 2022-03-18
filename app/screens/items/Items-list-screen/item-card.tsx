import React from "react"
import { StyleSheet, View } from "react-native"
import { ItemsType } from "../../../services/items-services/items-services-types"
import { color, flexStyles, spacing } from "../../../theme"
import { Text } from "../../../components"

interface ItemCardProps {
  item: ItemsType
}
export const ItemCard = (props: ItemCardProps) => {
  const { item } = props

  if (!item?.name) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text text={item?.name} />
      <Text text={item?.brand} />
      <Text text={`Sku ${item?.pharmacySKU}`} />
      <Text text={`Size ${item?.size}`} />
      <Text text={`UPC ${item?.UPC}`} />
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
