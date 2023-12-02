import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../stacks/RootStack';

import {
    Container,

    NavigationArea,

    SwappButtonContainer,
    SwappButton,
    SwappButtonText,

    ScreenContainer,
} from './styles';

import UserRegister from '../UserRegister';
import BusinessRegister from '../BusinessRegister';

import BackButton from '../../components/BackButton';

import { theme } from '../../themes/theme';

export default () => {
    const navigation = useNavigation<StackTypes>();

    const [activePage, setActivePage] = useState<number>(0);

    return (
        <Container behavior='padding'>

            <NavigationArea>
                <BackButton goBack={() => { navigation.goBack() }} />
            </NavigationArea>

            <SwappButtonContainer>
                <SwappButton
                    onPress={() => { setActivePage(0) }}
                    style={(activePage === 0) ? styles.activeButton : styles.inactiveButton}
                >
                    <SwappButtonText
                        style={(activePage === 0) ? styles.activeButtonText : styles.inactiveButtonText}
                    >Pessoal</SwappButtonText>
                </SwappButton>

                <SwappButton
                    onPress={() => { setActivePage(1) }}
                    style={(activePage === 1) ? styles.activeButton : styles.inactiveButton}
                >
                    <SwappButtonText
                        style={(activePage === 1) ? styles.activeButtonText : styles.inactiveButtonText}
                    >Business</SwappButtonText>
                </SwappButton>
            </SwappButtonContainer>

            <ScreenContainer>
                {
                    activePage === 0 ?
                    <UserRegister />
                    : <BusinessRegister />
                }
            </ScreenContainer>
        </Container>
    )
}

const styles = StyleSheet.create({
    activeButton: {
        borderBottomColor: theme.colors.primary,
        borderBottomWidth: 2
    },
    activeButtonText: {
        color: theme.colors.black.primary,
        fontWeight: '700'
    },
    inactiveButton: {
        borderBottomColor: '#CECECE',
        borderBottomWidth: 0.8
    },
    inactiveButtonText: {
        fontWeight: '500',
        color: theme.colors.black.third
    }
});