import { createContext, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const UserContext = createContext({})

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("@token")
  } catch (e) {
    console.log("Error reading from storage")
  }
}

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem("@token", token)
  } catch (e) {
    console.log("Error reading from storage")
  }
}

export const [user, setUser] = useState({
  id: "24d668a7-5953-48cd-a812-18fc57405369",
  username: "ben_davison02",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNGQ2NjhhNy01OTUzLTQ4Y2QtYTgxMi0xOGZjNTc0MDUzNjkiLCJleHAiOjE2NjgyMDk5NTF9.zohCtGozceZyCHcHEmU7wdlugYein26CWDRVaaux4O0",
})
