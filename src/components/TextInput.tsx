import { useState, useEffect } from "react";

import { Text } from "react-native-paper";
import { theme } from "../themes/theme";

import styled from "styled-components/native";

import VisiblityIcon from '../assets/eye/visibility.svg';
import VisiblityOffIcon from '../assets/eye/visibility_off.svg';
import ExpandLessIcon from '../assets/chevron/expand_less.svg';
import ExpandMoreIcon from '../assets/chevron/expand_more.svg';

const Container = styled.View`
    width: 100%;
    gap: 8px;
    z-index: 2;
`;

const InputArea = styled.View`
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    padding-left: 12px; 
    padding-right: 16px;
`;

const Select = styled.TouchableOpacity`
    width: 30%;
    height: 56px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const SelectText = styled.Text`
    font-family: ${theme.font.regular};
    font-weight: 500;
    font-size: 16px;
    line-height: 16.94px;
    text-align: center;
    color: ${theme.colors.black.primary};
`;

const SelectList = styled.View`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.surface};
    z-index: 2;
`;

const SelctItem = styled.TouchableOpacity`
    width: 100%;
`;

const SelectItemText = styled.Text`
    font-family: ${theme.font.regular};
    font-size: 14px;
    color: ${theme.colors.black.primary};
    text-align: center;
    width: 100%;
    padding: 5px 0;
`;

const Separator = styled.View`
    width: 1px;
    height: 60%;
`;

const Input = styled.TextInput`
    background-color: transparent;
    flex: 1;
    height: 56px;
    color: #000;
`;

const IconButton = styled.TouchableOpacity`
`;

const ErrorText = styled(Text)`
    color: ${theme.colors.red.primary};
    font-size: 14px;
    line-height: 16.94px;
`;

const Label = styled(Text)`
    font-size: 14px;
    line-height: 16.94px;
`;

export default ({ label, placeholder, value, errorText, onChangeText, isPassword, phoneCode, setSelectedItem, ...props }: any) => {
    const [isActive, setIsActive] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selected, setSelected] = useState(0);

    const onIconPress = () => {
        setShowPassword(!showPassword);
    }

    const onExpandPress = () => {
        setIsExpanded(!isExpanded);
    }

    const onSelect = (index: number) => {
        setSelected(index);
        setSelectedItem(phoneCode[index]);
        isExpanded && onExpandPress();
    }

    useEffect(() => {
        if(phoneCode){
            onSelect(selected);
        }
    }, [])

    return (
        <Container>
            {label && <Label>{label}</Label>}

            <InputArea
                style={{
                    borderWidth: 1,
                    borderColor: (isActive ? theme.colors.secondary : theme.colors.black.fourth)
                }}
            >
                {phoneCode && <>
                    <Select onPress={onExpandPress}>
                        <SelectText>{phoneCode[selected]}</SelectText>
                        {isExpanded ? <>
                            <ExpandLessIcon height={24} width={24} fill={(isActive ? theme.colors.secondary : theme.colors.black.fourth)} />
                            <SelectList style={{ elevation: 10 }}>
                                {phoneCode.map((value: string, index: number) => (
                                    <SelctItem
                                        key={index}
                                        style={{
                                            backgroundColor: (selected === index) ? theme.colors.black.fourth : 'transparent'
                                        }}
                                        onPress={() => { onSelect(index) }}
                                    >
                                        <SelectItemText>{value}</SelectItemText>
                                    </SelctItem>
                                ))}
                            </SelectList>
                        </>
                            : <ExpandMoreIcon height={24} width={24} fill={(isActive ? theme.colors.secondary : theme.colors.black.fourth)} />
                        }
                    </Select>
                    <Separator style={{ backgroundColor: (isActive ? theme.colors.secondary : theme.colors.black.fourth) }} />
                </>}

                <Input
                    value={value}
                    mode="outlined"
                    placeholder={placeholder}
                    secureTextEntry={isPassword && !showPassword}
                    onChangeText={onChangeText}
                    selectionColor={theme.colors.secondary}
                    underlineColor="transparent"
                    onFocus={() => { setIsActive(true) }}
                    onBlur={() => { setIsActive(false) }}
                    {...props}
                />
                {isPassword && <IconButton onPress={onIconPress}>
                    {showPassword ?
                        <VisiblityIcon
                            height={24}
                            width={24}
                            fill={isActive ? theme.colors.secondary : theme.colors.black.fourth}
                        />
                        : <VisiblityOffIcon
                            height={24}
                            width={24}
                            fill={isActive ? theme.colors.secondary : theme.colors.black.fourth}
                        />
                    }
                </IconButton>}
            </InputArea>
            {errorText && <ErrorText>
                {errorText}
            </ErrorText>}
        </Container>
    )
}