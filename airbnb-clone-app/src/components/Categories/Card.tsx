import { IconType } from 'react-icons/lib'
import { StyledCard } from './Card.styled'

export type CategoryType = {
  label: string
  icon: IconType
  selected?: boolean
}

export const Card: React.FC<CategoryType> = ({
  label,
  selected = false,
  icon: Icon,
}) => {
  return (
    <StyledCard isSelected={selected}>
      <Icon size={26} />
      {label}
    </StyledCard>
  )
}
