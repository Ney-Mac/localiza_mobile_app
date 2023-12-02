import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = '';

export default {
    checkUser: async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            
            if(user){
                user = JSON.parse(user);
                console.log(user);

                return user;
            }

            return null;
        } catch (error) {

        }
    },

    login: async () => {
        try {

        } catch (error) {

        }
    },

    register: async () => {
        try {

        } catch (error) {

        }
    }
}