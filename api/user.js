import axios from "axios"

export const getToken = async (username, password) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/user/token/",
      method: "post",
      params: { username: username, password: password }
    })
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

export const createUser = async (username, password) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/user/",
      method: "put",
      params: { username: username, password: password }
    })
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

export const getUser = async (username, token) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/user/",
      method: "get",
      params: { username: username },
      headers: { Authorization: "Bearer " + token }
    })
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

export const setUserPassword = async (newPassword, token) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/user/",
      method: "post",
      params: { password: newPassword },
      headers: { Authorization: "Bearer " + token }
    })
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

export const deleteUser = async (token) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/user/",
      method: "delete",
      headers: { Authorization: "Bearer " + token }
    })
    return await response.data
  } catch (err) {
    console.log(err)
  }
}
