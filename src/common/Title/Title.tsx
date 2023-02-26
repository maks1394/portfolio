import React, { useEffect, useRef } from 'react'
import { setBackgroundSize } from '../../hooks/useIntersectionObserver'
import s from './Title.module.css'

type Props = {
  title: string
}

const Title = ({ title }: Props) => {
  return <span className={s.title}>{title}</span>
}

export default Title
