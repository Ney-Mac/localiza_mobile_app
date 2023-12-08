import { useState } from 'react';
import { Keyboard } from 'react-native';

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
import Select from '../../components/Select';

export default (): JSX.Element => {
    const navigationRoot = useNavigation<StackTypes>();
    const navigationRegister = useNavigation<RegisterStackTypes>();

    type InputType = {
        value: string | number;
        error: string;
    }

    const [descriptionText, setDescriptionText] = useState<InputType>({ value: '', error: '' });
    const [category, setCategory] = useState<InputType>({ value: '', error: '' });
    const [address, setAddress] = useState<InputType>({ value: '', error: '' });

    const [location, setLocation] = useState<string>('');

    const onLoginPress = () => {
        const descriptionTextError = (descriptionText.value) ? '' : 'Preencha este campo';
        const categoryError = (category.value) ? '' : 'Preencha este campo';
        const addressError = (address.value) ? '' : 'Preencha este campo';


        if (descriptionTextError || categoryError || addressError) {
            setDescriptionText({ ...descriptionText, error: descriptionTextError });
            setCategory({ ...category, error: categoryError });
            setAddress({ ...address, error: addressError });
            return;
        }

        navigationRegister.navigate('DefinePassword');
    }

    return (
        <Container onPress={Keyboard.dismiss}>
            <HeaderArea>
                <HeaderTitle>Sobre e Localização</HeaderTitle>
                <HeaderText>Preenche os dados para criar a sua conta e ter acesso as informações.</HeaderText>
            </HeaderArea>

            <InputArea>
                <TextInput
                    label="Sobre a empresa"
                    value={descriptionText.value}
                    errorText={descriptionText.error}
                    onChangeText={(text: string) => { setDescriptionText({ value: text, error: '' }) }}
                    placeholder="Breve descrição"
                    style={{ height: 132 }}
                    multiline={true}
                />
                <Select
                    label='Categoria'
                    placeholder='Selecionar categoria'
                    isActive={true}
                    setSelectedItem={setLocation}
                    selectList={[
                        'Startup',
                        'Grande empresa',
                        'Media empresa',
                        'Pequena empresa'
                    ]}
                />
                <TextInput
                    label="Endereço"
                    value={address.value}
                    errorText={address.error}
                    onChangeText={(text: string) => { setAddress({ value: text, error: '' }) }}
                    placeholder="Localização da sua empresa"
                    isLocation={true}
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
