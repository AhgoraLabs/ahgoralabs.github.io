import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { Container, Paragraph } from "./style.js";

const CicleBank = () => {
    const [bancoDeHoras, setBancoDeHoras] = useState();
    const [ciclo, setCiclo] = useState();
    const [result, setResult] = useState();

    const currentDate = new Date(bancoDeHoras);
    const month = ciclo;
    const monthValue = parseInt(month);

    const handleClick = () => {
        if (!bancoDeHoras || !ciclo) return false;
        const banco = currentDate;
        banco.setMonth(banco.getMonth()+monthValue);
        const year = currentDate.getFullYear();
        
        const filterMonth = ("0" + (banco.getMonth() + 1)).slice(-2);
        
        const realDate = year + '-' + filterMonth
        setResult(realDate);
        console.log(realDate)
    };
    return (
        <Container>
            <h1>Ciclo Banco de Horas</h1>
            <div>
                <div>
                    <h3>Inicio do Banco</h3>
                    <input onChange={(e) => setBancoDeHoras(e.target.value)} id='month' type="month"/>
                </div>
                <div>
                    <h3>Valor do Ciclo </h3>
                    <input onChange={(e) => setCiclo(e.target.value)}/>
                </div>
                <div>
                    <h3>Final do Ciclo</h3>
                    <input onChange={(e) => setCiclo(e.target.value)}  type="month" id='result' disabled value={result}/>
                </div>
            </div>

            <Button onClick={handleClick} variant="contained" color="primary" style={{ marginBottom: 50 }}>
                Calcular
            </Button>
            <p>Calcule o ciclo de banco de horas</p>
        <br/>
            <Paragraph>
                O ciclo de banco de horas é o período de tempo durante o qual as horas extras trabalhadas são acumuladas e compensadas. Este período pode variar dependendo do acordo de trabalho, mas geralmente é de um ano. Durante este ciclo, todas as horas extras que o trabalhador realiza são registradas e acumuladas no banco de horas. Ao final do ciclo, o trabalhador deve ter compensado todas as horas extras acumuladas, seja por meio de folgas ou pagamento adicional. Se ao final do ciclo ainda houver horas extras não compensadas, a empresa deve pagar ao trabalhador estas horas com o acréscimo correspondente. O ciclo de banco de horas é uma ferramenta importante para gerenciar as horas de trabalho e garantir que os trabalhadores sejam justamente compensados por qualquer trabalho extra que realizem.
            </Paragraph>

        </Container>
    );
};

export default CicleBank;
