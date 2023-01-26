import React from 'react';
import s from './Footer.module.css'
import img from '../images/GitHub-Mark.png'

type Props = {};
export const Footer = (props: Props) => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Maksim Gusev</h2>
                <div className={s.links}>
                    <a href={''}>
                        <img src={img} alt={'git'}/>
                    </a>
                    <a href={''}>
                        <img src={img} alt={'git'}/>
                    </a>
                    <a href={''}>
                        <img src={img} alt={'git'}/>
                    </a>
                    <a href={''}>
                        <img src={img} alt={'git'}/>
                    </a>
                </div>
                <h3 className={s.title}>2023</h3>
            </div>
        </div>
    );
};