import { ScrollContainer } from '../Styles/Common/ScrollContainer'
import { Card } from './Card'
import { StyledCategory } from './Category.Styled'
import { categories } from './catalog'

export const Categories = () => {
  return (
    <StyledCategory>
      <ScrollContainer>
        {categories.map((item, i) => {
          return <Card key={i} label={item.label} icon={item.icon} />
        })}
      </ScrollContainer>
    </StyledCategory>
  )
}
