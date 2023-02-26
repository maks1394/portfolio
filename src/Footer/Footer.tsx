import React from 'react'
import s from './Footer.module.css'
import img from '../images/GitHub-Mark.png'
import vkSvg from './../images/vk.svg'
import gitSvg from './../images/logo-github.svg'
import tgSvg from './../images/telegram-desktop.svg'

type Props = {}
export const Footer = (props: Props) => {
  return (
    <div className={s.footerBlock}>
      <div className={s.container}>
        <h2 className={s.title}>Maksim Gusev</h2>
        <div className={s.links}>
          <a href={''}>
            <img src={vkSvg} alt={'vk'} />
          </a>
          <a href={''}>
            <img src={gitSvg} alt={'gitHub'} />
          </a>
          <a href={''}>
            <img src={tgSvg} alt={'telegram'} />
          </a>
          {/* <a href={''}>
            <img src={img} alt={'git'} />
          </a> */}
        </div>
        <h3 className={s.year}>2023</h3>
      </div>
    </div>
  )
}
