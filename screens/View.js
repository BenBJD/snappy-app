import React from "react";

import {
    Container,
    Header,
    Text,
    Content,
    List
} from "native-base";
import { SnappyFooter } from "../components";

export const ViewScreen = ({ navigation }) => {
    return (
        <Container>
            <Header>
                <Text>View</Text>
            </Header>
            <Content>
                <Text>View</Text>
            </Content>
            <SnappyFooter navigation={navigation} />
        </Container>
    );
};