import React from 'react'
import { Navbar } from './Nav/Navbar'
import styled from 'styled-components'

const Children = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Children>{children}</Children>
    </>
  )
}

export default Layout
