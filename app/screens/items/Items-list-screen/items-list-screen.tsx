import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { StyleSheet, Text, View } from "react-native"

import { getAllItems } from "../../../redux/actions/items-action"
import { useAppSelector } from "../../../hooks"

export const ItemsListScreen = () => {
  const dispatch = useDispatch()
  const { items } = useAppSelector((state) => state.items)

  useEffect(() => {
    if (items?.length === 0) {
      dispatch(getAllItems())
    }
  }, [])

  return (
    <View>
      <Text>ItemsListScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
