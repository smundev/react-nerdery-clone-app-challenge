import { IconType } from 'react-icons/lib'
import { StyledCard } from './Card.styled'

export type CategoryType = {
  label: string
  icon: IconType
  selected?: string
}

export const Card: React.FC<CategoryType> = ({
  label,
  selected = 'false',
  icon: Icon,
}) => {
  return (
    <StyledCard
      to={{
        pathname: '/',
        search: `?q=${label}`,
      }}
      isselected={selected}
    >
      <Icon size={26} />
      {label}
    </StyledCard>
  )
}
