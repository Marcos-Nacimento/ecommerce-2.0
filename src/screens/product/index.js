import React, { useEffect, useState, useCallback } from 'react';
import 
{ 
    Container, 
    Title,
    OnPress,
    TextInputContainer,
    TextInput,
    ContentEmpty,
    ContentNameEmpty,
} 
from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { api } from '../../service';
import { FlatGrid } from 'react-native-super-grid';
import { ActivityIndicator } from 'react-native';

import Header from '../../components/header';
import ProductItem from '../../components/product';

export default ({ route }) => {
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [xTotalPage, setTotalPage] = useState(1);
    const [isLoadingSearch, setLoadingSearch] = useState(false);

    const navigation = useNavigation();

    const getProducts = async () => {
        if(page > xTotalPage) return;

        try {
            setLoading(true);
            let { data } = await api.get(`/product/list/${route.params}/${page}`);
            
            setProducts([...products, ...data.docs.filter(item => {
                return !products.find(_item => item._id === _item._id);
            })]);

            setPage(page + 1);
            setTotalPage(data.totalPages);
        }catch(error) {
            console.log(error);
        }finally {
            setLoading(false);
        };
    };

    const searchProduct = async () => {
        if(!query) return;

        try {
            setLoadingSearch(true);
            let { data } = await api.get(`/product/search/${query}`);
            
            setProducts(data);
        }catch(error) {
            console.log(error);
        }finally {
            setLoadingSearch(false);
        };
    };

    useEffect(() => {
        getProducts();
    }, [route.params]);

    const renderItem = useCallback(({ item }) => <ProductItem item={item}/>, []);
    const keyExtractor = useCallback((key) => key._id, []);

    return(
        <Container>
            <Header>
                <OnPress onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name='arrow-left' color='#FFF' size={hP('3%')}/>
                </OnPress>
                <Title>{route.params.toUpperCase()}</Title>
            </Header>
            <TextInputContainer>
                <TextInput 
                    maxLength={36}
                    placeholder='O que está procurando  ...'
                    onChangeText={text => setQuery(text)}
                    returnKeyType='search'
                    onSubmitEditing={searchProduct}
                    value={query}
                />
                {isLoadingSearch ? (
                    <ActivityIndicator color='#483d8b'/>
                ): (
                    <OnPress onPress={() => searchProduct()}>
                        <MaterialCommunityIcons name='magnify' size={hP('3%')}/>
                    </OnPress>
                )}
            </TextInputContainer>
            <FlatGrid 
                data={products}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={{
                    marginBottom: isLoading ? hP('20%') : hP('15%'),
                }}
                ListFooterComponent={
                    <ActivityIndicator 
                        animating={isLoading} 
                        color='#483d8b'
                        style={{
                            marginBottom: hP('10%'),
                        }}
                    />
                }
                onEndReached={getProducts}
                onEndReachedThreshold={0.1}
            />
            {isLoading === false && products.length === 0 && 
                (
                    <ContentEmpty>
                        <MaterialCommunityIcons 
                            name='emoticon-sad-outline'
                            size={hP('5%')}
                            color='#483d8b'
                        />
                        <ContentNameEmpty>Oops!! Nenhum resultado encontrado!!</ContentNameEmpty>
                    </ContentEmpty>
                )
            }
        </Container>
    );
};