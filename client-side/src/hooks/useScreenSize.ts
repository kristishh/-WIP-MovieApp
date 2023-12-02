import { useEffect, useState } from 'react'

export const BREAKPOINTS = {
  1024: 'bigScreen',
  768: 'smallScreen',
  480: 'tablet',
  0: 'mobile'
}

const initialScreenSize = (): string => {
  const windowsWidthSize = window.innerWidth
  
  if (0 < windowsWidthSize && windowsWidthSize < 480) {
    return BREAKPOINTS[0]
  }
  if (480 < windowsWidthSize && windowsWidthSize < 768) {
    return BREAKPOINTS[480]
  }
  if (768 < windowsWidthSize && windowsWidthSize < 1024) {
    return BREAKPOINTS[768]
  }

  return BREAKPOINTS[1024]
}

const useScreenSize = (containerId = '') => {
  const container = document.getElementById(containerId)
  console.log(container?.getBoundingClientRect())
  
  const containerWidth = container?.getBoundingClientRect().width
  const [windowsWidthSize, setWindowsWidthSize] = useState<number>(containerWidth)
  const [breakpoint, setBreakpoint] = useState<string>(initialScreenSize)

  const handleResize = () =>{
    setWindowsWidthSize(window.innerWidth)
  }

  console.log(windowsWidthSize, '#######')
  

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    if (0 < windowsWidthSize && windowsWidthSize < 480) {
      setBreakpoint(BREAKPOINTS[0])
    }
    if (480 < windowsWidthSize && windowsWidthSize < 768) {
      setBreakpoint(BREAKPOINTS[480])
    }
    if (768 < windowsWidthSize && windowsWidthSize < 1024) {
      setBreakpoint(BREAKPOINTS[768])
    }
    if (windowsWidthSize >= 1024) {
      setBreakpoint(BREAKPOINTS[1024])
    }

  }, [windowsWidthSize])

  return breakpoint
}

export default useScreenSize
