import StyledComponentsRegistry from '@/UI-lib/styled-components-registry'
import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  )
}

export default Layout
