import React, { useRef, useEffect, useState } from 'react'
import {
  StyledScrollButton,
  StyledScrollContainer,
} from './StyledScrollContainer.styled'
import { LeftArrow, RightArrow } from '../Icons/Icons'

interface ScrollContainerProps {
  children: React.ReactNode
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [hideLeftButton, setHideLeftButton] = useState(true)
  const [hideRightButton, setHideRightButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setHideLeftButton(scrollLeft <= 0)
        setHideRightButton(
          Math.round(scrollLeft) >= Math.round(scrollWidth - clientWidth)
        )
      }
    }

    const handleResize = () => {
      handleScroll()
    }

    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -500,
        behavior: 'smooth',
      })
    }
  }

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <div>
        <StyledScrollButton
          onClick={handleScrollLeft}
          disabled={hideLeftButton}
        >
          <LeftArrow />
        </StyledScrollButton>
      </div>
      <StyledScrollContainer ref={scrollRef}>{children}</StyledScrollContainer>
      <div>
        <StyledScrollButton
          onClick={handleScrollRight}
          disabled={hideRightButton}
        >
          <RightArrow />
        </StyledScrollButton>
      </div>
    </>
  )
}
