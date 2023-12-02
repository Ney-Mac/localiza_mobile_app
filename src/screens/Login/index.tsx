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

    RecoveryArea,
    RecoveryButton,
    RecoveryButtonText
} from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

export default (): JSX.Element => {
    const navigation = useNavigation<StackTypes>();

    type InputValue = {
        value: string | number;
        error: string
    }

    const [emailOrNumber, setEmailOrNumber] = useState<InputValue>({ value: '', error: '' });
    const [password, setPassword] = useState<InputValue>({ value: '', error: '' });

    const onLoginPress = () => {
        const emailOrNumberError = (emailOrNumber.value) ? '' : 'Preencha este campo';
        const passwordError = (password.value) ? '' : 'Preencha este campo';

        /*if (emailOrNumberError || passwordError) {
            setEmailOrNumber({ ...emailOrNumber, error: emailOrNumberError });
            setPassword({ ...password, error: passwordError });
            return;
        }*/

        navigation.navigate('Welcome');
    }

    return (
        <Container behavior='padding'>

            <NavigationArea>
                <NavigateToRegisterButton onPress={() => navigation.navigate('Register')}>
                    <NavigateToRegisterButtonText>Criar Conta</NavigateToRegisterButtonText>
                </NavigateToRegisterButton>
            </NavigationArea>

            <HeaderArea>
                <HeaderTitle>Entrar</HeaderTitle>
                <HeaderText>Olá, insira os seus dados para entrar na aplicação</HeaderText>
            </HeaderArea>

            <InputArea>
                <TextInput
                    label="E-mail ou número"
                    value={emailOrNumber.value}
                    errorText={emailOrNumber.error}
                    onChangeText={(text: string) => { setEmailOrNumber({ value: text, error: '' }) }}
                    placeholder="921000000"
                />
                <TextInput
                    label="Palavra-Passe"
                    value={password.value}
                    errorText={password.error}
                    onChangeText={(text: string) => setPassword({ value: text, error: '' })}
                    placeholder="*********"
                    isPassword={true}
                />
            </InputArea>

            <RecoveryArea>
                <RecoveryButton onPress={() => { navigation.navigate('Recovery') }}>
                    <RecoveryButtonText>Esqueceu a senha?</RecoveryButtonText>
                </RecoveryButton>
            </RecoveryArea>

            <Button
                text='Entrar'
                onPress={onLoginPress}
            />
        </Container>
    )
}
