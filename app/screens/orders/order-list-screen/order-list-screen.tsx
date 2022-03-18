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
  const { orderList, orderCount, isLoadingList } = useAppSelector((state) => state.orders)

  useEffect(() => {
    if (orderList.length === 0) {
      dispatch(getAllOrders())
    }
    dispatch(getOrdersCount("delivered"))
    dispatch(getOrdersCount("cancelled"))
  }, [])

  const handleLoadMore = () => {
    dispatch(getAllOrders(orderList.length + 1))
  }
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
        scrollEnabled={!isLoadingList}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        refreshing={isLoadingList}
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
