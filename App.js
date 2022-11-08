import React, { createContext, useState } from "react"
import { Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NativeBaseProvider } from "native-base"

import { UserContext } from "./Context.js"
import { ChatScreen } from "./screens/Chat.js"
import { LoginScreen } from "./screens/Login.js"
import { MainScreen } from "./screens/Snappy.js"
import { SettingsScreen } from "./screens/Settings.js"
import { CameraScreen } from "./screens/Camera.js"

const Tabs = createBottomTabNavigator()

const App = () => {
  const [user, setUser] = useState({
    id: "24d668a7-5953-48cd-a812-18fc57405369",
    username: "ben_davison02",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNGQ2NjhhNy01OTUzLTQ4Y2QtYTgxMi0xOGZjNTc0MDUzNjkiLCJleHAiOjE2Njg3MDgwNTB9.QE9D5RMVjQzoBApiZvNOO9OHX-SZJ3vtduCZwAdguq4"
  })

  if (user.token === "") {
    return <Text>No Token detected</Text>
  }

  return (
    <NativeBaseProvider>
      <UserContext.Provider value={user}>
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Main" component={MainScreen} />
            <Tabs.Screen name="Camera" component={CameraScreen} options={{ unmountOnBlur: true }} />
            <Tabs.Screen name="Chat" component={ChatScreen} />
            <Tabs.Screen name="Settings" component={SettingsScreen} />
          </Tabs.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </NativeBaseProvider>
  )
}

export default App
