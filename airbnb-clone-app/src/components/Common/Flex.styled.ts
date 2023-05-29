import styled from 'styled-components'

type Props = {
  direction?: string
  gap?: string
  backgroundColor?: string
  padding?: string
  margin?: string
}

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '0'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  flex: 1;
  flex-wrap: wrap;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.body};
`
