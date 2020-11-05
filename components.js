import React from "react";
import {
    Text,
    Footer,
    FooterTab,
    Icon,
    Button,
} from "native-base";

export const SnappyFooter = (props) => {
    return (
        <Footer>
            <FooterTab>
                <Button vertical onPress={() => props.navigation.navigate("Friends")}>
                    <Icon type="MaterialIcons" name="message" />
                    <Text>Friends</Text>
                </Button>
                <Button vertical onPress={() => props.navigation.navigate("Camera")}>
                    <Icon type="MaterialIcons" name="camera" />
                    <Text>Camera</Text>
                </Button>
                <Button vertical onPress={() => props.navigation.navigate("Settings")}>
                    <Icon type="MaterialIcons" name="settings" />
                    <Text>Settings</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
};