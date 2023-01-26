import React from 'react';
import s from './Header.module.css'
import {Nav} from "./Nav/Nav";

type Props = {

};
export const Header = (props: Props) => {
    return (
        <div className={s.header}>
            <div className={s.container}>
            <Nav/>
            </div>
        </div>
    );
};