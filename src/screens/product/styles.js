import styled from 'styled-components/native';
import 
{
    heightPercentageToDP as hP,
    widthPercentageToDP as wP,
} from 'react-native-responsive-screen';

export const Container = styled.View ``;

export const Title = styled.Text `
    color: #FFF;
`;

export const OnPress = styled.TouchableOpacity ``;

export const TextInputContainer = styled.View `
    height: ${hP('8%')}px;
    background-color: #dcdcdc;
    margin: ${hP('2%')}px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: ${hP('2%')}px;
    border-radius: ${hP('1%')}px;
`;
export const TextInput = styled.TextInput `
    height: ${hP('8%')}px;
    width: ${wP('80%')}px;
    font-family: 'Roboto_400Regular';
`;

export const ContentEmpty = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContentNameEmpty = styled.Text `
    font-family: 'Roboto_500Medium';
    color: #483d8b;
`;