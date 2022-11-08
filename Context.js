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
