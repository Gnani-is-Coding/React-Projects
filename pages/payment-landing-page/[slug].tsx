import PaymentsLayout from '@/components/Payments-landing-page/Layout'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`
const HeadingH4 = styled.h4`
  color: #E9DCFF;
  font-size: 1rem;
  font-weight: 400;
`

const EllipseImg = styled(Image)`
  position: absolute;
  bottom: -30%;
  left: 10%;
  display: none;

  @media screen and (min-width: 1024px){
    display: block;
  }
`

export const Button = styled.button`
background-color: #E9DCFF;
color: #1E1E1E;
font-weight: bold;
padding: 10px;
border-radius: 10px;
font-size: 1rem;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`

function PaymentLandingPage() {

  return (
    <>
      <PaymentsLayout>
        <MainContainer>
          <div>
          <HeadingH4>Start Saving Money</HeadingH4>
          <h1 className='hero-heading'>Smart Credit Card For your Daily Life.</h1>

          <Button type="button">
          Download 
          <span>
            <Image src="/icons/download.svg" alt="download" width={15} height={15}/>
          </span>
        </Button>
        </div>
        <Image src="/Hero_Image.svg" alt="Hero_Image" width={550} height={700}/>

        <EllipseImg src="/icons/Ellipse.svg" alt="ellipse" width={600} height={750}/>
      </MainContainer>
      </PaymentsLayout>
    </>
  )
}

export default PaymentLandingPage
