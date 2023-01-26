import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill";

type Props = {

};
export const Skills = (props: Props) => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'BLBLBLLBLB'}/>
                    <Skill title={'CSS'} description={'BLBLBLLBLB'}/>
                    <Skill title={'React'} description={'BLBLBLLBLB'}/>
                </div>
            </div>
        </div>
    );
};