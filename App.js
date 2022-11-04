import React, { createContext, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { UserContext, user } from "./Context.js"
import { CameraScreen } from "./screens/Camera.js"
import { ChatScreen } from "./screens/Chat.js"
import { LoginScreen } from "./screens/Login.js"
import { MainScreen } from "./screens/Main.js"
import { SettingsScreen } from "./screens/Settings.js"

const Stack = createNativeStackNavigator()

const App = () => {
  if (user.token === "") {
    return <LoginScreen />
  }

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  )
}

export default App
