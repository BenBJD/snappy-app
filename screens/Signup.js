import React from "react";

import {
    Container,
    Header,
    Text,
    Content,
    List
} from "native-base";
import { SnappyFooter } from "../components";

export const SignUpScreen = ({ navigation }) => {
    return (
        <Container>
            <Header>
                <Text>Signup</Text>
            </Header>
            <Content>
                <Text>Signup</Text>
            </Content>
            <SnappyFooter navigation={navigation} />
        </Container>
    );
};