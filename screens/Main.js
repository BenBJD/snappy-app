import React, { useContext, useState } from "react"
import { Text, View, FlatList, SafeAreaView } from "react-native"
import { loadFriends } from "../api/friend.js"
import { UserContext } from "../Context.js"

const FriendListItem = (props) => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

export const MainScreen = async () => {
  const [friends, setFriends] = useState([])
  setFriends(await loadFriends(useContext(UserContext).token))

  return (
    <SafeAreaView>
      <FlatList
        data={friends}
        renderItem={FriendListItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}
