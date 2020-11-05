import React from "react";
import {
    Container,
    Header,
    Text,
    Content,
    List,
    ListItem,
    Thumbnail,
    Left,
    Body,
    Right,
    Icon,
} from "native-base";
import { SnappyFooter } from "../components";
import {
    constants,
    getData,
    storeData,
} from "../constants";

// Data
const loadFriends = () => {
    return fetch(`https://snappy.bjdhome.co.uk/api/v1/${constants.userID}/load_friends.json`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: `login_token=${constants.loginToken}`
    });
}

// Components
const FriendListItem = (props) => {
    return (
        <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: "Image URL" }} />
            </Left>
            <Body>
                <Text>{props.name}</Text>
                <Text note>{props.status}</Text>
            </Body>
            <Right>
                <Icon type="MaterialIcons" name="camera" />
            </Right>
        </ListItem>
    )
}

// Screen
export const FriendsScreen = ({ navigation }) => {
    let friends = loadFriends();
    const renderItem = ({ item }) => <FriendListItem />;
    return (
        <Container>
            <Header>
                <Text>Chats</Text>
            </Header>
            <Content>
                <List dataSource={friends} renderItem={renderItem} keyExtractor={item => item.id}/>
            </Content>
            <SnappyFooter navigation={navigation} />
        </Container>
    );
};

// Styles