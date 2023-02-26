import React, { useRef, useState } from 'react'
import s from './Skill.module.css'
import { useEffect } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const AnimationProgress = (
  progressBar: React.RefObject<HTMLDivElement>,
  valueContainer: React.RefObject<HTMLDivElement>,
  startValue: number,
  progressEndValue: number,
  speed: number
) => {
  let progressValue = startValue
  let progress = setInterval(() => {
    progressValue++
    if (valueContainer.current && progressBar.current) {
      valueContainer.current.textContent = `${progressValue}%`
      progressBar.current.style.background = `
            conic-gradient(
                #4d5bf9 ${progressValue * 3.6}deg,
                #cadcff ${progressValue * 3.6}deg
            )
        `
    }
    if (progressValue >= progressEndValue) {
      clearInterval(progress)
    }
  }, speed)
}

type Props = {
  title: string
  description: string
}
export const Skill = (props: Props) => {
  const progressBar = useRef<HTMLDivElement>(null)
  const valueContainer = useRef<HTMLDivElement>(null)
  const onScreen = useIntersectionObserver(progressBar, {
    rootMargin: '0px',
    threshold: 0.5,
  })
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    if (onScreen && firstRender) {
      AnimationProgress(progressBar, valueContainer, 0, 65, 20)
      setFirstRender(false)
    }
  }, [onScreen])
  return (
    <div className={s.skill}>
      {/* <div className={s.icon}></div> */}
      <div className={s.progressContainer}>
        <div ref={progressBar} className={s.circleProgress}>
          <div ref={valueContainer} className={s.skill_value}>
            0%
          </div>
        </div>
      </div>
      <h3 className={s.skillTitle}>{props.title}</h3>
      <span className={s.description}>{props.description}</span>
    </div>
  )
}
