import { useContext, useEffect, useState } from "react"
import { Camera, CameraType } from "expo-camera"
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text, Box, Container, Popover } from "native-base"
import { useNavigation } from "@react-navigation/native"

import { sendSnap } from "../api/snap.js"
import { UserContext } from "../Context.js"
import { Tooltip } from "native-base/src/components/composites/Tooltip/Tooltip"

export const CameraScreen = ({ route, navigation }) => {
  const [type, setType] = useState(CameraType.back)
  const [permission, setPermission] = Camera.useCameraPermissions()
  const [sendTo, setSendTo] = useState({ friend_id: "" })
  const token = useContext(UserContext).token
  let camera
  // If camera was opened from a friend, set sendTo to be the friend
  useEffect(() => {
    if (route.params !== undefined) {
      setSendTo(route.params.friend)
    }
  }, [sendTo.friend_id])
  // Get permissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      await setPermission()
    })()
  }, [])
  // Switch front and back cameras
  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back))
  }
  // Handle camera shutter press
  const handlePicture = async () => {
    // TODO: Tooltips
    if (!camera) return
    if (!"friend_id" in sendTo) return
    await camera.takePictureAsync({
      onPictureSaved: async (photo) => {
        await sendSnap(token, photo.uri, sendTo.friend_id)
        await navigation.navigate("Main")
      }
    })
  }
  // TODO: Tooltips
  if (permission === null) {
    return <Box />
  }
  if (permission === false) {
    return <Box />
  }
  return (
    <Camera ratio={"16:9"} flex={1} width={"100%"} type={type} ref={(r) => {
      camera = r
    }}>
      <Text color={"white"}>{sendTo.username}</Text>
      <Box
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "transparent",
          flexDirection: "row"
        }}
      >
        <Box
          style={{
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            flex: 1,
            width: "100%",
            padding: 20,
            justifyContent: "space-between"
          }}
        >
          <Box
            style={{
              alignSelf: "center",
              flex: 1,
              alignItems: "center"
            }}
          >
            <Pressable padding={"2"} onPress={handlePicture}>
              <AntDesign name={"camera"} size={52} color={"white"} />
            </Pressable>
          </Box>
          <Box
            style={{
              alignSelf: "center",
              flex: 1,
              alignItems: "center"
            }}
          >
            <Pressable padding={"2"} onPress={toggleCameraType}>
              <MaterialIcons color={"white"} name={"flip-camera-android"} size={52} />
            </Pressable>
          </Box>
        </Box>
      </Box>
    </Camera>
  )
}
