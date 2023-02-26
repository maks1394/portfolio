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
  const rect = elem?.getBoundingClientRect()
  const resultObj: { [key: string]: number } = {}
  for (let key in rect) {
    if (typeof rect[key] !== 'function') {
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

export const setBackgroundSize = (
  ref: RefObject<HTMLSpanElement>,
  template:(percent:number)=>void=template1,
  styleProperty: keyof CSSStyleDeclaration = 'backgroundSize',
) => {
  const paramsOfObject: paramsOfElement = WriteParamsObserver(
    ref
  ) as paramsOfElement
  let stylePropertyInCss = keyReplace(styleProperty)

  const h1 = paramsOfObject?.height / 2 // высота от bottom элемента до точки, где мы хотим, чтобы percent был равен нулю. Ось направлена вверх.
  let h2 = -paramsOfObject.windowHeight / 2 + paramsOfObject?.height / 2 // высота от bottom элемента до точки, где мы хотим, чтобы percent был равен 100. Ось направлена вверх.
  let percent =
    (100 / (h2 - h1)) * (paramsOfObject.bottom - paramsOfObject.windowHeight) +
    (100 * h1) / (h1 - h2)
  percent = Math.max(Math.round(percent * 100) / 100, 0)

  if (ref.current) {
    // ref.current.style[styleProperty] = `${percent}% 100%`
    ref.current.style.cssText = `${stylePropertyInCss}: ${template(percent)}`
    // ref.current.setAttribute('style',`background-size: ${percent}% 100%;`)
  }
}

export const setOpacityHide = (
    ref: RefObject<HTMLSpanElement>,
    // template:(percent:number)=>void=template1,
    // styleProperty: keyof CSSStyleDeclaration = 'backgroundSize',
) => {
  const paramsOfObject: paramsOfElement = WriteParamsObserver(
      ref
  ) as paramsOfElement
  // let stylePropertyInCss = keyReplace(styleProperty)

  const h1 = 0 // высота от bottom элемента до точки, где мы хотим, чтобы percent был равен нулю. Ось направлена вверх.
  let h2 = -paramsOfObject.windowHeight / 2// высота от bottom элемента до точки, где мы хотим, чтобы percent был равен 100. Ось направлена вверх.
  let y = paramsOfObject.bottom - paramsOfObject.windowHeight
  if (y>h1 || y<h2) return
  // console.log('y',y)
  let percent =
      (100 / (h2 - h1)) * (paramsOfObject.bottom - paramsOfObject.windowHeight) +
      (100 * h1) / (h1 - h2)
  percent = Math.max(Math.round(percent * 10) / 10, 0) /1.25 // добавил разделить на 2 чтобы масимальное число процентов было 50

  if (ref.current) {
    // ref.current.style[styleProperty] = `${percent}% 100%`
    ref.current.style.cssText = `opacity: calc(1 - ${percent/100})`
    // console.log(`opacity: ${percent/100}`)
    // ref.current.setAttribute('style',`background-size: ${percent}% 100%;`)
  }
}
export const setOpacityShow = (
    ref: RefObject<HTMLSpanElement>,
    // template:(percent:number)=>void=template1,
    // styleProperty: keyof CSSStyleDeclaration = 'backgroundSize',
) => {
  const paramsOfObject: paramsOfElement = WriteParamsObserver(
      ref
  ) as paramsOfElement
  // let stylePropertyInCss = keyReplace(styleProperty)

  const h1 = paramsOfObject.height // высота от bottom элемента до точки, где мы хотим, чтобы percent был равен нулю. Ось направлена вверх.
  let h2 = -paramsOfObject.windowHeight / 2 + paramsOfObject.height// высота от bottom элемента до точки, где мы хотим, чтобы percent был равен 100. Ось направлена вверх.
  let y = paramsOfObject.bottom - paramsOfObject.windowHeight
  if (y>h1 || y<h2) return
  let percent = 20 + 0.8*(
      (100 / (h2 - h1)) * (paramsOfObject.bottom - paramsOfObject.windowHeight) +
      (100 * h1) / (h1 - h2)
  )
  percent = Math.max(Math.round(percent * 10) / 10, 0)

  if (ref.current) {
    // ref.current.style[styleProperty] = `${percent}% 100%`
    ref.current.style.cssText = `opacity: calc(${percent/100})`
    // console.log(`opacity: ${percent/100}`)
    // ref.current.setAttribute('style',`background-size: ${percent}% 100%;`)
  }
}

function template1 (percent:number):string{
  return `${percent}% 100%`
}

const template1Creator = ()=>{
  return template1
}

function keyReplace(key: any) {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase() + ''
}
