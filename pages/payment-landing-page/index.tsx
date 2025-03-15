import { useRouter } from 'next/router'
import { useEffect } from 'react'

function PaymentLandingPage() {
  const router  = useRouter()

  useEffect(() => {
    router.replace('/payment-landing-page/features')
  }, [])

  return null
}

export default PaymentLandingPage
