// @flow
import React from 'react';
import s from './MyWorks.module.css'
import {Work} from "./Work/Work";
import img from '../images/1.png'


type Props = {

};
export const MyWorks = (props: Props) => {
    return (
        <div className={s.worksBlock}>
            <div className={s.container}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.works}>
                    <Work title={'Work 1'} description={'asdasfsdfsdf asdasda asdasd s sad asdsadads'} img={img} src={'https://vk.com/'}/>
                    <Work title={'Work 1'} description={'asdasfsdfsdf asdasda asdasd s sad asdsadads'} img={img} src={'https://vk.com/'}/>
                    <Work title={'Work 1'} description={'asdasfsdfsdf asdasda a'} img={img} src={'https://vk.com/'}/>
                </div>
            </div>
        </div>
    );
};