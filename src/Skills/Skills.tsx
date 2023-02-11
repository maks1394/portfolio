import React, { RefObject, useEffect, useRef } from 'react'
import s from './Skills.module.css'
import { Skill } from './Skill/Skill'
import {
  setBackgroundSize,
  WriteParamsObserver,
} from '../hooks/useIntersectionObserver'

type Props = {}
export const Skills = (props: Props) => {
  const ref = useRef(null)
  const refOfSkills = useRef<HTMLDivElement>(null)

  const expFuntion = () => {
    if (ref && ref.current) {
      setBackgroundSize(ref, refOfSkills)
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', expFuntion)
    return () => {
      document.removeEventListener('scroll', expFuntion)
    }
  }, [])
  return (
    <>
      <div className={s.skillsBlock}>
        <div className={s.container}>
          <span className={s.title} ref={ref}>
            Skills
          </span>
          <div ref={refOfSkills} className={s.skills}>
            <Skill title={'JS'} description={'BLBLBLLBLB'} />
            <Skill title={'CSS'} description={'BLBLBLLBLB'} />
            <Skill
              title={'React'}
              description={'BLBLBLLBLB BLBLBLLBLB BLBLBLLBLB BLBLBLLBLB'}
            />
          </div>
        </div>
      </div>
    </>
  )
}
