import styled from "styled-components/native";
import { theme } from "../../themes/theme";

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    padding: 0 16px;
    background-color: ${theme.colors.surface};
`;

export const NavigationArea = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    paddingVertical: 24px;
`;

export const SwappButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const SwappButton = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
`;

export const SwappButtonText = styled.Text`
    font-size: 16px;
    line-height: 19.36px;
    font-family: ${theme.font.regular};
`;

export const ScreenContainer = styled.View`
    flex: 1;
    width: 100%;
`;