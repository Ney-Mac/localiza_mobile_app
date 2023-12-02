import styled from "styled-components/native";
import { Text } from "react-native-paper";
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
    justify-content: flex-end;
    paddingVertical: 24px;
`;

export const NavigateToRegisterButton = styled.TouchableOpacity`
    
`;

export const NavigateToRegisterButtonText = styled(Text)`
    color: ${theme.colors.blue.main};
    font-family: ${theme.font.regular};
    font-size: 14px;
    line-height: 16.94px;
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
`;

export const RecoveryArea = styled.View`
    width: 100%;
    align-items: flex-end;
`;

export const RecoveryButton = styled.TouchableOpacity`
    margin: 24px 0;
`;

export const RecoveryButtonText = styled(Text)`
    font-size: 14px;
    line-height: 16.94px;
`;
