import React from 'react'
import s from './Navigation.module.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import HomeIcon from '@mui/icons-material/Home'
import BoltIcon from '@mui/icons-material/Bolt'
import WorkIcon from '@mui/icons-material/Work'
import ContactsIcon from '@mui/icons-material/Contacts'
export type NavigationProps = {
  activeTitle: navTitleType
}

export type navTitleType = 'Home' | 'Skills' | 'Works' | 'Contacts'

export const Navigation: React.FC<NavigationProps> = ({ activeTitle }) => {
  const navData = [
    { title: 'Home', icon: () => <HomeIcon /> },
    { title: 'Skills', icon: () => <BoltIcon /> },
    { title: 'Works', icon: () => <WorkIcon /> },
    { title: 'Contacts', icon: () => <ContactsIcon /> },
  ]
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {/* <li>
          <a>
            <div className={s.icon + ' ' + s.active}>
              <HomeIcon />
            </div>
            <div className={s.text}>Home</div>
          </a>
        </li>
        <li>
          <a>
            <div className={s.icon}>
              <BoltIcon />
            </div>
            <div className={s.text}>Skills</div>
          </a>
        </li>
        <li>
          <a>
            <div className={s.icon}>
              <WorkIcon />
            </div>
            <div className={s.text}>Works</div>
          </a>
        </li>
        <li>
          <a>
            <div className={s.icon}>
              <ContactsIcon />
            </div>
            <div className={s.text}>Contacts</div>
          </a>
        </li> */}
        {navData.map((el, index) => {
          return (
            <li key={index}>
              <a href={`http://localhost:3000/#${el.title}`}>
                <div
                  className={
                    s.icon + (el.title === activeTitle ? ' ' + s.active : '')
                  }
                >
                  {el.icon()}
                </div>
                <div className={s.text}>{el.title}</div>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
