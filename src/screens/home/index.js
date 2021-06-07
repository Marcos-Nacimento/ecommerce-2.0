import React, { useEffect, useState, useCallback } from 'react';
import 
{
    Container,
    ContainerScrollCategorie,
    MainScroll,
    ScrollCategorie,
    ContainerDot,
    DotBanner,
    Image,
    Label,
    OffersName,
    ContainerOffers,
    FlatList,
    OnPress,
    ContainerModal,
    TitleModal,
    ContainerTitleModal,
    ContentNotification,
    ImageNotification,
    ContentScrollModal,
} from './styles';
import { section } from '../../data';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { api } from '../../service';
import { useNavigation } from '@react-navigation/native';

import ProductItem from '../../components/product';
import Header from '../../components/header';
import Modal from 'react-native-modal';

export default () => {
    const [offers, setOffers] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [page, setPage] = useState(1);
    const [xTotalPage, setTotal] = useState(1);
    const [isModalHelp, setModalHelp] = useState(false);
    const [isModalNotification, setModalNotification] = useState(false);

    const navigation = useNavigation();

    const getOffers = async () => {
        if(page > xTotalPage) {
            return;
        };

        try {
            const { data } = await api.get(`/product/list/ofertas/${page}`);

            setOffers([...offers, ...data.docs]);
            setTotal(data.totalPages);
            setPage(data.page + 1);
        }catch(error) {
            console.log(error);
        }finally {
            setLoaded(false);
        };
    };

    useEffect(() => {
        getOffers();
    }, []);

    const keyExtractor = useCallback(key => key._id, []);

    const renderItem = useCallback(({item}) => (
        <ProductItem item={item}/>
    ), []);

    return(
        <Container>
            <MainScroll>
                <Header >
                    <OnPress>
                        <MaterialCommunityIcons 
                            name='help-box'
                            color='#FFFFFF'
                            size={24}
                            onPress={() => setModalHelp(true)}
                        />
                    </OnPress>
                    <OnPress>
                        <MaterialCommunityIcons 
                            name='bell'
                            color='#FFFFFF'
                            size={24}
                            onPress={() => setModalNotification(true)}
                        />
                    </OnPress>
                </Header>
                <ContainerScrollCategorie>
                        <ScrollCategorie>
                            {section.map((item, index) => (
                                <ContainerDot
                                    key={index}
                                    onPress={() => navigation.navigate('product', item.parameter)}
                                >
                                    <DotBanner>
                                        <Image 
                                            source={item.img}
                                            resizeMode='contain'
                                        />
                                    </DotBanner>
                                    <Label>{item.title}</Label>
                                </ContainerDot>
                            ))}
                        </ScrollCategorie>
                </ContainerScrollCategorie>
                <OffersName>OFERTAS DO DIA</OffersName>
                <ContainerOffers>
                    <FlatList 
                        data={offers}
                        keyExtractor={keyExtractor}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={true}
                        renderItem={renderItem}
                        horizontal={true}
                        onEndReachedThreshold={0.1}
                        onEndReached={getOffers}
                    />
                </ContainerOffers>
                <Modal
                    isVisible={loaded}
                    statusBarTranslucent
                >
                    <ActivityIndicator color='#FFF'/>
                </Modal>
                <Modal
                    isVisible={isModalHelp}
                    statusBarTranslucent
                    style={{
                        alignItems: 'center'
                    }}
                    onBackdropPress={() => setModalHelp(false)}
                    onBackButtonPress={() => setModalHelp(false)}
                    animationIn="lightSpeedIn"
                    animationOut="lightSpeedOut"
                >
                    <ContainerModal>
                        <ContainerTitleModal>
                            <TitleModal>Ajuda</TitleModal>
                            <OnPress
                                onPress={() => setModalHelp(false)}
                            >
                                <MaterialCommunityIcons 
                                    name="close"
                                    size={hP('3%')}
                                    color="#483d8b"
                                />
                            </OnPress>
                        </ContainerTitleModal>
                        <ContentScrollModal>
                           
                        </ContentScrollModal>
                    </ContainerModal>
                </Modal>
                <Modal
                    isVisible={isModalNotification}
                    statusBarTranslucent
                    style={{
                        alignItems: 'center'
                    }}
                    onBackdropPress={() => setModalNotification(false)}
                    onBackButtonPress={() => setModalNotification(false)}
                    animationIn="lightSpeedIn"
                    animationOut="lightSpeedOut"
                >
                    <ContainerModal>
                        <ContainerTitleModal>
                            <TitleModal>Notificações</TitleModal>
                            <OnPress
                                onPress={() => setModalNotification(false)}
                            >
                                <MaterialCommunityIcons 
                                    name="close"
                                    size={hP('3%')}
                                    color="#483d8b"
                                />
                            </OnPress>
                        </ContainerTitleModal>
                        <ContentNotification>
                            <ImageNotification 
                                source={require('../../assets/notification.png')}
                                resizeMode='contain'
                            />
                            <TitleModal>Sem Notificações!</TitleModal>
                        </ContentNotification>
                    </ContainerModal>
                </Modal>
            </MainScroll>
        </Container>
    );
};