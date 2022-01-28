import styled from "styled-components";

export const Button = styled.button`
    margin: 10px 10px;
    width: 60px;
    height: 40px;
    border: 1px lightblue;
    border-radius: 5px;
    background-color: blue;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: lightblue;
        color: white;
    }
`;

export const Grid = styled.div`
    margin: 10px;
`;
