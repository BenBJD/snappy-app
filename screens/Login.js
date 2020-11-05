import React from "react";

import {
    Container,
    Header,
    Text,
    Content,
    List
} from "native-base";
import { SnappyFooter } from "../components";

export const LoginScreen = ({ navigation }) => {
    return (
        <Container>
            <Header>
                <Text>Login</Text>
            </Header>
            <Content>
                <Text>Login</Text>
            </Content>
            <SnappyFooter navigation={navigation} />
        </Container>
    );
};