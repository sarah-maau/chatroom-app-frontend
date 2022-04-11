import { DependencyList, useEffect } from 'react'

export interface WindowSize {
  width: number
  height: number
}

/**
 * Hook that execute a function when scroll event is fired
 */
const useWindowSize = (
  callback: (scrollPosition: WindowSize) => void,
  deps?: DependencyList
): void => {
  const handleWindowResize = () => {
    const { innerWidth, innerHeight } = window
    callback({
      width: innerWidth,
      height: innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, { passive: true })
    // We launch a first time the callback
    handleWindowResize()
    return () => window.removeEventListener('resize', handleWindowResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps || [])
}

export default useWindowSize
