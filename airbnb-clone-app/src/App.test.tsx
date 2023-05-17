import React from 'react'
import App from './App'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('App', () => {
  it('renders the app component', () => {
    const { getByText } = render(<App />)
    const appElement = getByText('this is a new project')
    expect(appElement).toBeInTheDocument()
  })
})
