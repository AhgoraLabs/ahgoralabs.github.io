import React, { useState } from "react";
import InputMask from "react-input-mask";
import { converterToCentesimal, converterToSexagesimal } from "../../helper/calculator";
import { Container } from "./style.js";
import styled from 'styled-components';

const Paragraph = styled.p`
    text-align: left;
    font-size: 20px;
`

const HoursConverter = () => {
    const [sexagesimal, setSexagesimal] = useState("00:00");
    const [centesimal, setCentesimal] = useState("0.00");

    const handleChangeSexagesimal = (e) => setSexagesimal(converterToCentesimal(e.target.value));
    const handleChangeCentesimal = (e) => setCentesimal(converterToSexagesimal(e.target.value));

    return (
        <Container>
            <h1>Conversor de Horas</h1>
            <div>
                <div>
                    <div>
                        <h2>Valor em Sexagesimal </h2>
                        <InputMask onChange={(e) => handleChangeSexagesimal(e)} mask="99:99"></InputMask>
                    </div>
                    <div>
                        <h3>{sexagesimal}</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Valor em Centesimal </h2>
                        <InputMask onChange={(e) => handleChangeCentesimal(e)} mask="99.99"></InputMask>
                    </div>
                    <div>
                        <h3>{centesimal}</h3>
                    </div>
                </div>
            </div>
            <p>*Converta horas de sexagesimal para centesimal e vice versa</p>
            <br/>
            <Paragraph>
                A conversão de horas no formato sexagesimal (base 60) para o formato centesimal (base 100) é um processo comum em cálculos de tempo, especialmente em contextos de trabalho. Para converter horas sexagesimais em centesimais, você divide os minutos por 60 e adiciona o resultado às horas. Por exemplo, se você tem 1 hora e 30 minutos no formato sexagesimal, você divide 30 (minutos) por 60, o que resulta em 0,5. Adicionando isso à 1 hora, você obtém 1,5 horas no formato centesimal. Para converter de centesimal para sexagesimal, você faz o processo inverso. Se você tem 1,5 horas no formato centesimal, você subtrai a parte inteira (1 hora), deixando 0,5. Multiplicando 0,5 por 60, você obtém 30 minutos. Portanto, 1,5 horas no formato centesimal é igual a 1 hora e 30 minutos no formato sexagesimal.
            </Paragraph>

        </Container>
    );
};

export default HoursConverter;
