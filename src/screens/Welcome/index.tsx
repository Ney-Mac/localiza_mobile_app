import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../stacks/RootStack';

import LogoIcon from '../../assets/logo/logo.png';
import BackgroundIcon from '../../assets/background/background.svg';
import PinIcon from '../../assets/background/pin.svg';
import CheckBoxIcon from '../../assets/checkbox/check_box.svg';
import CheckBoxCheckedIcon from '../../assets/checkbox/check_box_checked.svg';

import {
    Container,
    LocalizaLogo,
    CentralArea,
    CheckBoxButton,
    DontShowAgainText,
    ButtonArea,
    CentralText
} from './styles';

import { theme } from '../../themes/theme';

import Button from '../../components/Button';

export default (): JSX.Element => {
    const navigation = useNavigation<StackTypes>();

    const [isChecked, setIsChecked] = useState(false);

    const onContinuePress = () => {
        navigation.navigate('MainStack', { screen: 'Home' });
    }

    return (
        <Container>
            <LocalizaLogo source={LogoIcon} />

            <CentralArea>
                <BackgroundIcon
                    height={402}
                    width='100%'
                    fill={theme.colors.black.fourth}
                    style={{
                        position: 'absolute',
                        top: 20,
                        left: 0
                    }}
                />

                <CentralText>
                    Encontre lojas e ATMs perto de si.
                    Converse com a loja para saber se há determinado produto ou se há dinheiro no ATM.
                </CentralText>

                <PinIcon width={28.04} height={36.89} style={{ position: 'absolute', top: 89, left: 85 }} />
                <PinIcon width={19.68} height={25.89} style={{ position: 'absolute', top: 97, left: 297 }} />
                <PinIcon width={17.4} height={22.89} style={{ position: 'absolute', top: 235, left: 82 }} />
                <PinIcon width={19.68} height={25.89} style={{ position: 'absolute', top: 289, left: 270 }} />
                <PinIcon width={20.44} height={26.89} style={{ position: 'absolute', top: 352, left: 312 }} />
            </CentralArea>

            <CheckBoxButton onPress={() => { setIsChecked(!isChecked) }}>
                {
                    isChecked ?
                        <CheckBoxCheckedIcon
                            height={24}
                            width={24}
                            fill={theme.colors.black.third}
                        />
                        :
                        <CheckBoxIcon
                            height={24}
                            width={24}
                            fill={theme.colors.black.third}
                        />
                }
                <DontShowAgainText>Não mostrar mais</DontShowAgainText>
            </CheckBoxButton>

            <ButtonArea>
                <Button
                    text="Continuar"
                    onPress={onContinuePress}
                />
            </ButtonArea>
        </Container>
    )
}