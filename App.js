import React from "react";
import { AsyncStorage } from "@react-native-community/async-storage";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";
import * as Screens from "./screens";
import {
    constants,
    getData,
    storeData,
} from "./constants";

const Stack = createStackNavigator();

// App
const App = () => {
    // Load user data

    // load Fonts
    let [fontsLoaded] = useFonts({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
    });

    // Show loading screen until fonts are loaded
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Camera"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Camera" component={Screens.Camera.CameraScreen} />
                <Stack.Screen
                    name="Friends"
                    component={Screens.Friends.FriendsScreen}
                />
                <Stack.Screen
                    name="Settings"
                    component={Screens.Settings.SettingsScreen}
                />
                <Stack.Screen name="View" component={Screens.View.ViewScreen} />
                <Stack.Screen name="Send" component={Screens.Send.SendScreen} />
                <Stack.Screen name="Login" component={Screens.Login.LoginScreen} />
                <Stack.Screen name="Sign Up" component={Screens.Signup.SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
