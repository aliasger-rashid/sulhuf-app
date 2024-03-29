import React from "react"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { StyleSheet, TouchableOpacity } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import { ItemsDetailsScreen, ItemsListScreen } from "../../screens"
import { spacing } from "../../theme"
import { ItemsType } from "../../services/items-services/items-services-types"

export type ItemStackParamList = {
  ItemList: undefined
  ItemDetails: { item?: ItemsType }
}
export type ItemListScreenScreenProps = NativeStackScreenProps<ItemStackParamList, "ItemList">

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const ItemStack = createNativeStackNavigator<ItemStackParamList>()

export const ItemStackNavigator = () => {
  return (
    <ItemStack.Navigator initialRouteName="ItemList">
      <ItemStack.Screen
        name="ItemList"
        component={ItemsListScreen}
        options={({ navigation }) => ({
          headerTitle: "Item Request",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("ItemDetails")}>
              <AntDesign name="pluscircleo" size={25} style={styles.rightIcon} />
            </TouchableOpacity>
          ),
        })}
      />
      <ItemStack.Screen
        name="ItemDetails"
        component={ItemsDetailsScreen}
        options={{
          title: "Item Details",
          headerBackTitleVisible: false,
        }}
      />
    </ItemStack.Navigator>
  )
}

const styles = StyleSheet.create({
  rightIcon: { marginHorizontal: spacing[4] },
})
