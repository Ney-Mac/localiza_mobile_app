import React from 'react';
import styled from "styled-components/native";
import { theme } from '../themes/theme';

import CheckCircle from '../assets/checkbox/check_circle.svg';
import Button from './Button';

const Container = styled.Modal``;

const CloseButton = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.31);
`;

const Main = styled.View`
    width: 370px;
    height: 459.97px;
    background-color: #fff;
    border-radius: 22.49px;
    border: 1.12px solid #F7F7F7;
    justify-content: space-around;
    align-items: center;
    padding: 0 60.24px;
`;

const HeaderText = styled.Text`
    font-family: ${theme.font.regular};
    font-size: 21.37px;
    line-height: 25.86px;
    text-align: center;
    font-weight: 600;
    color: ${theme.colors.black.primary};
    max-width: 225px;
`;

const Text = styled.Text`
    font-size: 14.62px;
    line-height: 17.69px;
    font-weight: 300;
    color: ${theme.colors.black.second};
    text-align: center;
    font-family: ${theme.font.regular};
    max-width: 250px;
`;

interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    headerText: string;
    text: string;
    buttonText: string;
    onButtonPress: Function;
}

export default ({ visible, setVisible, headerText, text, buttonText, onButtonPress }: Props) => {
    return (
        <Container transparent={true} visible={visible}>
            <CloseButton activeOpacity={1} onPress={() => { setVisible(false) }}>
                <Main>
                    <CheckCircle width='131.58px' height='131.58px' fill="#83FF78" />
                    <HeaderText>{headerText}</HeaderText>
                    <Text>{text}</Text>
                    <Button
                        text={buttonText}
                        onPress={onButtonPress}
                    />
                </Main>
            </CloseButton>
        </Container>
    )
}