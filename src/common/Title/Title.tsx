import React, { useEffect, useRef } from 'react'
import { setBackgroundSize } from '../../hooks/useIntersectionObserver'
import s from './Title.module.css'

type Props = {
  title: string
}

const Title = ({ title }: Props) => {
  const ref = useRef<HTMLHeadingElement>(null)

  const setFunction = () => {
    if (ref && ref.current) {
      setBackgroundSize(ref)
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', setFunction)
    return () => {
      document.removeEventListener('scroll', setFunction)
    }
  }, [])

  return (
    <span className={s.title} ref={ref}>
      {title}
    </span>
  )
}

export default Title
