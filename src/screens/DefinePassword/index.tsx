import { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../stacks/RootStack';
import { RegisterStackTypes } from '../Register';

import {
    Container,

    HeaderArea,
    HeaderTitle,
    HeaderText,

    InputArea,
} from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

type InputValue = {
    value: string | number;
    error: string
}

export default (): JSX.Element => {
    const navigationRoot = useNavigation<StackTypes>();
    const navigationRegister = useNavigation<RegisterStackTypes>();

    const [password, setPassword] = useState<InputValue>({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState<InputValue>({ value: '', error: '' });

    const onRecoveryPress = () => {
        const passwordError = (password.value) ? '' : 'Preencha este campo';
        const confirmPasswordError = (confirmPassword.value) ? '' : 'Preencha este campo';

        /*if (passwordError || confirmPasswordError) {
            setPassword({ ...password, error: passwordError });
            setConfirmPassword({ ...confirmPassword, error: confirmPasswordError });
            return;
        }*/

        
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backPressHandler);
        return backHandler.remove();
    }, []);

    const backPressHandler = () => {
        navigationRegister.goBack();
        return true;
    }

    return (
        <Container behavior='padding'>
            <HeaderArea>
                <HeaderTitle>Definir Palavra-Passe</HeaderTitle>
                <HeaderText>
                    Preenche os dados para cria a sua conta e ter acesso as informações.
                </HeaderText>
            </HeaderArea>

            <InputArea>
                <TextInput
                    label="Palavra-Passe"
                    placeholder="*************"
                    value={password.value}
                    errorText={password.error}
                    onChangeText={(text: string) => { setPassword({ value: text, error: '' }) }}
                    isPassword={true}
                />
                <TextInput
                    label="Confirmar Palavra-Passe"
                    placeholder="*************"
                    value={confirmPassword.value}
                    errorText={confirmPassword.error}
                    onChangeText={(text: string) => { setConfirmPassword({ value: text, error: '' }) }}
                    isPassword={true}
                />
            </InputArea>

            <Button
                text='Criar conta'
                onPress={onRecoveryPress}
            />
        </Container>
    )
}
