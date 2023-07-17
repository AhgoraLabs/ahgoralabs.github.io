import { Button, TextField, useMediaQuery  } from "@material-ui/core";
import { useRef, useState } from "react";
import { decreaseHoursAndMinutes, sumHoursAndMinutes } from '../../helper/calculator';
import { Container, Modal } from "./styles";

function HoursCalculator() {
    const [numberOfInputs, setNumberOfInputs] = useState(2);
    const isSmallScreen = useMediaQuery('(max-width:600px)'); // returns true if screen width is 600px or less
    const [result, setResult] = useState({hours: '', minutes: ''})

    const hoursInputRef = useRef(new Array());
    const minutesInputRef = useRef(new Array());

    const resetFields = () => {
        [...hoursInputRef.current, ...minutesInputRef.current].filter(value => value).forEach(elem => elem.value = '');
        setResult({hours: '', minutes: ''})
    };

    const handleAddNewInputs = () => numberOfInputs === 31 || setNumberOfInputs(numberOfInputs + 1);

    const handleRemoveLastInput = () => setNumberOfInputs(2);

    const doCalc = (operation) => {
        const hours = hoursInputRef.current.map(elem => elem?.value ? parseInt(elem.value) : 0);
        const minutes = minutesInputRef.current.map(elem => elem?.value ? parseInt(elem.value) : 0);
        setResult(operation === "sum" ? sumHoursAndMinutes({hours, minutes}) : decreaseHoursAndMinutes({hours, minutes}));
    };

    return (
        <Container style={{ marginTop: isSmallScreen ? '60%' : 0 }}> {/* Add margin-top here */}
            <h1>Calculadora de Horas</h1>
            <Modal>
                <div id="div-addNewButtons">
                <Button style={{ backgroundColor: "#a2cf6e", color: "white", minWidth: 147 }} onClick={handleAddNewInputs} variant="contained">+</Button>
<Button style={{ backgroundColor: "tomato", color: "white", minWidth: 147, fontSize: '0.8rem' }} onClick={handleRemoveLastInput} variant="contained">Limpar campos</Button>


                </div>
                <div id="div-all-input-hours">
                    {new Array(numberOfInputs).fill(0).map((elem, index) => {
                        return (
                            <div className="div-input-hours" key={index}>
                                <TextField inputRef={(element) => (hoursInputRef.current[index] = element)} className="outlined-basic" label="Horas" variant="outlined" />
                                <TextField inputRef={(element) => (minutesInputRef.current[index] = element)} className="outlined-basic" label="Minutos" variant="outlined" />
                            </div>
                        )})}
                </div>
                <div id="div-buttons">
                    <Button onClick={() => doCalc('sum')} variant="contained" color="primary">Adição</Button>
                    <Button onClick={() => resetFields("reset")} variant="contained" color="secondary">Reset</Button>
                    <Button onClick={() => doCalc('decrease')} variant="contained" color="primary">Subtração</Button>
                </div>
                <hr />
                <h1>Resultado</h1>
                <div id="div-results">
                    <TextField id="filled-basic"  inputProps={{ readOnly: true }}  variant="outlined" label='Resultado Horas' value={result.hours} />
                    <TextField id="filled-basic" inputProps={{ readOnly: true }}  variant="outlined" label='Resultado Minutos' value={result.minutes}  />
                </div>
            </Modal>
        </Container>
    );
}

export default HoursCalculator;
