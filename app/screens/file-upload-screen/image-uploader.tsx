import { StyleSheet, TouchableOpacity, View } from "react-native"
import React from "react"

import { Text } from "../../components"
import { color, flexStyles, spacing } from "../../theme"
import { launchImageLibrary } from "react-native-image-picker"
import Toast from "react-native-root-toast"
import { useDispatch } from "react-redux"
import { uploadFile } from "../../redux/actions/common-action"

interface ImageUploaderProps {
  onUploadSuccess: (file: any) => void
}
export const ImageUploader = (props: ImageUploaderProps) => {
  const dispatch = useDispatch()

  const uploadImageFromgallary = () => {
    try {
      launchImageLibrary(null, (response) => {
        if (response.didCancel) {
          Toast.show("User cancelled image picker")
        } else if (response.errorCode) {
          Toast.show(`ImagePicker Error`)
        } else {
          const imageType = {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName || new Date().getTime(),
          }
          dispatch(
            uploadFile(imageType, (result) => {
              props.onUploadSuccess(result)
            }),
          )
        }
      })
    } catch (error) {
      Toast.show("Couldn't not fetch image,please try again")
    }
  }
  return (
    <View>
      <Text text="Upload Image from your gallary" />
      <TouchableOpacity style={styles.addImageView} onPress={uploadImageFromgallary}>
        <Text text="Upload Image" style={styles.uploadText} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  addImageView: {
    borderWidth: 1,
    height: 100,
    ...flexStyles.columnCenter,
    backgroundColor: color.line,
    borderColor: color.grey,
    borderRadius: 4,
    borderStyle: "dashed",
    marginTop: spacing[2],
  },
  uploadText: {
    marginTop: spacing[2],
  },
})
