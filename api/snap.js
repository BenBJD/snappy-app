import axios from "axios"
import * as FileSystem from "expo-file-system"

export const loadSnaps = async (token) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/snap/",
      method: "get",
      headers: { Authorization: "Bearer " + token }
    })
    return await response.data
  } catch (err) {
    console.log(err)
  }
}
export const sendSnap = async (token, snapFile, toUserId) => {
  try {
    const response = await FileSystem.uploadAsync(process.env.API_URL + "/snap/?to_user_id=" + toUserId, snapFile, {
      fieldName: "snap_file",
      httpMethod: "POST",
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      mimeType: "image/jpg",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "multipart/form-data"
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteSnap = async (token, snapId) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/snap/",
      method: "delete",
      params: { snap_id: snapId },
      headers: { Authorization: "Bearer " + token }
    })
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

export const downloadSnap = async (token, snapId) => {
  try {
    return await FileSystem.downloadAsync(
      process.env.API_URL + "/snap/download/?snap_id=" + snapId,
      FileSystem.documentDirectory + snapId + ".jpg",
      {
        headers: {
          "Authorization": "Bearer " + token
        }
      })
  } catch (error) {
    console.log(error)
  }
}
