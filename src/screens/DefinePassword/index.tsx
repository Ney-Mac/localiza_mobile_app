import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../stacks/RootStack';

import {
    Container,

    NavigationArea,

    HeaderArea,
    HeaderTitle,
    HeaderText,

    InputArea,
} from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import SuccessModal from '../../components/SuccessModal';

type InputValue = {
    value: string | number;
    error: string
}

export default (): JSX.Element => {
    const navigation = useNavigation<StackTypes>();

    const [password, setPassword] = useState<InputValue>({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState<InputValue>({ value: '', error: '' });

    const [showModal, setShowModal] = useState<boolean>(false);

    const onRecoveryPress = () => {
        const passwordError = (password.value) ? '' : 'Preencha este campo';
        const confirmPasswordError = (confirmPassword.value) ? '' : 'Preencha este campo';

        /*if (passwordError || confirmPasswordError) {
            setPassword({ ...password, error: passwordError });
            setConfirmPassword({ ...confirmPassword, error: confirmPasswordError });
            return;
        }*/
        
        setShowModal(true);
    }

    return (
        <Container behavior='padding'>

            <NavigationArea>
                <BackButton goBack={() => { navigation.goBack() }} />
            </NavigationArea>

            <HeaderArea>
                <HeaderTitle>Definir nova Palavra-Passe</HeaderTitle>
                <HeaderText>
                    Entre com sua nova palavra-Passe
                </HeaderText>
            </HeaderArea>

            <InputArea>
                <TextInput
                    label="Nova Palavra-Passe"
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

            <SuccessModal 
                visible={showModal} 
                setVisible={setShowModal} 
                headerText='Palavra-Passe foi mudada com sucesso'
                text='Clica no botão entrar, para teres acesso a sua conta'
                buttonText='Entrar'
                onButtonPress={() => { console.log('Modal') }}
            />

            <Button
                text='Continuar'
                onPress={onRecoveryPress}
            />
        </Container>
    )
}
