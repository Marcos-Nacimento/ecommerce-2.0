import React from 'react';
import { Header } from './styles';

export default ({ children }) => {
    return (
        <Header>
            {children}
        </Header>
    );
};