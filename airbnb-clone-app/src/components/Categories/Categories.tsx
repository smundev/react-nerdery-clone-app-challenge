import { ScrollContainer } from '../Common/ScrollContainer'
import { Card } from './Card'
import { StyledCategory } from './Category.Styled'
import { categories } from './catalog'
import { StickyWrapper } from '../Common/StickyWrapper'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Categories = () => {
  const [verticalScroll, setVerticalScroll] = useState(0)
  const [searchParams] = useSearchParams()
  const paramValue = searchParams.get('property_type')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setVerticalScroll(window.scrollY)
      })
    }
  }, [])

  return (
    <StickyWrapper top={84} mobileTop={143} zIndex={1}>
      <StyledCategory showShadow={verticalScroll <= 50}>
        <ScrollContainer>
          {categories.map((item, i) => {
            return (
              <Card
                key={i}
                label={item.label}
                icon={item.icon}
                selected={paramValue === item.label ? 'true' : 'false'}
              />
            )
          })}
        </ScrollContainer>
        {/* TODO - filters not part of MVP
        <SecondaryButton fontWeight="bold">
          <RiEqualizerLine /> Filters
        </SecondaryButton>*/}
      </StyledCategory>
    </StickyWrapper>
  )
}
