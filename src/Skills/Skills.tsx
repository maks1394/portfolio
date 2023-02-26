import React, { RefObject, useEffect, useRef } from 'react'
import s from './Skills.module.css'
import { Skill } from './Skill/Skill'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import Title from '../common/Title/Title'
import Slide from '@mui/material/Slide'
import { ActiveContext } from '../Layout/Layout'

type Props = {}
export const Skills = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver(ref, {
    rootMargin: '-50%',
  })
  const nav = React.useContext(ActiveContext)
  useEffect(() => {
    if (isIntersecting) {
      nav.setActiveTitle('Skills')
    }
  }, [isIntersecting])
  const prevIsIntersecting = useRef<boolean | null>(null)
  const slideIn = prevIsIntersecting.current === true ? true : isIntersecting
  useEffect(() => {
    prevIsIntersecting.current = isIntersecting
  }, [isIntersecting])
  return (
    <>
      <div ref={ref} className={s.skillsBlock} id="Skills">
        <Slide
          appear={false}
          direction="left"
          in={slideIn}
          container={ref.current}
          timeout={1000}
        >
          <div className={s.container}>
            <Title title={'Skills'} />
            <div className={s.skills}>
              <Skill title={'JS'} description={'BLBLBLLBLB'} />
              <Skill title={'CSS'} description={'BLBLBLLBLB'} />
              <Skill
                title={'React'}
                description={'BLBLBLLBLB BLBLBLLBLB BLBLBLLBLB BLBLBLLBLB'}
              />
            </div>
          </div>
        </Slide>
      </div>
    </>
  )
}
