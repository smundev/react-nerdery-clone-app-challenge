import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import { Login } from '../Login'
import { Wrapper } from '../../../../test/jest/__mocks__/wrapperMock'

const LoginWrapper = () => {
  const { openLogin, LoginForm } = Login({
    user: null,
    signIn: jest.fn(),
    error: null,
    clearErrors: () => null,
  })

  return (
    <>
      <button onClick={openLogin}>Toggle modal</button>
      {LoginForm()}
    </>
  )
}

it('login-renders-properly', async () => {
  const rendered = render(<LoginWrapper />, { wrapper: Wrapper })

  const toggleButton = rendered.getByText('Toggle modal')
  await userEvent.click(toggleButton)

  screen.getByText('Welcome to Airbnb')
})

it('login-with-no-credentials', async () => {
  render(<LoginWrapper />, { wrapper: Wrapper })

  const toggleButton = screen.getByText('Toggle modal')
  await userEvent.click(toggleButton)

  const loginButton = screen.getByRole('button', { name: /login/i })
  await userEvent.click(loginButton)

  expect(screen.getByText(/invalid email or format/i)).toBeInTheDocument()
  expect(screen.getByText(/password is required/i)).toBeInTheDocument()
})

it('login-fails-with-invalid-credentials', async () => {
  const signIn = jest.fn()
  const LoginErrorWrapper = () => {
    const { openLogin, LoginForm } = Login({
      user: null,
      signIn,
      error: 'An error has ocurred while trying to login',
      clearErrors: () => null,
    })

    return (
      <>
        <button onClick={openLogin}>Toggle modal</button>
        {LoginForm()}
      </>
    )
  }

  render(<LoginErrorWrapper />, { wrapper: Wrapper })

  const toggleButton = screen.getByText('Toggle modal')
  await userEvent.click(toggleButton)

  const emailInput = screen.getByRole('textbox')
  const passwordInput = screen.getByPlaceholderText(/password/i)

  await userEvent.type(emailInput, 'test@test.com')
  await userEvent.type(passwordInput, '12345678')

  const loginButton = screen.getByRole('button', { name: /login/i })
  await userEvent.click(loginButton)

  await waitFor(() => {
    expect(signIn).toHaveBeenCalled()
    expect(signIn).toHaveBeenCalledWith('test@test.com', '12345678')
    expect(
      screen.getByText('An error has ocurred while trying to login')
    ).toBeInTheDocument()
  })
})
