import styled from "styled-components/native";
import { Text } from "react-native-paper";
import { theme } from "../themes/theme";

const ButtonArea = styled.TouchableOpacity`
    border-radius: 10px;
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 59px;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

const ButtonText = styled(Text)`
    color: #fff;
    font-size: 14px;
    line-height: 16.94px;
`;

type Props = {
    onPress: Function;
    text: string;
}

export default ({ onPress, text }: Props) => {

    const onButtonPress = () => {
        onPress();
    }

    return (
        <ButtonArea onPress={onButtonPress}>
            <ButtonText>{text}</ButtonText>
        </ButtonArea>
    )
}