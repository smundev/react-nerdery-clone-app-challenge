import React from 'react'
import { Categories } from '../Categories/Categories'
import { Flex } from '../Common/Flex.styled'
import { Navbar } from './Nav/Navbar'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Flex>{children}</Flex>
    </>
  )
}

export default Layout
