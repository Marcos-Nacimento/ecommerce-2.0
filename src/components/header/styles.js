import styled from 'styled-components/native';
import 
{
    heightPercentageToDP as hP,
} from 'react-native-responsive-screen';

export const Header = styled.View `
    height: ${hP('15%')}px;
    border-bottom-left-radius: ${hP('2%')}px;
    border-bottom-right-radius: ${hP('2%')}px;
    background-color: #483d8b;
    justify-content: space-between;
    align-items: center;
    padding: ${hP('3%')}px;
    flex-direction: row;
`;