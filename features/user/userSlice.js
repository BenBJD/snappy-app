import { createSlice } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    username: "",
    score: 0,
    id: ""
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload
    },
    setUsername: (state, action) => {
      state.value = action.payload
    },
    incrementScore: (state) => {
      state.value += 1
    },
    setId: (state, action) => {
      state.value = action.payload
    }

  }
})

export const {} = userSlice.actions

export default userSlice.reducer