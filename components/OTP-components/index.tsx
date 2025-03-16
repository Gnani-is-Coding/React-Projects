import React from 'react'
import styled from 'styled-components'
import OTPForm from './OTPForm'

const Container = styled.div`
background-color: #1A2036;
height: 100vh;
height: 100dvh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem;
`

const Wrapper = styled.div`
    height: 85%;
    width: 85%;
    background-color: #252B42;
    padding: 1rem;
    border: 1px solid ;
    border-radius: 25px;
    box-shadow: 0 0 10px #111628;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;

    @media screen and (min-width: 768px){
        width: 60%;
    }
`

export const Heading = styled.h1`
    color: #B1B9D8;
    font-size: 1.5rem;
`
const Para = styled.p`
    color: #8795C5;
    font-size: 12px;
`

function OTPComponent() {
    return (
        <Container>
            <Wrapper>
                <Heading>Verify Your Email Addresss</Heading>
                <Para>A four-digit code has been sent to your email name@frontendpro.dev.Please enter the code below
                     to verify your email address.</Para>

                <OTPForm/>
            </Wrapper>
        </Container>
    )
}

export default OTPComponent
