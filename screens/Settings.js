import React from "react";

import {
    Container,
    Header,
    Text,
    Content,
    List
} from "native-base";
import { SnappyFooter } from "../components";

export const SettingsScreen = ({ navigation }) => {
    return (
        <Container>
            <Header>
                <Text>Settings</Text>
            </Header>
            <Content>
                <Text>Settings</Text>
            </Content>
            <SnappyFooter navigation={navigation} />
        </Container>
    );
};