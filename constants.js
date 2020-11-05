import AsyncStorage from "@react-native-community/async-storage"


// Data load and save
export const storeData = (key, value) => {
    AsyncStorage.setItem(key, value);
};

export const getData = key => {
    try {
        value = AsyncStorage.getItem(key);
        return value
    } catch (e) {
        return null
    }
};

// Load items from storage
export const constants = {
    userID: getData(userID),
    loginToken: getData(loginToken),
};