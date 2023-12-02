import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../stacks/RootStack';

import {
    Container,

    NavigationArea,
    NavigateToRegisterButton,
    NavigateToRegisterButtonText,

    HeaderArea,
    HeaderTitle,
    HeaderText,

    InputArea,
} from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';

export default (): JSX.Element => {
    const navigation = useNavigation<StackTypes>();

    type InputValue = {
        value: string | number;
        error: string
    }

    const [emailOrNumber, setEmailOrNumber] = useState<InputValue>({ value: '', error: '' });

    const onRecoveryPress = () => {
        const emailOrNumberError = (emailOrNumber.value) ? '' : 'Preencha este campo';

        /*if (emailOrNumberError) {
            setEmailOrNumber({ ...emailOrNumber, error: emailOrNumberError });
            return;
        }*/

        navigation.navigate('Verification');
    }

    return (
        <Container behavior='padding'>

            <NavigationArea>
                <BackButton goBack={() => { navigation.goBack() }} />

                <NavigateToRegisterButton onPress={() => navigation.navigate('Register')}>
                    <NavigateToRegisterButtonText>Criar Conta</NavigateToRegisterButtonText>
                </NavigateToRegisterButton>
            </NavigationArea>

            <HeaderArea>
                <HeaderTitle>Esqueci a senha</HeaderTitle>
                <HeaderText>
                    Enviaremos um e-mail para você com um código
                    para redefinir sua senha.
                </HeaderText>
            </HeaderArea>

            <InputArea>
                <TextInput
                    label="E-mail ou número"
                    value={emailOrNumber.value}
                    errorText={emailOrNumber.error}
                    onChangeText={(text: string) => { setEmailOrNumber({ value: text, error: '' }) }}
                    placeholder="921000000"
                />
            </InputArea>

            <Button
                text='Redefinir'
                onPress={onRecoveryPress}
            />
        </Container>
    )
}
