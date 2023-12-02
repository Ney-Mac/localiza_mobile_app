import styled from "styled-components/native";
import { Text } from "react-native-paper";
import { theme } from "../../themes/theme";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${theme.colors.surface};
`;

export const HeaderArea = styled.View`
    align-items: flex-start;
    width: 100%;
    gap: 8px;
    margin: 24px 0;
`;

export const HeaderTitle = styled(Text)`
    font-size: 21px;
    font-family: ${theme.font.regular};
    font-weight: 700;
`;

export const HeaderText = styled(Text)`
    font-family: ${theme.font.regular};
    font-size: 14px;
`;

export const InputArea = styled.View`
    width: 100%;
    gap: 24px;
    margin-bottom: 24px;
`;

export const NavigationArea = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
`;

export const NavigateToLoginText = styled.Text`
    font-family: ${theme.font.regular};
    font-weight: 500;
    font-size: 16px;
    line-height: 16.94px;
    color: ${theme.colors.black.primary};
`;

export const NavigateToLoginButton = styled.TouchableOpacity`

`;

export const NavigateToLoginButtonText = styled.Text`
    font-family: ${theme.font.regular};
    font-weight: 500;
    font-size: 16px;
    line-height: 16.94px;
    color: ${theme.colors.primary};
`;