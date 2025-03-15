import styled from "styled-components";


export const StyledLi = styled.li<{isActive?: boolean}>`
width: 100%;
    color: ${({isActive}) => isActive &&'#000'};
    background-color: ${({isActive}) => isActive ? '#E9DCFF' : 'transparent'};
    border-radius: 10px;
    padding: 0.7rem;
    font-weight:  ${({isActive}) => isActive && 'bold'};
    cursor: pointer;

    &:hover {
        border: 1px solid #fff;
        margin-top: 4px;
    }
`