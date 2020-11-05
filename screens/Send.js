import React from "react";

import {
    Container,
    Header,
    Text,
    Content,
    List
} from "native-base";
import { SnappyFooter } from "../components";

export const SendScreen = ({ navigation }) => {
    return (
        <Container>
            <Header>
                <Text>Send</Text>
            </Header>
            <Content>
                <Text>Send</Text>
            </Content>
            <SnappyFooter navigation={navigation} />
        </Container>
    );
};