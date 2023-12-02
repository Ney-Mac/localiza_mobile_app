import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../stacks/RootStack';

import { 
    Container,
    LocalizaLogo,
    Loading
} from "./styles";

import LogoImg from '../../assets/logo/logo.png';
import { theme } from "../../themes/theme";
import Api from '../Api';


export default () => {
    const navigation = useNavigation<StackTypes>();

    useEffect(() => {
        //Colocar a logica para direcionar para Login ou para Home
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000);
    }, []);

    return (
        <Container>
            <LocalizaLogo source={LogoImg} />
            <Loading size={48} color={theme.colors.blue.main} />
        </Container>
    )
}