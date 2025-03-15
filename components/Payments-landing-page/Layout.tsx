import React from 'react'
import PaymentHeader from './PaymentHeader'

function PaymentsLayout({ children }: {children: React.ReactNode}) {
  return (
    <div>
      <PaymentHeader/>
      {children}
    </div>
  )
}

export default PaymentsLayout
