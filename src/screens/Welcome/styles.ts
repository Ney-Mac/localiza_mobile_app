import styled from "styled-components/native";
import { theme } from "../../themes/theme";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    padding: 0 16px;
    background-color: ${theme.colors.surface};
`;

export const LocalizaLogo = styled.Image`
    width: 233.25px;
    height: 63.9px;
    margin: 45px 0;
`;

export const CentralArea = styled.View`
    width: 100%;
    height: 402px;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const CentralText = styled.Text`
    font-family: ${theme.font.regular};
    color: ${theme.colors.black.primary};
    font-size: 17px;
    font-weight: 400;
    line-height: 20.57px;
`;
 
export const CheckBoxButton = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const DontShowAgainText = styled.Text`
    font-size: 14px;
    font-family: ${theme.font.regular};
    color: ${theme.colors.black.third};
`;

export const ButtonArea = styled.View`
    margin-bottom: 32px;
    width: 100%;
`;