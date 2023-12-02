import styled from 'styled-components/native';
import ArrowBackIcon from '../assets/arrow/arrow_back.svg';

type Props = {
    goBack: Function;
}

const Button = styled.TouchableOpacity`
    
`;

export default ({ goBack }: Props): JSX.Element => {
    const onPress = () => {
        goBack();
    }

    return (
        <Button onPress={onPress}>
            <ArrowBackIcon height={24} width={24} fill="#000" />
        </Button>
    )
}