import React from 'react'
import PaymentHeader from './PaymentHeader'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #1E1E1E;
  color: #fff;
  min-height: 100vh;
  padding: 1rem 2rem;
  overflow: hidden;
`

function PaymentsLayout({ children }: {children: React.ReactNode}) {
  return (
    <div id="landing-page">
      <PaymentHeader/>
      <Wrapper>
      {children}
      </Wrapper>
    </div>
  )
}

export default PaymentsLayout
