import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../stacks/RootStack';

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
    const navigation = useNavigation<StackTypes>();

    type InputType = {
        value: string | number;
        error: string;
        phoneCode?: string;
    }

    const [name, setName] = useState<InputType>({ value: '', error: '' });
    const [email, setEmail] = useState<InputType>({ value: '', error: '' });
    const [password, setPassword] = useState<InputType>({ value: '', error: '' });
    const [phone, setPhone] = useState<InputType>({ value: '', error: '', phoneCode: '' });

    const onLoginPress = () => {
        const emailError = (email.value) ? '' : 'Preencha este campo';
        const passwordError = (password.value) ? '' : 'Preencha este campo';

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        console.log('Logar');
    }

    const handlePhoneCode = (code: string) => {
        setPhone({ ...phone, phoneCode: code });
    }

    useEffect(() => { console.log(phone) }, [phone])

    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>Criar conta</HeaderTitle>
                <HeaderText>Preenche os dados para criar a sua conta e ter acesso as informações.</HeaderText>
            </HeaderArea>

            <InputArea>
                <TextInput
                    label="Nome"
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
            </InputArea>

            <Button
                text='Entrar'
                onPress={onLoginPress}
            />

            <NavigationArea>
                <NavigateToLoginText>Já tem uma conta? </NavigateToLoginText>
                <NavigateToLoginButton onPress={() => { navigation.navigate('Login') }}>
                    <NavigateToLoginButtonText>Entrar</NavigateToLoginButtonText>
                </NavigateToLoginButton>
            </NavigationArea>
        </Container>
    )
}
