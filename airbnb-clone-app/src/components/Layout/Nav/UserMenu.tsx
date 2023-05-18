import { BiMenu } from 'react-icons/bi'
import { StyledAvatar, StyledUserMenu } from './UserMenu.styled'
import {
  FloatingMenuItem,
  FloatingMenuWrapper,
} from '../../Common/FloatingMenu.styled'
import { useToggle } from '../../hooks/useToggle'
import { useClickedOutside } from '../../hooks/useClickedOutside'
import { useEffect } from 'react'
import { Login } from '../../Auth/Login'

const MENU_OPTIONS = {
  LOGIN: Symbol('login'),
  SIGN_UP: Symbol('sign up'),
  BECOME_HOST: Symbol('become host'),
  HELP: Symbol('help'),
}

export const UserMenu = () => {
  const [isExpanded, toggleIsExpanded] = useToggle(false)
  const [clickedOutside, componentRef] = useClickedOutside({
    dependencies: [isExpanded],
  })
  const [openModal, , LoginForm] = Login()

  useEffect(() => {
    if (isExpanded && clickedOutside) {
      handleExpand()
    }
  }, [clickedOutside])

  const handleExpand = () => {
    toggleIsExpanded()
  }

  const handleClick = (option: Symbol) => {
    if (option === MENU_OPTIONS.LOGIN) {
      openModal()
    }
  }

  return (
    <>
      <StyledUserMenu
        ref={componentRef}
        onClick={handleExpand}
        draggable={false}
      >
        <BiMenu fontSize="1.5em" />
        <StyledAvatar />
        <FloatingMenuWrapper width={'223px'} expanded={isExpanded}>
          <FloatingMenuItem
            fontWeight="font-weight-bold"
            onClick={() => handleClick(MENU_OPTIONS.LOGIN)}
          >
            Log in
          </FloatingMenuItem>
          <FloatingMenuItem onClick={() => handleClick(MENU_OPTIONS.SIGN_UP)}>
            Sign up
          </FloatingMenuItem>
          <FloatingMenuItem separator={true} />
          <FloatingMenuItem
            onClick={() => handleClick(MENU_OPTIONS.BECOME_HOST)}
          >
            Airbnb your home
          </FloatingMenuItem>
          <FloatingMenuItem onClick={() => handleClick(MENU_OPTIONS.HELP)}>
            Help
          </FloatingMenuItem>
        </FloatingMenuWrapper>
      </StyledUserMenu>
      {LoginForm()}
    </>
  )
}
