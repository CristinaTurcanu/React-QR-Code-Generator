import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import QRCode from "react-qr-code";
import {useContext } from "react";
import {QrContext} from "../contexts/QrContext";

function Preview() {
    const { qrValue } = useContext(QrContext)

    return (
        <Grid item xs={12} md={4} sx={{
            '& .section': {
                p: 5,
                mt: 5,
            }
        }}>
            <Paper className="section" variant="outlined">
                {qrValue ? (<QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={qrValue}
                    viewBox={`0 0 256 256`}
                />) : (<p>Waiting for your data... </p>)}
            </Paper>
        </Grid>
    );
}

export default Preview;