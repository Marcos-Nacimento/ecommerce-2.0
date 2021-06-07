import styled from 'styled-components/native';
import 
{
    heightPercentageToDP as hP,
    widthPercentageToDP as wP,
} from 'react-native-responsive-screen';

export const Container = styled.View `
    flex: 1;
`;

export const Label = styled.Text `
    font-family: 'Roboto_400Regular';
    color: #808080;
`;

export const MainScroll = styled.ScrollView ``;

export const ContainerScrollCategorie = styled.View ``;

export const ScrollCategorie = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: true,
}) ``;

export const ContainerDot = styled.TouchableOpacity `
    align-items: center;
`;

export const DotBanner = styled.View `
    height: ${hP('10%')}px;
    width: ${wP('17.4%')}px;
    border-radius: ${hP("100%")}px;
    margin: ${hP('1.5%')}px;
    justify-content: center;
    align-items: center;
    elevation: 2;
    background-color: #FFFFFF;
`;

export const Image = styled.Image `
    width: ${wP('8%')}px;
    height: ${hP('10%')}px;
`;


export const ContainerOffers = styled.View `
    margin-top: ${hP('1%')}px;
`;

export const OffersName = styled.Text `
    font-family: 'Roboto_700Bold';
    opacity: 0.7;
    margin-top: ${hP('3%')}px;
    margin-left: ${hP('2%')}px;
`; 

export const FlatList = styled.FlatList ``;

export const OnPress = styled.TouchableOpacity ``;

export const ContainerModal = styled.View `
    height: ${hP('80%')}px;
    width: ${wP('80%')}px;
    background-color: #FFFFFF;
    border-radius: ${hP('2%')}px;
`;

export const ContainerTitleModal = styled.View `
    flex-direction: row;
    justify-content: space-between;
    margin: ${hP('2%')}px;
`;

export const TitleModal = styled.Text `
    color: #483d8b;
    font-family: 'Roboto_400Regular';
`;

export const ContentNotification = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ImageNotification = styled.Image `
    height: ${hP('10%')}px;
    width: ${wP('10%')}px;
`;

export const ContentScrollModal = styled.ScrollView ``;
