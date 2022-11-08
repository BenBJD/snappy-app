import React, { useContext, useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { Box, HStack, Text, FlatList, Pressable, Image } from "native-base"
import { AntDesign } from "@expo/vector-icons"

import { loadFriends } from "../api/friend.js"
import { UserContext } from "../Context.js"
import { loadSnaps } from "../api/snap"


const FriendListItem = (props) => {
  // Handler for when the camera icon is a friend is pressed
  const handleTakePicture = () => {
    props.navigation.navigate("Camera", { friend: props.item, itemList: props.snaps })
  }

  // Handler for pressing a friend
  const handlePress = async () => {
    props.navigation.navigate("Chat", { friend: props.item, itemList: props.snaps })
  }

  return (
    <Box bg={"gray.100"} borderWidth={"1"} marginBottom={"2"} padding={"4"} rounded={"md"}>
      <HStack space={"4"} justifyContent={"space-between"}>
        <Pressable onPress={handlePress}>
          <Box bg-color={"red.500"} rounded={"lg"}></Box>
          <Text fontSize={"2xl"}>
            {props.item.username}
          </Text>
        </Pressable>
        <Pressable bg={"gray.400"} padding={"2"} rounded={"full"} onPress={handleTakePicture}>
          <AntDesign name={"camera"} size={24} color={"black"} />
        </Pressable>
      </HStack>
    </Box>
  )
}

export const MainScreen = ({ route, navigation }) => {
  const [friends, setFriends] = useState([])
  const [snaps, setSnaps] = useState({ received: [], sent: [] })
  const token = useContext(UserContext).token

  // Load confirmed friends
  useEffect(() => {
    loadFriends(token)
      .then(res => {
        setFriends(res)
      })
  }, [friends.length])
  // Load snaps sent to the user
  useEffect(() => {
    loadSnaps(token)
      .then(res => {
        setSnaps(res)
      })
  }, [snaps.length])

  const renderFriendListItem = ({ item }, navigation, snaps) => {
    let thisFriendSnaps = { received: [], sent: [] }
    thisFriendSnaps.received = snaps.received.filter(snap => snap.from_user_id === item.friend_id)
    thisFriendSnaps.sent = snaps.sent.filter(snap => snap.to_user_id === item.friend_id)
    // put into one list and put the direction (sent or received) in each item
    let itemList = []
    for (const receivedKey in thisFriendSnaps.received) {
      thisFriendSnaps.received[receivedKey].direction = "received"
    }
    for (const sentKey in thisFriendSnaps.sent) {
      thisFriendSnaps.sent[sentKey].direction = "sent"
    }
    itemList = [...thisFriendSnaps.sent, ...thisFriendSnaps.received]

    return (
      <FriendListItem item={item} navigation={navigation} snaps={itemList} />
    )
  }

  if (friends.length > 0 && (snaps.received.length > 0 || snaps.sent.length > 0))
    return (
      <Box bg={"gray.200"}>
        <FlatList data={friends} renderItem={(item) => renderFriendListItem(item, navigation, snaps)}
                  keyExtractor={item => item.friend_id} />
      </Box>
    )
  else {
    return (
      <Box bg={"gray.200"}>
        <Text>Loading</Text>
      </Box>
    )
  }
}
