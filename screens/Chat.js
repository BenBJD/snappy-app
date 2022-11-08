import React, { useContext, useEffect, useRef, useState } from "react"
import { Box, FlatList, HStack, Image, Modal, Pressable, Text, VStack } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { downloadSnap } from "../api/snap.js"
import { UserContext } from "../Context.js"

const SentSnap = props => {
  return (
    <Box width={"33%"} margin={"2"}>
      <HStack justifyContent={"space-between"} space={"4"}>
        <Box padding={1}>
          <Ionicons size={24} name={props.item.seen ? "send-outline" : "send"} />
        </Box>
        <Box>
          <Text fontSize={"xl"}>{props.item.seen ? "Read" : "Sent"}</Text>
        </Box>
      </HStack>
    </Box>
  )
}

const SnapModal = props => {
  const modalVisible = props.modalVisible
  const setModalVisible = props.setModalVisible
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const token = useContext(UserContext).token
  const snapId = props.item.id
  const [snapFile, setSnapFile] = useState({ uri: "" })
  let gotFile = false

  useEffect(() => {
    (async () => {
      const response = await downloadSnap(token, snapId)
      console.log(response)
      if (response.status === 200) {
        gotFile = true
        setSnapFile(response)
      }
    })()
  }, [gotFile])

  const handleSnapPress = () => {
    setModalVisible(false)
  }

  return (
    <Modal isOpen={modalVisible} initialFocusRef={initialRef}
           finalFocusRef={finalRef}>
      <Modal.Content height={"2xl"} width={"2xl"}>
        <Modal.Body padding={"0"}>
          <Pressable onPress={handleSnapPress}>
            <Box>
              <Image resizeMode={"stretch"} rounded={"lg"} height={"2xl"} alt={"This should be a snap"}
                     src={snapFile.uri} />
            </Box>
          </Pressable>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}

const ReceivedSnap = props => {
  const [modalVisible, setModalVisible] = useState(false)
  const handleViewSnap = async () => {
    if (!props.item.seen && props.item.direction === "received") {
      setModalVisible(true)
    } else {
      console.log("Dont view")
    }
  }
  return (
    <>
      {props.item.seen ? <></> :
        <SnapModal modalVisible={modalVisible} setModalVisible={setModalVisible} item={props.item} />}
      <Pressable onPress={handleViewSnap}>
        <HStack space={"4"} justifyContent={"space-between"}>
          <Box margin={2} borderWidth={"1"} rounded={"xl"}
               bg={props.item.seen ? "white" : "red.500"}
               width={"8"}
               height={"8"}> </Box>
          <Box margin={"2"}>
            <Text fontSize={"xl"}>{props.item.seen ? "Read" : "Tap to View"}</Text>
          </Box>
          <Box margin={"2"}>
          </Box>
        </HStack>
      </Pressable>
    </>
  )
}

const SnapRow = (props) => {
  if (props.item.direction === "received") {
    return (
      <ReceivedSnap item={props.item} />
    )
  } else {
    return (
      <SentSnap item={props.item} />
    )
  }
}

const ChatRow = (props) => {
  // TODO: Chat Item
}

const ChatItem = props => {
  return (
    <Box>
      <Box><Text fontSize={"xl"}>{props.item.date}</Text></Box>
      <Box><Text fontSize={"xl"}>{props.item.time}</Text></Box>
      <Box bgColor={"gray.200"} height={"50px"} marginBottom={"3"} rounded={"lg"}>
        {props.type === "snap" ? <SnapRow item={props.item} /> :
          <ChatRow item={props.item} />}
      </Box>
    </Box>)
}

export const ChatScreen = ({ route, navigation }) => {
  // put into one list and put the direction (sent or received) in each item
  let itemList = route.params.itemList
  let friend = route.params.friend
  // order by time
  for (const itemListKey in itemList) {
    // TODO: Organise by date then time
  }
  const renderChatItem = ({ item }) => {
    return <ChatItem item={item} type={"snap"} />
  }
  return (
    <>
      <VStack space={"4"}>
        <Box margin={"2"}>
          <Text fontSize={"2xl"}>{friend.username}</Text>
        </Box>
        <FlatList height={"xl"} margin={"2"} bg={"gray.300"} rounded={"lg"} padding={"2"} data={itemList}
                  renderItem={(item) => renderChatItem(item)}
                  keyExtractor={item => item.id} />
      </VStack>
    </>
  )
}
