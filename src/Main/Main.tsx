import React from 'react';
import s from './Main.module.css'

type Props = {};
export const Main = (props: Props) => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I am Maksim Gusev</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};