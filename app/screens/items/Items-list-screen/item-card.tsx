import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { ItemsType } from "../../../services/items-services/items-services-types"
import { color, flexStyles, spacing } from "../../../theme"
import { Text } from "../../../components"
import { StackNavigationProp } from "@react-navigation/stack"
import { ItemStackParamList } from "../../../navigators/app-stack/item-stack-navigator"

interface ItemCardProps {
  item: ItemsType
}
export const ItemCard = (props: ItemCardProps) => {
  const navigation = useNavigation<StackNavigationProp<ItemStackParamList>>()
  const { item } = props

  const onItemPress = () => {
    navigation.navigate("ItemDetails", { item })
  }

  if (!item?.name) {
    return null
  }
  return (
    <TouchableOpacity onPress={onItemPress} style={styles.container}>
      <Text text={item?.name} />
      <Text text={item?.brand} />
      <Text text={`Sku ${item?.pharmacySKU}`} />
      <Text text={`Size ${item?.size}`} />
      <Text text={`UPC ${item?.UPC}`} />
    </TouchableOpacity>
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
