import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Heading } from '.'
import { error } from 'console'


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

    .error {
        border: 1px solid red;
    }
`

type IOTPInputProps = {
    value: number,
    handleOnchange: (i: number, e: React.ChangeEvent<HTMLInputElement>) => void,
    handleBackspace: (i: number, e: React.ChangeEvent<HTMLInputElement>) => void,
    currentindex: number,
    refArrays: React.MutableRefObject<HTMLInputElement>[],
    index: number
}

const OTPInput = ({ index,refArrays,value, handleOnchange, handleBackspace}: IOTPInputProps) => {
    return(
        <DigitContainer ref={(ref) => (refArrays.current[index] = ref)} id={`input-${index}`}  type="text" value={value} 
        maxLength={1}
        onKeyDown={(e) => handleBackspace(index,e)}
        onChange={(e) => handleOnchange(index,e)}/>
    )
}


// Functionality:
/* 
When i enter in first box, the focus should go to next box, when input value.length > 0
should handle edge cases.
*/
const CORRECT_OTP = "1231"

function OTPForm({noOfDigits = 4}: {noOfDigits?: number}) {
    const [inputOtp, setInputOtp] = useState<string[]>(new Array(noOfDigits).fill(""))
    const [isError, sertError] = useState<boolean>(false)
    const [isValidOTp, setValidOtp] = useState<boolean>(false)
    const inputRefs = useRef<HTMLInputElement[]>(new Array(noOfDigits).fill(null))

    useEffect(() => {
        if(isError) {
            inputRefs.current.map(ref => {
                ref.classList.add("error")
            })
        } else {
            inputRefs.current.map(ref => {
                ref.classList.remove("error")
            })
        }
    }, [isError])
    //Implement logic to paste OTP.
    useEffect(() => {
        function handlePaste() {
            navigator.clipboard.readText().then((text) => {
                const otp = text.split("") 
                setInputOtp(otp)
                shiftFocus(otp.length-1)
            })
        }

        document.addEventListener("paste", handlePaste)

        return () => {
            document.removeEventListener("paste", handlePaste)
        }
    }, [])

    //Validate OTP
    const validateOTP = (e: React.FormEvent) => {
        e.preventDefault()

        if(inputOtp.join("") === CORRECT_OTP) {
            setValidOtp(true)
            sertError(false)
        } else {
            setValidOtp(false)
            sertError(true)
        }
    }

    const shiftFocus = (index: number) => {
        inputRefs.current[index]?.focus()
    }

    const handleOnchange = (currentIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
       const {value} = e.target 
       sertError(false)

       if(value.length >= 1) {
            shiftFocus(currentIndex + 1)

            const updatedInputOtp = [...inputOtp]
            updatedInputOtp.splice(currentIndex,1, value)
            setInputOtp(updatedInputOtp)
       }
    }


    const handleBackspace = (currentIndex: number,e) => {
        if(e.key === "Backspace" && currentIndex >= 0) {
                shiftFocus(currentIndex - 1)
                    const updatedArray = [...inputOtp]
                    updatedArray[currentIndex] = ''
                    setInputOtp(updatedArray)
               }
    }

  return (
    <>
    {isValidOTp ? (
        <>
        <Heading>OTP is valid</Heading>
        </>
    ):
    <Form onSubmit={validateOTP}>
    <InputContainer>
      {inputOtp.map((digit, index) => (
        <OTPInput index={index} handleBackspace={handleBackspace} value={digit} key={index} currentindex={index} handleOnchange={handleOnchange} refArrays={inputRefs}/>
      ))}
      </InputContainer>

      <Button type="submit">Verify OTP</Button>
      {isError && <p>Invalid OTP</p> }
    </Form>
    }
    </>
  )
}

export default OTPForm
