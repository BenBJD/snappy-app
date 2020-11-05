import { StyleSheet } from "react-native";

export default StyleSheet.create({
    tabBar: {
        flex: 0.08,
        borderWidth: 1,
    },
    homeScreenItem: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 6,
        minHeight: 65,
        paddingTop: 13,
        backgroundColor: "#21252B",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    homeScreen: {
        flex: 1,
        backgroundColor: "#232529",
    },
    homeScreenItemList: {
        flex: 0.92,
        marginTop: 10,
    },
    menuText: {
        fontFamily: "System",
        fontSize: 10,
        color: "#dddddd",
    },
    homeScreenNameText: {
        fontFamily: "System",
        fontSize: 24,
        color: "#dddddd",
    },
});