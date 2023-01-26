// @flow
import * as React from 'react';
import s from './Contacts.module.css'
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperTextArea from "../common/SuperTextArea/SuperTextArea";
import SuperButton from "../common/SuperButton/SuperButton";

type Props = {

};
export const Contacts = (props: Props) => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <SuperInputText placeholder={'Your name'} className={s.maxWidth}/>
                    <SuperInputText placeholder={'Telephone'} className={s.maxWidth}/>
                    <SuperTextArea className={s.textArea + ' ' + s.maxWidth} placeholder={'Comments...'} />
                    <SuperButton xType={'red'} className={s.sendButton}>Send</SuperButton>
                </form>
            </div>
        </div>
    );
};