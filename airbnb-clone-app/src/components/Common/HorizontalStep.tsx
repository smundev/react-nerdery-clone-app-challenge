import { useState, useEffect } from 'react'
import styled from 'styled-components'

type HorizontalStepProps = {
  onStepChange: (step: number) => void
  initialStep?: number
}

const HorizontalStepContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors['neutral-06']};
    background-color: #fff;
    color: ${({ theme }) => theme.colors['neutral-07']};
    font-weight: ${({ theme }) => theme.sizes['font-weight-regular']};
    font-size: 1.5rem;
    font-weight: regular;
    cursor: pointer;
    outline: none;
    &:hover {
      color: ${({ theme }) => theme.colors['normal-text']};
      border: 1px solid ${({ theme }) => theme.colors['normal-text']};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors['neutral-04']};
      border: 1px solid ${({ theme }) => theme.colors['neutral-04']};
      cursor: not-allowed;
    }
  }
`

export const HorizontalStep = ({
  onStepChange,
  initialStep = 0,
}: HorizontalStepProps) => {
  const [step, setStep] = useState(initialStep)

  useEffect(() => {
    onStepChange(step)
  }, [step])

  return (
    <HorizontalStepContainer>
      <button disabled={step < 1} onClick={() => setStep((prev) => prev - 1)}>
        -
      </button>
      {step}
      <button onClick={() => setStep((prev) => prev + 1)}>+</button>
    </HorizontalStepContainer>
  )
}
