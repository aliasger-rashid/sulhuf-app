import { StyleSheet, View } from "react-native"
import React, { useState } from "react"
import { color, spacing } from "../../theme"
import { ImageUploader } from "./image-uploader"
import { AutoImage } from "../../components"

export const FileUploadScreen = () => {
  const [imageData, setimageData] = useState(null)

  return (
    <View style={styles.container}>
      <ImageUploader
        onUploadSuccess={(fileData) => {
          setimageData(fileData)
        }}
      />
      {imageData && (
        <View>
          <AutoImage source={{ uri: imageData?.url }} />
        </View>
      )}
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
