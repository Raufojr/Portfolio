import React from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
//import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Olá, tudo bem? <br />

                </h1>

                <span> Eu sou Raufo Junior Desenvolvedor Web</span>


                <p className="h-sub-text">

                    Sou  desenvolvedor Front-end, com quase 3 anos de experiência. Já trabalhei nos projetos seven7 Estética, Sharp do Corte, Gifts Gourmet, Deza Chocolates, Dr Ana piscologia , além de  outros projetos desenvolvidos em cursos e faculdade.
                    Essa diversidade garantiu  experiência em diversos segmentos:
                </p>
                <div className="icons">

                    <a target="_blank" href="https://github.com/Raufojr" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/in/raufo-rastrero-junior-3a937527/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon ld" /> </a>


                    <a target="_blank" href="https://www.youtube.com/channel/UCw5uRTjEaNhpLeyySN1-nag/playlists" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCw5uRTjEaNhpLeyySN1-nag/playlists" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon st" />
                    </a>
                </div>
            </header>
        </div >
    )
}

export default HomePage;
