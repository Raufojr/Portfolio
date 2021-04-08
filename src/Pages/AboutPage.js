import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'Web'} span={'Developer'} />
            <ImageSection />
            <Tittle title={'Habilidades'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'40%'} width={'50%'} />
                <SkillsSection skill={'Node Js'} progress={'35%'} width={'35%'} />
                <SkillsSection skill={'Css3'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Html5'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Php'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Web Design'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'20%'} width={'20%'} />
                <SkillsSection skill={'WordPress'} progress={'50%'} width={'50%'} />
            </div>

            <Tittle title={'<Services>'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'}
                    text={'Meu foco é nos fundamentos por trás de cada decisão de design ou código '}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />


            </div>

        </div>
    )
}

export default AboutPage;
