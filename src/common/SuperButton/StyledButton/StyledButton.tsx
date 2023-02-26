// @flow
import * as React from 'react';
import s from './StyledButton.module.css'
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type Props =DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement>
export const StyledButton = ({children,className,...props}: Props) => {
    return (
        <button className={s.sendButton + (className? ' '+className:'')} {...props}><div className={s.buttonTitle}>{children}</div><div className={s.buttonShadow}></div></button>
    );
};