import styled from 'styled-components'

type Props = {
  direction?: string
  gap?: string
}

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '0'};
  flex: 1;
  flex-wrap: wrap;
`
