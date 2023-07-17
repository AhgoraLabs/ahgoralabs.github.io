import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { reset, calcNightlyFactor, removeNightlyFactor } from "../../helper/calculator";

//components
import TimelineParser from "../../components/TimelineParser";
import Nightly from "../../components/Nightly";
import HourCalculator from "../../components/HourCalculator";

//pages
import CicleBank from "../../pages/bankCycle"
import HoursConverter from "../../pages/hoursConverter";
import MultiplyingFactor from "../../pages/multiplyingFactor";
import HoursCalculator from "../../pages/hoursCalculator";
import About from "../../pages/about";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    tab: {
        textAlign: 'center',
    }
});


const IndexPage = () => {
    const [value, setValue] = useState(0);
    const [nightlyTime, setNightlyTime] = useState({});
    const [resultNightly, setResultNightly] = useState({});

    const calcNightly = () => {
        const nightlyResult = calcNightlyFactor(nightlyTime);
        setResultNightly(nightlyResult);
    };

    const calcRemoveNightlyFactor = () => {
        const resultRemoval = removeNightlyFactor(nightlyTime);
        setResultNightly(resultRemoval);
    };

    const tabChooser = {
        0: <HoursCalculator />,
        1: <Nightly nightlyTime={nightlyTime} setTime={setNightlyTime} result={resultNightly} calc={calcNightly} remove={calcRemoveNightlyFactor} />,
        2: <HoursConverter />,
        3: <MultiplyingFactor />,
        4: <CicleBank />,
    };

    const classes = useStyles();
    const handleChange = (newValue) => {
        setValue(prevValue => newValue);
    };
    
    return (
        <>
            <Paper className={classes.root} style={{ position: "fixed", width: "100vw", zIndex: 1 }}>
                <Container> 
                <Grid container>
                    <Grid item xs={12} sm={2}>
                        <Tab className={classes.tab} label="Calculadora" onClick={() => handleChange(0)} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Tab className={classes.tab} label="Adicional Noturno" onClick={() => handleChange(1)} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Tab className={classes.tab} label="Conversor" onClick={() => handleChange(2)} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Tab className={classes.tab} label="Fator Multiplicador" onClick={() => handleChange(3)} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Tab className={classes.tab} label="Banco de Horas" onClick={() => handleChange(4)} />
                    </Grid>
                </Grid>
                </Container>
            </Paper>
            <div style={{ paddingTop: 49 }}>{tabChooser[value]}</div>
        </>
    );
};

export default IndexPage;
