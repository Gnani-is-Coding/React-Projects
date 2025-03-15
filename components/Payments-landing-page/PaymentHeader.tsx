import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import MenuSLiderPortal from './MenuSLiderPortal'
import { Button } from '@/pages/payment-landing-page/[slug]'

export const MenuOptions = [
    {
      id: 0,
      name: 'Features',
      path: '/features',
  },
  {
      id: 1,
      name: 'Pricing',
      path: '/pricing',
  },
  {
      id: 2,
      name: 'Help',
      path: '/help',
  },
  {
      id: 3,
      name: 'Blog',
      path: '/blog',
  },
  {
      id: 4,
      name: 'About Us',
      path: '/about-us',
  },
  {
      id: 5,
      name: 'Log In',
      path: '/log-in',
  },
  {
      id: 6,
      name: 'Sign Up',
      path: '/sign-up',
  },
  ]

const Wrapper = styled.div<{isNavOptionsOpen: boolean}>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;
    background-color: ${({isNavOptionsOpen}) => isNavOptionsOpen ? '#000' : 'inherit'};
    transition: background-color 0.25s ease-in-out;
`

const NavItems = styled.ul`
    display: none;
    gap: 2rem;
    align-items:center;
    @media screen and (min-width: 768px) {
        display: flex;
    }
`

const NavItem = styled.li`

    &:hover {
        background-color: #2B2D3D;
    border-radius: 10px;
    padding: 10px;
    }
   
`

const HamburgerImg = styled(Image)`
    display: block;
    @media screen and (min-width: 768px) {
        display: none;
    }
`
const ButtonContainer = styled.div`
    display: none;
    align-items: center;
    gap: 10px;
    @media screen and (min-width: 768px) {
        display: flex;
    }
`

function PaymentHeader() {
    const [isNavOptionsOpen, setNavOpen] =  useState(false)
    const router = useRouter()
    const currentPath = router.asPath.split("/")
    const currentActiveNavLink = currentPath.at(-1) !== currentPath[1] && currentPath.at(-1)

    const handleNavItemClick = (path : string) => {
        setNavOpen(false)
        router.push(`/payment-landing-page${path}`)
    }

  return (
    <>
    <Wrapper isNavOptionsOpen={isNavOptionsOpen}>
        <Image src="/icons/Vector.svg" alt="logo" height={30} width={30}/>
        <HamburgerImg style = {{cursor: 'pointer'}} src={isNavOptionsOpen ? "/icons/close_icon.svg" : "/icons/Hamburger_icon.svg"} alt="logo" height={30} width={30} onClick={() => setNavOpen(!isNavOptionsOpen)}/>

        <NavItems>
            {MenuOptions.map(options => (
                <NavItem key={options.id}>{options.name}</NavItem>
            ))}
        </NavItems>

        <ButtonContainer>
            <Button>Log In</Button>
            <Button>Sign Up</Button>
        </ButtonContainer>
    </Wrapper>
        
    <MenuSLiderPortal isNavOptionsOpen={isNavOptionsOpen} handleNavItemClick={handleNavItemClick} currentActiveNavLink={currentActiveNavLink || 'features'}/>
    </>
  )
}

export default PaymentHeader
