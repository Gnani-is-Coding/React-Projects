import { StyledLi } from '@/UI-lib/payment-landing-page'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { MenuOptions } from './PaymentHeader'


type IProps = {
    isNavOptionsOpen: boolean,
     handleNavItemClick: (arg: string) => void,
    currentActiveNavLink: string
}
const MenuSlideWrapper = styled.ul<{isNavOptionsOpen: boolean}>`
    padding: 0.7rem;
    position: fixed;
    top: 10%;
    right: 0;
    margin: 0;
    background-color: #000;
    min-height: 100vh;
    width: 100vw;
    z-index: 99;
    pointer-events: ${({isNavOptionsOpen}) => isNavOptionsOpen ? 'all' : 'none'};
    transform: translateX( ${({isNavOptionsOpen}) => isNavOptionsOpen ? '0vw':'100vw'});
    transition: transform 0.25s ease-in-out;
`

function MenuSLiderPortal({isNavOptionsOpen, handleNavItemClick, currentActiveNavLink}: IProps) {
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!isMounted) return null

  return (
    <>̉
      {createPortal(
        <MenuSlideWrapper isNavOptionsOpen={isNavOptionsOpen}>
        {MenuOptions.map(option => (
            <StyledLi key={option.id} isActive={option.path.split("/")[1] == currentActiveNavLink} onClick={() => handleNavItemClick(option.path)}>{option.name}</StyledLi>
        ))}
    </MenuSlideWrapper>,
    document.getElementById("landing-page") || document.body
    )}
</>

  )
}

export default MenuSLiderPortal
