import styled from "styled-components";


export const AddButton = styled.button `
    background-color: #6cf000;
    font-weight: bold;
    color: #000;
    border: none;
    padding: 10px 1rem 10px 1rem;
    border-radius: 5px;
    margin-left: 8px;
    cursor: pointer;
    height: 35px;
    transition: .5s;

    &:hover{
        opacity: 0.8;
    }
`

export const Container = styled.div `
    background-color: #b752ff;
    padding: 20px;
    border-radius: 10px;

    h1{
        color: #fff;
        text-align: center;
    }

    input{
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 35px;
        outline: none;
        padding-left: 10px;
    }
`

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background: #fff;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0 10px;

    p{
        text-transform: uppercase;
        font-weight: bold;
    }
`

export const DeleteButton = styled.button ` 
    background: transparent;
    border: none;
    cursor: pointer;
`