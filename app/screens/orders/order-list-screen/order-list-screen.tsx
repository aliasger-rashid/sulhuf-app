import { FlatList, StyleSheet, View } from "react-native"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getOrdersCount, getAllOrders } from "../../../redux/actions/order-action"
import { useAppSelector } from "../../../hooks"
import { Text } from "../../../components"
import { color, spacing } from "../../../theme"
import { OrderCard } from "./order-card"

export const OrderListScreen = () => {
  const dispatch = useDispatch()
  const { orderList, orderCount } = useAppSelector((state) => state.orders)

  useEffect(() => {
    dispatch(getOrdersCount("delivered"))
    dispatch(getOrdersCount("cancelled"))

    if (orderList.length === 0) {
      dispatch(getAllOrders())
    }
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text text={`Total Delivered Orders : ${orderCount?.delivered}`} />
        <Text text={`Total Cancelled Orders : ${orderCount?.cancelled}`} />
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={orderList}
        renderItem={({ item }) => <OrderCard {...{ item }} />}
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
