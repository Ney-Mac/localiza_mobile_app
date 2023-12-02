import React, { useState, useEffect } from 'react';
import { LayoutChangeEvent } from "react-native";
import { theme } from '../themes/theme';
import styled from "styled-components/native";

const CodeInputArea = styled.View`
    width: 100%;
    padding: 24px 0;
    position: relative;
`;

const TextNumberArea = styled.View`
    flex-direction: row;
`;

const TextNumber = styled.Text`
    border-bottom-width: 2px;
    flex: 1;
    margin: 0 5px;
    text-align: center;
    font-size: 24px;
`;

const TextInput = styled.TextInput`
    color: red;
    width: 100%;
    position: absolute;
    top: 10px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
`;

type Props = {
    setOriginalValue: React.Dispatch<React.SetStateAction<string>>;
    originalValue: string;
}

export default ({ setOriginalValue, originalValue }: Props) => {
    const [textWidth, setTextWidth] = useState<number>();

    const onLayout = (event: LayoutChangeEvent) => {
        const { width } = event.nativeEvent.layout;
        setTextWidth(width);
    }

    return (
        <CodeInputArea>
            <TextInput
                onChangeText={(text) => {
                    console.log(text, ' => ', typeof text);

                    if (text.length > 4) {
                        setOriginalValue(text.slice(0, 4));
                    } else {
                        setOriginalValue(text);
                    }
                }}
                keyboardType='numeric'
                value={originalValue}
                cursorColor={theme.colors.black.third}
                style={{
                    letterSpacing: (textWidth) && textWidth + 5
                }}
            />
            <InputNumber numbers={originalValue?.split('')} onLayout={onLayout} />
        </CodeInputArea>
    )
}

type InputNumberProps = {
    numbers?: Array<string>;
    onLayout: (event: LayoutChangeEvent) => void;
}

const InputNumber = ({ numbers, onLayout }: InputNumberProps) => {
    const [value0, setValue0] = useState<number | string>();
    const [value1, setValue1] = useState<number | string>();
    const [value2, setValue2] = useState<number | string>();
    const [value3, setValue3] = useState<number | string>();

    const [active, setActive] = useState<number>();

    const handleValue = (index: number, val: string | number) => {
        setActive(index);
        switch (index) {
            case 0:
                setValue0(val);
                break;
            case 1:
                setValue1(val);
                break;
            case 2:
                setValue2(val);
                break;
            case 3:
                setValue3(val);
                break;
        }
    }

    useEffect(() => {
        if (numbers) {
            numbers.map((value, index) => {
                handleValue(index, value);
            });
        }
    }, [numbers]);

    return (
        <TextNumberArea>
            <TextNumber
                style={{
                    borderBottomColor: (active === 0 || value0 != null) ?
                        theme.colors.primary :
                        theme.colors.black.third,
                    color: (active === 0 || value0 != null) ?
                        theme.colors.primary :
                        theme.colors.black.third,
                }}
                onLayout={onLayout}
            >
                {value0}
            </TextNumber>
            <TextNumber
                style={{
                    borderBottomColor: (active === 1 || value1 != null) ?
                        theme.colors.primary :
                        theme.colors.black.third,
                    color: (active === 1 || value1 != null) ?
                        theme.colors.primary :
                        theme.colors.black.third,
                }}
            >
                {value1}
            </TextNumber>
            <TextNumber
                style={{
                    borderBottomColor: (active === 2 || value2 != null) ?
                        theme.colors.primary :
                        theme.colors.black.third,
                    color: (active === 2 || value2 != null) ?
                        theme.colors.primary :
                        theme.colors.black.third,
                }}
            >
                {value2}
            </TextNumber>
            <TextNumber
                style={{
                    borderBottomColor: (active === 3 || value3 != null) ?
                        theme.colors.primary :
                        theme.colors.black.third,
                    color: (active === 3 || value3 != null) ?
                        theme.colors.primary :
                        theme.colors.black.third,
                }}
            >
                {value3}
            </TextNumber>
        </TextNumberArea>
    )
}