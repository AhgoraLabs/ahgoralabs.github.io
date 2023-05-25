import React from 'react';
import { Container, Content, StyledText, ImageContainer, TextContainer } from './style';
import img from './img.jpg';

const About = () => {
    return (
        <Container>
            <Content>
                <ImageContainer>
                    <img src={img} alt="Descrição da imagem"/>
                </ImageContainer>
                <TextContainer>
                    <StyledText>
                        <p>Olá, meu nome é <strong> <a target='blank' href='https://www.linkedin.com/in/pedroverani/'> Pedro Penha Verani </a></strong>. Em 25 de fevereiro de 2019, embarquei em uma jornada com a <em>Ahgora Sistemas</em>, guiado pela incrível <strong><a href='https://www.linkedin.com/in/nataliabernsabreu/'>Natália Berns Abreu </a></strong>, minha chefe direta na época. Juntos, trabalhamos no setor de suporte, onde enfrentamos e superamos inúmeros desafios diariamente.</p>

                        <p>Durante meu tempo na Ahgora, percebi a necessidade de uma ferramenta que poderia aliviar algumas das cargas do dia a dia do suporte. Assim, nasceu a ideia desta calculadora, projetada para simplificar e agilizar as tarefas cotidianas da equipe de suporte.</p>

                        <p>Gostaria de expressar minha profunda gratidão à <em>Ahgora Sistemas</em> e à <strong>Natália</strong> por me darem a oportunidade de crescer e aprender. Embora minha jornada com a Ahgora tenha chegado ao fim, o espírito de inovação e compromisso com a excelência que aprendi lá continuará a me inspirar.</p>

                        <p>Espero que esta calculadora seja útil para aqueles que continuam a fazer um trabalho excepcional na Ahgora Sistemas. Muito obrigado.</p>
                    </StyledText>
                </TextContainer>
            </Content>
        </Container>
    );
};

export default About;
