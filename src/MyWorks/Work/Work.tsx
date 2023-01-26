import React from 'react';
import s from './Work.module.css'
import SuperButton from "../../common/SuperButton/SuperButton";

type Props = {
    img:string
    title:string
    description:string
    src:string
};
export const Work = (props: Props) => {
    return (
        <div className={s.card}>
            <div className={s.imageContainer}>
                <img src={props.img} alt="work" className={s.img}/>
                <a href="https://github.com/">
                <SuperButton className={s.button} xType={'secondary'}>Look</SuperButton>
                </a>
            </div>
            <div className={s.description}>
                <h3>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};