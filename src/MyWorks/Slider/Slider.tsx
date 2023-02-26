// @flow
import * as React from 'react'
import s from './Style.module.css'
import { Work, WorkPropsType } from '../Work/Work'
import { useEffect, useState } from 'react'
import { StyledButton } from '../../common/SuperButton/StyledButton/StyledButton'
import { GrNext, GrPrevious } from 'react-icons/gr'
import SuperButton from '../../common/SuperButton/SuperButton'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

type Props = {
  items: WorkPropsType[]
}
export const Slider = (props: Props) => {
  const [active, setActive] = useState<number>(0)
  const length = props.items.length
  useEffect(() => {
    // let id = setInterval(()=>{
    //     setActive((prevActive)=>(prevActive+1)%length)
    // },4000)
    // return ()=>{
    //     clearInterval(id)
    // }
  }, [])
  return (
    <>
      <div className={s.container}>
        <SuperButton
          xType={'red'}
          onClick={() =>
            setActive(
              (prevActive) => (((prevActive - 1) % length) + length) % length
            )
          }
          className={s.buttonPrev}
        >
          <NavigateBeforeIcon />
        </SuperButton>
        <div className={s.sliderContainer}>
          {props.items.map((el, i) => {
            return (
              <Work
                key={i}
                {...el}
                className={
                  s.slide +
                  ' ' +
                  (i === active
                    ? s.activeSlide
                    : i - 1 === active
                    ? s.nextSlide
                    : active === length - 1 && i === 0
                    ? s.nextSlide
                    : s.prevSlide)
                }
              />
            )
          })}
          {/* <SuperButton
            xType={'red'}
            onClick={() => setActive((prevActive) => (prevActive + 1) % length)}
            className={s.buttonNext}
          >
            <NavigateNextIcon />
          </SuperButton> */}
          <a href={props.items[active].src} target="blank">
            <SuperButton xType={'red'} className={s.button}>
              Look
            </SuperButton>
          </a>
        </div>
        <SuperButton
          xType={'red'}
          onClick={() => setActive((prevActive) => (prevActive + 1) % length)}
          className={s.buttonNext}
        >
          <NavigateNextIcon />
        </SuperButton>
      </div>
    </>
  )
}
