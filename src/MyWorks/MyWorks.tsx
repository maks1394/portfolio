// @flow
import React, { RefObject, useEffect, useMemo, useRef } from 'react'
import s from './MyWorks.module.css'
import { ProgressBar, Work } from './Work/Work'
import img from '../images/1.png'
import Title from '../common/Title/Title'
import { Slider } from './Slider/Slider'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import Slide from '@mui/material/Slide'
import { ActiveContext } from '../Layout/Layout'

const items = [
  {
    title: 'Work 1',
    description: 'asdasfsdfsdf asdasda asdasd s sad asdsadads',
    img: img,
    src: 'https://google.com/',
  },
  {
    title: 'Work 1',
    description: 'asdasfsdfsdf asdasda asdasd s sad asdsadads',
    img: img,
    src: 'https://yandex.com/',
  },
  {
    title: 'Work 1',
    description: 'asdasfsdfsdf asdasda asdasd s sad asdsadads',
    img: img,
    src: 'https://vk.com/',
  },
  {
    title: 'Work 1',
    description: 'asdasfsdfsdf asdasda asdasd s sad asdsadads',
    img: img,
    src: 'https://bing.com/',
  },
]

type Props = {}
export const MyWorks = (props: Props) => {
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
      nav.setActiveTitle('Works')
    }
  }, [isIntersecting])
  return (
    <>
      <div ref={ref} className={s.worksBlock} id="Works">
        <Slide
          appear={false}
          direction="right"
          in={slideIn}
          container={ref.current}
          timeout={1000}
        >
          <div className={s.container}>
            <Title title={'My Works'} />
            {/*<div className={s.works}>*/}
            {/*    <Work*/}
            {/*        title={'Work 1'}*/}
            {/*        description={'asdasfsdfsdf asdasda asdasd s sad asdsadads'}*/}
            {/*        img={img}*/}
            {/*        src={'https://vk.com/'}*/}
            {/*    />*/}
            {/*    <Work*/}
            {/*        title={'Work 1'}*/}
            {/*        description={'asdasfsdfsdf asdasda asdasd s sad asdsadads'}*/}
            {/*        img={img}*/}
            {/*        src={'https://vk.com/'}*/}
            {/*    />*/}
            {/*    <Work*/}
            {/*        title={'Work 1'}*/}
            {/*        description={'asdasfsdfsdf asdasda a'}*/}
            {/*        img={img}*/}
            {/*        src={'https://vk.com/'}*/}
            {/*    />*/}
            {/*</div>*/}
            <Slider items={items} />
          </div>
        </Slide>
      </div>
    </>
  )
}
