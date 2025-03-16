import React from 'react'
import styled from 'styled-components'


const Form = styled.form`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    width: 100%;
`
const DigitContainer = styled.input`
    all: unset;
    background-color: #1A2036;
    padding: 1rem;
    flex-grow: 1;
    border-radius: 10px;
    color: #2E3650;
    font-family: 'Merriweather', serif;
    min-width: 15px;
    width: auto;
    max-width: 150px;
    color: #B1B9D8;
    font-weight: 800;
    min-height: 40px;
    height: auto;  
    
    &:focus {
        border: 1px solid #E9DCFF;
    }
`

const Button = styled.button`
    background-color: #1A2036;
    border-radius: 8px;
    padding: 0.5rem;
    color: #fff;
    width: 80%;
    max-width: 150px;
    box-shadow: 0 1px 10px #252B42;
`
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
`

type IOTPInputProps = {
    value: number
}

const OTPInput = ({value}: IOTPInputProps) => {
    return(
        <DigitContainer type="text" value={value} />
    )
}


function OTPForm({noOfDigits = 4}: {noOfDigits?: number}) {
  return (
    <Form>
    <InputContainer>
      {new Array(noOfDigits).fill("").map((digit, index) => (
        <OTPInput />
      ))}
      </InputContainer>

      <Button type="submit">Verify OTP</Button>
    </Form>
  )
}

export default OTPForm
