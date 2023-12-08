import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";

export type MainStackParamList = {
    Home: undefined;
}

const MainStack = createDrawerNavigator<MainStackParamList>();

export default (): JSX.Element => {
    return (
        <MainStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
    )
}
