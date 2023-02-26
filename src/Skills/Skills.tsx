import React, { RefObject, useEffect, useRef } from 'react'
import s from './Skills.module.css'
import { Skill } from './Skill/Skill'
import {
  setBackgroundSize,
  WriteParamsObserver,
} from '../hooks/useIntersectionObserver'
import Title from '../common/Title/Title'

type Props = {}
export const Skills = (props: Props) => {
  return (
    <>
      <div className={s.skillsBlock}>
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
      </div>
    </>
  )
}
