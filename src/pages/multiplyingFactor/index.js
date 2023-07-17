import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { removeUnderline, secondsToHoursAndMinutes } from "../../helper/calculator";
import { Container, Paragraph } from "./style.js";

const MultiplyingFactor = () => {
    const [bancoDeHoras, setBancoDeHoras] = useState();
    const [fator, setFator] = useState();
    const [result, setResult] = useState();

    const hoursToSeconds = ([hour, minutes]) => parseInt(hour) * 3600 + parseInt(minutes) * 60;

    const factorMinutes = (seconds) => removeUnderline(fator) * seconds;

    const handleClick = () => {
        if (!bancoDeHoras || !fator) return false;

        const seconds = hoursToSeconds(removeUnderline(bancoDeHoras).split(":"));
        const hoursAndMinutes = secondsToHoursAndMinutes(factorMinutes(seconds));
        setResult(hoursAndMinutes);
    };

    return (
        <Container>
            <h1>Fator Multiplicador</h1>
            <div>
                <div>
                    <h3>Quantidade de Banco</h3>
                    <InputMask onChange={(e) => setBancoDeHoras(e.target.value)} mask="99:99"></InputMask>
                </div>
                <div>
                    <h3>Fator Multiplicador </h3>
                    <InputMask onChange={(e) => setFator(e.target.value)} mask="9.9"></InputMask>
                </div>
            </div>
            <div id="result">{result && <h1>Resultado: {result}</h1>}</div>
            <Button onClick={handleClick} variant="contained" color="primary" style={{ marginBottom: 50 }}>
                Multiplicar
            </Button>
            <p>*Multiplique o banco pelo fator multiplicador</p>

            <br/>
            <Paragraph>
O fator multiplicador é um elemento crucial no cálculo do banco de horas. Ele é usado para determinar o valor das horas extras trabalhadas em relação às horas normais de trabalho. Por exemplo, a legislação trabalhista brasileira estabelece que as primeiras duas horas extras trabalhadas devem ser pagas com um acréscimo de 50% sobre o valor da hora normal, e as horas extras além dessas devem ser pagas com um acréscimo de 100%. Isso significa que o fator multiplicador para as primeiras duas horas extras é 1,5 (ou 150%), e para as horas extras além dessas é 2 (ou 200%). Portanto, se um trabalhador que recebe R$20,00 por hora trabalha 3 horas extras, as duas primeiras horas extras serão pagas a R$30,00 cada (R$20,00 * 1,5) e a terceira hora extra será paga a R$40,00 (R$20,00 * 2). O fator multiplicador é uma ferramenta importante para garantir que os trabalhadores sejam justamente compensados pelas horas extras que trabalham.
</Paragraph>


        </Container>
    );
};

export default MultiplyingFactor;