import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../stacks/RootStack';
import { RegisterStackTypes } from '../Register';

import {
    Container,

    HeaderArea,
    HeaderTitle,
    HeaderText,

    InputArea,

    NavigationArea,
    NavigateToLoginText,
    NavigateToLoginButton,
    NavigateToLoginButtonText
} from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

export default (): JSX.Element => {
    const navigationRoot = useNavigation<StackTypes>();
    const navigationRegister = useNavigation<RegisterStackTypes>();

    type InputType = {
        value: string | number;
        error: string;
        phoneCode?: string;
    }

    const [name, setName] = useState<InputType>({ value: '', error: '' });
    const [email, setEmail] = useState<InputType>({ value: '', error: '' });
    const [phone, setPhone] = useState<InputType>({ value: '', error: '', phoneCode: '' });
    const [nif, setNif] = useState<InputType>({ value: '', error: '' });

    const onLoginPress = () => {
        const nameError = (name.value) ? '' : 'Preencha este campo';
        const emailError = (email.value) ? '' : 'Preencha este campo';
        const nifError = (nif.value) ? '' : 'Preencha este campo';
        const phoneError = (phone.value) ? 
            (phone.phoneCode)? '' : 'Escolha o código do país' 
            : 'Preencha este campo';
        //

        /*if (nameError || emailError || phoneError || nifError) {
            setName({ ...name, error: nameError });
            setEmail({ ...email, error: emailError });
            setPhone({ ...phone, error: phoneError });
            setNif({ ...nif, error: nifError });
            return;
        }*/

        navigationRegister.navigate('AboutBusiness');
    }

    const handlePhoneCode = (code: string) => {
        setPhone({ ...phone, phoneCode: code });
    }

    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>Criar conta</HeaderTitle>
                <HeaderText>Preenche os dados para criar a sua conta e ter acesso as informações.</HeaderText>
            </HeaderArea>

            <InputArea>
                <TextInput
                    label="Nome da empresa"
                    value={name.value}
                    errorText={name.error}
                    onChangeText={(text: string) => { setName({ value: text, error: '' }) }}
                    placeholder="Digitar o nome"
                />
                <TextInput
                    label="E-mail"
                    value={email.value}
                    errorText={email.error}
                    onChangeText={(text: string) => { setEmail({ value: text, error: '' }) }}
                    placeholder="exemplo@gmail.com"
                />
                <TextInput
                    label="Telemóvel"
                    value={phone.value}
                    errorText={phone.error}
                    keyboardType='numeric'
                    onChangeText={(text: string) => setPhone({ value: text, phoneCode: '', error: '' })}
                    placeholder="Número de telefone"
                    setSelectedItem={handlePhoneCode}
                    phoneCode={[
                        '+244',
                        '+55',
                        '+11'
                    ]}
                />
                <TextInput
                    label="Nif"
                    value={nif.value}
                    errorText={nif.error}
                    keyboardType="numeric"
                    onChangeText={(text: string) => { setNif({ value: text, error: '' }) }}
                    placeholder="000000000000"
                />
            </InputArea>

            <Button
                text='Continuar'
                onPress={onLoginPress}
            />

            <NavigationArea>
                <NavigateToLoginText>Já tem uma conta? </NavigateToLoginText>
                <NavigateToLoginButton onPress={() => { navigationRoot.navigate('Login') }}>
                    <NavigateToLoginButtonText>Entrar</NavigateToLoginButtonText>
                </NavigateToLoginButton>
            </NavigationArea>
        </Container>
    )
}
