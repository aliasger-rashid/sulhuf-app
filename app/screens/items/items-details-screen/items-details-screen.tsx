import React from "react"
import { StyleSheet, View } from "react-native"
import * as Yup from "yup"
import { Formik } from "formik"
import { useDispatch } from "react-redux"
import { color, spacing } from "../../../theme"
import { Button, TextField } from "../../../components"
import { createItem } from "../../../redux/actions/items-action"

export const ItemsDetailsScreen = () => {
  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    brand: Yup.string().required("Brand is required"),
    pharmacySKU: Yup.string().required("Pharmacy SKU is required"),
    pharmacyCompany: Yup.string().required("Pharmacy Company is required"),
    size: Yup.string().required("Size is required"),
    UPC: Yup.string().required("UP is required"),
  })

  const onSubmit = (values) => {
    const item = {
      name: values?.name,
      brand: values?.brand,
      pharmacySKU: values?.pharmacySKU,
      logo: values?.logo,
      pharmacyCompany: values?.pharmacyCompany,
      size: values?.size,
      UPC: values?.UPC,
    }
    dispatch(createItem(item))
  }
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          brand: "",
          pharmacySKU: "",
          logo: "",
          pharmacyCompany: "5f0110496af51e2e4cc5a86b", // TODO: Need to figure out from where to get company id
          size: "",
          UPC: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, values, touched, errors }) => (
          <View>
            <TextField
              label="Name"
              placeholder="Enter Name"
              value={values.name}
              onChangeText={handleChange("name")}
              {...{ touched, errors, fieldName: "name" }}
            />
            <TextField
              label="Brand"
              placeholder="Enter Brand name"
              value={values.brand}
              onChangeText={handleChange("brand")}
              {...{ touched, errors, fieldName: "brand" }}
            />
            <TextField
              label="Pharma SKU"
              placeholder="Enter Pharma SKU"
              value={values.pharmacySKU}
              onChangeText={handleChange("pharmacySKU")}
              {...{ touched, errors, fieldName: "pharmacySKU" }}
            />
            <TextField
              label="Pharma Company"
              placeholder="Enter Company Name"
              value={values.pharmacyCompany}
              onChangeText={handleChange("pharmacyCompany")}
              {...{ touched, errors, fieldName: "pharmacyCompany" }}
            />
            <TextField
              label="Size"
              placeholder="Enter Size"
              value={values.size}
              onChangeText={handleChange("size")}
              {...{ touched, errors, fieldName: "size" }}
            />
            <TextField
              label="UPC"
              placeholder="Enter UPC"
              value={values.UPC}
              onChangeText={handleChange("UPC")}
              {...{ touched, errors, fieldName: "UPC" }}
            />
            <Button text="Save" onPress={() => handleSubmit()} style={styles.buttonStyle} />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: spacing[2],
  },
  container: {
    backgroundColor: color.background,
    flex: 1,
    padding: spacing[2],
  },
})
