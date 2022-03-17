/* eslint-disable react-native/sort-styles */
import { I18nManager, StyleSheet } from "react-native"
import { color } from "./color"

export const textAlign = () => (I18nManager.isRTL ? "right" : "left")

export const flexStyles = StyleSheet.create({
  textAlignLeft: {
    textAlign: "left",
  },
  textAlignRight: {
    textAlign: "right",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  columnCenter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  columnStart: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  columnEndAlignCenter: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  columnCenterAlignStart: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  rowStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rowStartAlignStrech: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  rowStartAlignEnd: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  rowAlignEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rowAlignTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  alignEvenlyInRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  rowAlignBetweenBaseline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  rowAlignBetweenStretch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  rowAlignEndBaseline: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  rowStartAlignStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  shadow: {
    backgroundColor: color.palette.white,
    shadowColor: color.palette.cardShadow,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 4,
  },
})
