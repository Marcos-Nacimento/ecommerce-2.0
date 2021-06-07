import React, { memo } from 'react';
import 
{
    Container,
    Label,
    Price,
    Image,
    Amount,
    Actions,
    NameButton,
    ButtonAction,
    ButtonContainer,
} from './styles';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';

import addToCartAction from '../../redux/actions/addToCart';
import removeFromCartAction from '../../redux/actions/removeFromCart';

const Product = ({ cart, add, remove, item }) => {
    return(
        <Container>
            <Image 
                source={{uri: item.image}}
                resizeMode='contain'
            />
            <Label
                numberOfLines={1}
                ellipsizeMode='tail'
            >
                {item.name}
            </Label>
            <Price color='#483d8b'>R${item.price}</Price>
            {cart[item._id] ? (
                <Actions>
                    <ButtonAction onPress={() => remove(item)}>
                        <MaterialCommunityIcons name='minus' size={hP('3%')} color='#808080'/>
                    </ButtonAction>
                    <Amount>
                        {cart[item._id].quantity}
                    </Amount>
                    <ButtonAction onPress={() => add(item)}>
                        <MaterialCommunityIcons name='plus' size={hP('3%')} color='#808080'/>
                    </ButtonAction>
                </Actions>
            ): (
                <ButtonContainer 
                    onPress={() => add(item)}
                    bg='#483d8b'    
                >
                    <NameButton>add</NameButton>
                </ButtonContainer>
            )}
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: payload => dispatch(addToCartAction(payload)),
        remove: payload => dispatch(removeFromCartAction(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Product));