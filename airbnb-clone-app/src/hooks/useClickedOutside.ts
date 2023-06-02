import { useEffect, useRef, useState } from 'react'

type Props = {
  dependencies: React.DependencyList
}

type UseClickedOutsideReturn<T> = [boolean, React.RefObject<T>]

export const useClickedOutside = <T>({
  dependencies,
}: Props): UseClickedOutsideReturn<T> => {
  const componentRef = useRef<T>(null)
  const [clickedOutside, setClickedOutside] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickOutside =
        (componentRef.current instanceof HTMLElement &&
          !componentRef.current.contains(event.target as Node)) ||
        false

      setClickedOutside(clickOutside)
    }
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [...dependencies])

  return [clickedOutside, componentRef]
}
