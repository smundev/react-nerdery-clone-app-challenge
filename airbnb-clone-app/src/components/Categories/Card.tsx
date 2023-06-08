import { IconType } from 'react-icons/lib'
import { StyledCard } from './Card.styled'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

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
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()

  const updateSearchParams = () => {
    searchParams.set('property_type', label)
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    })
  }

  return (
    <StyledCard
      role="option"
      onClick={updateSearchParams}
      isselected={selected}
    >
      <Icon size={26} />
      {label}
    </StyledCard>
  )
}
