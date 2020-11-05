import React from "react";

import {
    Container,
    Header,
    Text,
    Content,
    List
} from "native-base";
import { SnappyFooter } from "../components";

export const CameraScreen = ({ navigation }) => {
    return (
        <Container>
            <Header>
                <Text>Camera</Text>
            </Header>
            <Content>
                <Text>Camera</Text>
            </Content>
            <SnappyFooter navigation={navigation} />
        </Container>
    );
};