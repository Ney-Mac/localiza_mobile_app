import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { theme } from "./src/themes/theme";

import RootStack from "./src/stacks/RootStack";

export default function App(): JSX.Element {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </PaperProvider>
    );
}