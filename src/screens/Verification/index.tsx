import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../stacks/RootStack';

import {
    Container,

    NavigationArea,

    HeaderArea,
    HeaderTitle,
    HeaderText,

    CentralArea,
    CentralText,

    LinkButton,
    LinkButtonText,
    TimeText,
} from './styles';

import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import TextInputNumber from '../../components/TextInputNumber';

import { theme } from '../../themes/theme';

export default (): JSX.Element => {
    const navigation = useNavigation<StackTypes>();

    const [counter, setCounter] = useState<number>(30);
    const [isCounting, setIsCounting] = useState<boolean>(false);

    const [code, setCode] = useState<string>('');

    const onResendPress = () => {
        setCounter(30);
        setIsCounting(true);
    }

    useEffect(() => {
        if (isCounting && counter > 0) {
            setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);
        } else {
            setIsCounting(false);
        }
    }, [counter, isCounting]);

    const onVadidatePress = () => {
        navigation.navigate('DefinePassword');
    }

    useEffect(() => {
        console.log(code);
    }, [code]);

    return (
        <Container behavior='padding'>

            <NavigationArea>
                <BackButton goBack={() => { navigation.goBack() }} />
            </NavigationArea>

            <HeaderArea>
                <HeaderTitle>Verificação</HeaderTitle>
                <HeaderText>
                    Por favor verifica o código de 4 dígitos que foi
                    enviado por SMS no número +244 990 000 000
                </HeaderText>
            </HeaderArea>

            <TextInputNumber setOriginalValue={setCode} originalValue={code} />

            <CentralArea>

                <CentralText>
                    Caso não receba o código no seu telefone{` `}
                    <TimeText>
                        {(counter < 10) ? `0${counter}` : counter}
                    </TimeText>
                    {` `}segundos, por favor clica “Reenviar o código ou tenta mais tarde.
                </CentralText>

                <LinkButton disabled={isCounting} onPress={onResendPress}>
                    <LinkButtonText style={{ color: isCounting ? theme.colors.black.third : theme.colors.primary }} >
                        Reenviar Código
                    </LinkButtonText>
                </LinkButton>
            </CentralArea>

            <Button
                text='Validar'
                onPress={onVadidatePress}
            />
        </Container>
    )
}