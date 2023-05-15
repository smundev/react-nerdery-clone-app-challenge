import styled from 'styled-components'

type StyledCardProps = {
  isSelected: boolean
}

export const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  padding-right: 2rem;
  height: 100%;

  color: ${(props) =>
    props.isSelected
      ? props.theme.colors['normal-text']
      : props.theme.colors['neutral-07']};
  border-bottom: ${(props) =>
    props.isSelected
      ? `2px solid ${props.theme.colors['normal-text']}`
      : 'none'};
  transition: all 0.1s ease;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors['normal-text']};
    border-bottom: 2px solid ${(props) => props.theme.colors['neutral-06']};
  }
`
