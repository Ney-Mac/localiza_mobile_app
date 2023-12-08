import React, { useState } from "react";
import styled from "styled-components/native";
import { theme } from "../themes/theme";

import ExpandLessIcon from '../assets/chevron/expand_less.svg';
import ExpandMoreIcon from '../assets/chevron/expand_more.svg';

const SelectContainer = styled.View`
    width: 100%;
    gap: 8px;
    z-index: 3;
`;

const Select = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
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

const Label = styled.Text`
    font-size: 14px;
    line-height: 16.94px;
    color: ${theme.colors.black.primary};
    font-family: ${theme.font.regular};
`;

type Props = {
    isActive: boolean;
    selectList: Array<string>;
    placeholder: string;
    label?: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

export default ({ selectList, setSelectedItem, isActive, placeholder, label }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);

    const onExpandPress = () => {
        setIsExpanded(!isExpanded);
    }

    const onSelect = (index: number) => {
        setSelected(index);
        setSelectedItem(selectList[index]);
        isExpanded && onExpandPress();
    }

    return (
        <SelectContainer>
            {label && <Label>{label}</Label>}
            <Select
                onPress={onExpandPress}
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: (isActive ?
                        theme.colors.secondary
                        : theme.colors.black.fourth
                    ),
                }}
            >
                <SelectText>{selected !== null ? selectList[selected] : placeholder}</SelectText>
                {isExpanded ? <>
                    <ExpandLessIcon height={24} width={24} fill={(isActive ? theme.colors.secondary : theme.colors.black.fourth)} />
                    <SelectList style={{ elevation: 10 }}>
                        {selectList.map((value: string, index: number) => (
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
        </SelectContainer>
    )
}