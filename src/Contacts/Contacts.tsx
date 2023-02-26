// @flow
import * as React from 'react'
import s from './Contacts.module.css'
import SuperInputText from '../common/SuperInputText/SuperInputText'
import SuperTextArea from '../common/SuperTextArea/SuperTextArea'
import { StyledButton } from '../common/SuperButton/StyledButton/StyledButton'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { Form } from './Form/Form'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { ActiveContext } from '../Layout/Layout'

type Props = {}
export const Contacts = (props: Props) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { rootMargin: '-50%' })
  const nav = React.useContext(ActiveContext)
  React.useEffect(() => {
    if (isIntersecting) {
      nav.setActiveTitle('Contacts')
    }
  }, [isIntersecting])
  return (
    <div ref={ref} className={s.contactsBlock} id="Contacts">
      <div className={s.container}>
        <h2 className={s.title}>Contacts</h2>
        {/*<form className={s.form}>*/}
        {/*    <SuperInputText placeholder={'Your name'} className={s.maxWidth + ' ' + s.input}/>*/}
        {/*    <SuperInputText placeholder={'Telephone'} className={s.maxWidth+ ' ' + s.input}/>*/}
        {/*    <SuperTextArea className={s.textArea + ' ' + s.maxWidth + ' ' + s.input} placeholder={'Comments...'} />*/}
        {/*    <StyledButton className={s.buttonSend}>Send</StyledButton>*/}
        {/*</form>*/}
        <Form />
      </div>
    </div>
  )
}
