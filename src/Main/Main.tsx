import React, { useEffect, useRef } from 'react'
import s from './Main.module.css'
import imgUrl from '../images/IMG_9003.jpg'
import {
  setOpacityHide,
  useIntersectionObserver,
} from '../hooks/useIntersectionObserver'
import Grow from '@mui/material/Grow'
import Slide from '@mui/material/Slide'
import { ActiveContext } from '../Layout/Layout'

type Props = {}
export const Main = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { rootMargin: '-50%' })
  const prevIsIntersecting = useRef<boolean | null>(null)
  const slideIn = prevIsIntersecting.current === true ? true : isIntersecting
  useEffect(() => {
    prevIsIntersecting.current = isIntersecting
  }, [isIntersecting])
  const nav = React.useContext(ActiveContext)
  useEffect(() => {
    if (isIntersecting) {
      nav.setActiveTitle('Home')
    }
  }, [isIntersecting])
  return (
    <div ref={ref} className={s.mainBlock} id="Home">
      <Slide
        appear={false}
        direction="up"
        in={slideIn}
        container={ref.current}
        timeout={1000}
        // exit={false}
      >
        <div className={s.container}>
          <div className={s.text}>
            <span>Hi there</span>
            <h1>I am Maksim Gusev</h1>
            <p>A Frontend Developer</p>
          </div>
          <div className={s.photo}>
            <img className={s.img} src={imgUrl} />
          </div>
        </div>
      </Slide>
    </div>
  )
}
