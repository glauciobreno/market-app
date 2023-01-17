import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getItem } from "../services/LocalStoreFuncs";

const HeaderArea = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background-color: #0F52BA;
    padding: 20px;
    margin-bottom: 70px;

    a {
        text-decoration: none;
        color: #FFFFFF;

        &:hover{
            text-decoration: underline;
        }
    }

`;

export const Header = () => {

    const user = getItem('usuario')
    const name = user.name.split(' ')
    return (
        <HeaderArea>
            <Link to='/'>Store</Link>
            <Link to='/cart'>Cart</Link>
            <Link > Minha conta </Link>
        </HeaderArea>
    )
}