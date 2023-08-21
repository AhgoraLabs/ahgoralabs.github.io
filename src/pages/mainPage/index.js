import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//components
import TimelineParser from "../../components/TimelineParser";
import Nightly from "../../components/Nightly";
import HourCalculator from "../../components/HourCalculator";

//pages
import CicleBank from "../../pages/bankCycle";
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
    const classes = useStyles();
    const handleChange = (path) => {
        window.location.href = path;
    };

    return (
        <BrowserRouter>
            <Paper className={classes.root} style={{ position: "fixed", width: "100vw", zIndex: 1 }}>
                <Container> 
                <Grid container>
                    <Grid item xs={12} sm={2}>
                        <Tab className={classes.tab} label="Calculadora" onClick={() => handleChange("/calculadora")} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Tab className={classes.tab} label="Adicional Noturno" onClick={() => handleChange("/adicional-noturno")} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Tab className={classes.tab} label="Conversor" onClick={() => handleChange("/conversor")} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Tab className={classes.tab} label="Fator Multiplicador" onClick={() => handleChange("/fator-multiplicador")} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Tab className={classes.tab} label="Banco de Horas" onClick={() => handleChange("/banco-de-horas")} />
                    </Grid>
                </Grid>
                </Container>
            </Paper>
            <div style={{ paddingTop: 49 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/calculadora" />} />
                    <Route path="/calculadora" element={<HoursCalculator />} />
                    <Route path="/adicional-noturno" element={<Nightly />} />
                    <Route path="/conversor" element={<HoursConverter />} />
                    <Route path="/fator-multiplicador" element={<MultiplyingFactor />} />
                    <Route path="/banco-de-horas" element={<CicleBank />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default IndexPage;
