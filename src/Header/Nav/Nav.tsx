import React from 'react';
import s from './Nav.module.css'

type Props = {

};
export const Nav = (props: Props) => {
    return (
        <div className={s.nav}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
};