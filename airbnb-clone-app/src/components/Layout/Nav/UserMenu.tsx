import { BiMenu } from 'react-icons/bi'
import { StyledAvatar, StyledUserMenu } from './UserMenu.styled'
import {
  FloatingMenuItem,
  FloatingMenuWrapper,
} from '../../Common/FloatingMenu.styled'
import { useToggle } from '../../../hooks/useToggle'
import { useClickedOutside } from '../../../hooks/useClickedOutside'
import { useEffect } from 'react'
import { useAuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const MENU_OPTIONS = {
  LOGIN: Symbol('login'),
  SIGN_UP: Symbol('sign up'),
  LOG_OUT: Symbol('log out'),
  WISHLIST: Symbol('wishlist'),
  BECOME_HOST: Symbol('become host'),
  HELP: Symbol('help'),
}

export const UserMenu = () => {
  const [isExpanded, toggleIsExpanded] = useToggle(false)
  const [clickedOutside, componentRef] = useClickedOutside<HTMLDivElement>({
    dependencies: [isExpanded],
  })
  const { user, logOut, openLogin, openSignup } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (isExpanded && clickedOutside) {
      handleExpand()
    }
  }, [clickedOutside])

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isExpanded) {
        toggleIsExpanded()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isExpanded])

  const handleExpand = () => {
    toggleIsExpanded()
  }

  const handleClick = (option: Symbol) => {
    switch (option) {
      case MENU_OPTIONS.LOGIN:
        openLogin()
        break
      case MENU_OPTIONS.SIGN_UP:
        openSignup()
        break
      case MENU_OPTIONS.LOG_OUT:
        logOut()
        break
      case MENU_OPTIONS.WISHLIST:
        navigate('/wishlist')
        break
      case MENU_OPTIONS.BECOME_HOST:
        break
      case MENU_OPTIONS.HELP:
        break
      default:
        break
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
        <StyledAvatar url={user?.user.avatar} />
        <FloatingMenuWrapper
          width={'223px'}
          expanded={isExpanded}
          right="0"
          margin="20px 20px"
        >
          {!user && (
            <>
              <FloatingMenuItem
                onClick={() => handleClick(MENU_OPTIONS.SIGN_UP)}
              >
                Sign up
              </FloatingMenuItem>
              <FloatingMenuItem
                fontWeight="font-weight-bold"
                onClick={() => handleClick(MENU_OPTIONS.LOGIN)}
              >
                Log in
              </FloatingMenuItem>
            </>
          )}

          {user && (
            <>
              <FloatingMenuItem
                fontWeight="font-weight-bold"
                onClick={() => handleClick(MENU_OPTIONS.WISHLIST)}
              >
                My Wishlist
              </FloatingMenuItem>
              <FloatingMenuItem
                onClick={() => handleClick(MENU_OPTIONS.LOG_OUT)}
              >
                Log out
              </FloatingMenuItem>
            </>
          )}
        </FloatingMenuWrapper>
      </StyledUserMenu>
    </>
  )
}
