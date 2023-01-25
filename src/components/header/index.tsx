import React from 'react';
import {HeaderBlock} from "./style";
import Sun from './sun';
import Cloud from "./cloud";

const Header = () => {
    return (
        <HeaderBlock>
            <Cloud></Cloud>
            <Sun></Sun>
        </HeaderBlock>
    );
};

export default Header;