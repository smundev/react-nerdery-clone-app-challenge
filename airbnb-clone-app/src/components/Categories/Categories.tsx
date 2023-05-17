import { RiEqualizerLine } from 'react-icons/ri'
import { SecondaryButton } from '../Styles/Common/Button.styled'
import { ScrollContainer } from '../Styles/Common/ScrollContainer'
import { Card } from './Card'
import { StyledCategory } from './Category.Styled'
import { categories } from './catalog'
import { StickyWrapper } from '../Styles/Common/StickyWrapper'
import { useEffect, useState } from 'react'
import { log } from 'console'

export const Categories = () => {
  const [verticalScroll, setVerticalScroll] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setVerticalScroll(window.scrollY)
      })
    }
  }, [])

  return (
    <StickyWrapper top={84}>
      <StyledCategory showShadow={verticalScroll <= 50}>
        <ScrollContainer>
          {categories.map((item, i) => {
            return <Card key={i} label={item.label} icon={item.icon} />
          })}
        </ScrollContainer>
        <SecondaryButton fontWeight="bold">
          <RiEqualizerLine /> Filters
        </SecondaryButton>
      </StyledCategory>
    </StickyWrapper>
  )
}
