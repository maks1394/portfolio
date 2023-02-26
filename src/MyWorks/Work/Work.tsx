import React, { useEffect, useRef } from 'react'
import s from './Work.module.css'
import SuperButton from '../../common/SuperButton/SuperButton'
import { StyledButton } from '../../common/SuperButton/StyledButton/StyledButton'

export type WorkPropsType = {
  img: string
  title: string
  description: string
  src: string
  className?: string
}
export const Work = (props: WorkPropsType) => {
  return (
    <div className={s.card + ' ' + props.className}>
      <div className={s.imageContainer}>
        <img src={props.img} alt="work" className={s.img} />
        {/*<a href="https://github.com/">*/}
        {/*    <SuperButton xType={'red'} className={s.button}>*/}
        {/*        Look*/}
        {/*    </SuperButton>*/}
        {/*</a>*/}
      </div>
      {/* <div className={s.description}>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
      </div> */}
      {/* <a href="https://github.com/">
                <SuperButton xType={'red'} className={s.button}>
                    Look
                </SuperButton>
            </a> */}
    </div>
  )
}

//write component with intersectionObserver which display each percent

export const ProgressBar: React.FC<{ percent: number }> = ({ percent }) => {
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(`${percent}% visible`)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    )

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current)
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current)
      }
    }
  }, [percent])

  return (
    <div ref={progressBarRef}>
      <div
        style={{
          width: `${percent}%`,
          height: '20px',
          backgroundColor: '#0099ff',
        }}
      />
    </div>
  )
}
