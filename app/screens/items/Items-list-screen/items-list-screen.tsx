import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { FlatList, StyleSheet, View } from "react-native"

import { getAllItems } from "../../../redux/actions/items-action"
import { useAppSelector } from "../../../hooks"
import { color, spacing } from "../../../theme"
import { ItemCard } from "./item-card"

export const ItemsListScreen = () => {
  const dispatch = useDispatch()
  const { items } = useAppSelector((state) => state.items)

  useEffect(() => {
    if (items?.length === 0) {
      dispatch(getAllItems())
    }
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={items}
        renderItem={({ item }) => <ItemCard {...{ item }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    flex: 1,
    padding: spacing[2],
  },
})
