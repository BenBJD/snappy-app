import axios from "axios"

export const loadSnaps = async (token) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/snap/",
      method: "get",
      headers: { Authorization: "Bearer " + token },
    })
    return await response.data()
  } catch (err) {
    console.log(err)
  }
}

export const sendSnap = async (token, snapFile, toUserId) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/snap/",
      method: "post",
      params: { to_user_id: toUserId },
      data: { snap_file: snapFile },
      headers: { Authorization: "Bearer " + token },
    })
    return await response.data()
  } catch (err) {
    console.log(err)
  }
}

export const deleteSnap = async (token, snapId) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/snap/",
      method: "delete",
      params: { snap_id: snapId },
      headers: { Authorization: "Bearer " + token },
    })
    return await response.data()
  } catch (err) {
    console.log(err)
  }
}

export const downloadSnap = async (token, snapId) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/snap/download/",
      method: "get",
      params: { snap_id: snapId },
      headers: { Authorization: "Bearer " + token },
    })
    return await response.data()
  } catch (err) {
    console.log(err)
  }
}
