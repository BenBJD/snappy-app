import axios from "axios"

export const loadFriends = async (token) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/friend/",
      method: "get",
      headers: { Authorization: "Bearer " + token }
    })
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

export const addFriend = async (friendId, token) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/friend/",
      method: "put",
      params: { friend_id: friendId },
      headers: { Authorization: "Bearer " + token }
    })
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

export const removeFriend = async (friendId, token) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/friend/",
      method: "delete",
      params: { friend_id: friendId },
      headers: { Authorization: "Bearer " + token }
    })
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

export const confirmFriend = async (friendId, token) => {
  try {
    const response = await axios({
      url: process.env.API_URL + "/friend/",
      method: "post",
      params: { friend_id: friendId },
      headers: { Authorization: "Bearer " + token }
    })
    return await response.datas
  } catch (err) {
    console.log(err)
  }
}
