import React, { RefObject } from 'react'

export const useIntersectionObserver = (
  ref: any,
  options: IntersectionObserverInit
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.unobserve(ref.current)
    }
  }, [])

  return isIntersecting
}

export const WriteParamsObserver = (ref: any) => {
  if (!ref) return ''
  const elem = ref.current
  let resultExp = ''
  const rect = elem?.getBoundingClientRect()
  const resultObj: { [key: string]: number } = {}
  for (let key in rect) {
    if (typeof rect[key] !== 'function') {
      //  console.log(`${key} : ${rect[key]}`);
      resultExp += `${key} : ${rect[key]} `
      resultObj[key] = rect[key]
    }
  }
  resultObj.windowHeight = window.innerHeight

  return resultObj
}

type paramsOfElement = {
  bottom: number
  height: number
  left: number
  right: number
  top: number
  width: number
  windowHeight: number
  x: number
  y: number
}

export const setBackgroundSize = (ref: RefObject<HTMLHeadingElement>, ref2?: any) => {
  const paramsOfObject: paramsOfElement = WriteParamsObserver(
    ref
  ) as paramsOfElement
  const h1 = paramsOfObject?.height / 2
  let h2 = -300
  // if (ref2) {
  //   const paramsOfObject2: paramsOfElement = WriteParamsObserver(
  //     ref2
  //   ) as paramsOfElement
  //   h2 = -paramsOfObject2?.height / 2
  // }
  let percent =
    (100 / (h2 - h1)) * (paramsOfObject.bottom - paramsOfObject.windowHeight) +
    (100 * h1) / (h1 - h2)
  percent = Math.max(Math.round(percent * 100) / 100, 0)
  if (ref.current) {
    ref.current.style.backgroundSize = `${percent}% 100%`
    console.log(`${percent}% 100%`)
  }
  // debugger
}
