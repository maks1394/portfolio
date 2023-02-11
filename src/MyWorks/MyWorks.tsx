// @flow
import React, { RefObject, useMemo, useRef } from 'react'
import s from './MyWorks.module.css'
import { ProgressBar, Work } from './Work/Work'
import img from '../images/1.png'

type Props = {}
export const MyWorks = (props: Props) => {
  //   const expRef = useRef<HTMLDivElement>(null)
  //   const ref = useRef(null)
  //   let resultGlobal = UseIntersectionObserver(ref, {
  //     threshold: [0.1, 0.2, 0.3, 0.4, 0],
  //   })
  //   const expFuntion = () => {
  //     resultGlobal = UseIntersectionObserver(ref, {
  //       threshold: [0.1, 0.2, 0.3, 0.4, 0],
  //     })
  //     if (expRef && expRef.current) {
  //       expRef.current.innerText = resultGlobal
  //     }
  //   }
  //   useEffect(() => {
  //     document.addEventListener('scroll', expFuntion)
  //     return () => {
  //       document.removeEventListener('scroll', expFuntion)
  //     }
  //   }, [])
  return (
    <>
      {/* <div style={{ position: 'fixed', top: 0 }}></div> */}
      <div className={s.worksBlock}>
        <div className={s.container}>
          <h2 className={s.title}>My Works</h2>
          <div className={s.works}>
            <Work
              title={'Work 1'}
              description={'asdasfsdfsdf asdasda asdasd s sad asdsadads'}
              img={img}
              src={'https://vk.com/'}
            />
            <Work
              title={'Work 1'}
              description={'asdasfsdfsdf asdasda asdasd s sad asdsadads'}
              img={img}
              src={'https://vk.com/'}
            />
            <Work
              title={'Work 1'}
              description={'asdasfsdfsdf asdasda a'}
              img={img}
              src={'https://vk.com/'}
            />
          </div>
        </div>
      </div>
    </>
  )
}
