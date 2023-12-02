import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";

import Preload from "../screens/Preload";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Recovery from "../screens/Recovery";
import Welcome from "../screens/Welcome";
import Verification from "../screens/Verification";
import DefinePassword from "../screens/DefinePassword";

type RootStackParamList = {
    Preload: undefined;
    
    Login: undefined;
    Register: undefined;

    Recovery: undefined;
    Verification: undefined;
    DefinePassword: undefined;
    
    Welcome: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type StackTypes = NativeStackNavigationProp<RootStackParamList>;

export default () => (
    <RootStack.Navigator
        initialRouteName="Register"
        screenOptions={{
            headerShown: false
        }}
    >
        <RootStack.Screen name="Preload" component={Preload} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="Recovery" component={Recovery} />
        <RootStack.Screen name="Welcome" component={Welcome} />
        <RootStack.Screen name="Verification" component={Verification} />
        <RootStack.Screen name="DefinePassword" component={DefinePassword} />
    </RootStack.Navigator>
)