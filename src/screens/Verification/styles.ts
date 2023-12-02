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
    justify-content: space-between;
    align-items: center;
    paddingVertical: 24px;
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

export const CentralArea = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 41px 0;
`;

export const CentralText = styled.Text`
    font-family: ${theme.font.regularNunito};
    font-size: 13px;
    line-height: 17.73px;
    font-weight: 400;
    color: ${theme.colors.black.second};
    flex-direction: row;
    flex-wrap: wrap;
`;

export const LinkButton = styled.TouchableOpacity`
    margin-top: 32px;
`;

export const LinkButtonText = styled.Text`
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
`;

export const TimeText = styled.Text`
    font-family: ${theme.font.regularNunito};
    font-size: 13px;
    line-height: 17.73px;
    font-weight: 400;
    color: ${theme.colors.primary};
`;