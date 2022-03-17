import React from "react"
import { StyleSheet, View, KeyboardAvoidingView, Platform, ImageBackground } from "react-native"
import { BlurView } from "expo-blur"
import { Formik } from "formik"
import * as Yup from "yup"

import { Button, Text, TextField } from "../../components"
import { spacing, color } from "../../theme"
import { useDispatch } from "react-redux"
import { loginUser } from "../../redux/actions/user-action"
const BackgroundImage = require("../../../assets/images/login-background.png")

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Please enter your password"),
  })

  const onSubmit = (values) => {
    dispatch(loginUser(values.username, values.password))
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleSubmit, values, touched, errors }) => (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.innerContainer}
            >
              <BlurView intensity={75} tint="light" style={styles.blurContainer}>
                <View style={styles.formContainer}>
                  <Text
                    text="Login"
                    preset="header"
                    color={color.palette.black}
                    style={styles.headerStyle}
                  />
                  <TextField
                    label="Username"
                    placeholder="Username"
                    value={values.username}
                    onChangeText={handleChange("username")}
                    autoCapitalize="none"
                    fieldName="username"
                    {...{ touched, errors }}
                  />
                  <TextField
                    label="Password"
                    secureTextEntry
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    textContentType="password"
                    autoCapitalize="none"
                    fieldName="password"
                    {...{ touched, errors }}
                  />

                  <Button
                    text="Login"
                    onPress={() => handleSubmit()}
                    preset={"primary"}
                    style={styles.buttonStyle}
                  />
                </View>
              </BlurView>
            </KeyboardAvoidingView>
          )}
        </Formik>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  backgroundImage: { height: "100%", width: "100%" },
  blurContainer: {
    borderRadius: 10,
    marginHorizontal: spacing[3],
    overflow: "hidden",
    padding: spacing[4],
  },

  buttonStyle: {
    marginTop: spacing[6],
  },
  container: { backgroundColor: color.dim, flex: 1 },

  formContainer: {
    marginHorizontal: spacing[2],
  },
  headerStyle: {
    marginBottom: spacing[6],
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
  },
})
