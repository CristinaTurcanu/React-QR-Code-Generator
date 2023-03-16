import React, {useEffect, useState, useContext} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {QrContext} from "../contexts/QrContext";

const initialValues = {
    wifiName: "",
    networkName: "",
    password: "",
    encryptionType: "",
    hidden: false,
};
function Form() {
    const [values, setValues] = useState(initialValues);
    const [formIsValid, setFormIsValid] = useState(false);
    const [errors, setErrors] = useState({});

    const { setQrValue } = useContext(QrContext)

    useEffect(() => {
        if (formIsValid) {
            handleSubmit()
        } else {
            setQrValue('')
        }
    }, [formIsValid, values])

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setValues((prevState) => {
            return {...prevState, [name]: value}
        });
    };

    const validateField = ({target}) => {
        const { name } = target

        setErrors((prevState) => {
            return {
                ...prevState,
                [name]: {error: !target.validity.valid, message: target.validationMessage}
            }
        })

        setFormIsValid(
            values.wifiName.trim().length > 0
            && values.networkName.trim().length > 0
            && values.password.trim().length > 0
        )
    }

    const resetValues = () => {
        setValues({...values, initialValues})
    }
    const handleSubmit = () => {
        const value = `WIFI:S:${values.wifiName};N:${values.networkName};T:${values.encryptionType};
                        P:${values.password};H:${values.hidden};`
        setQrValue(value)
        resetValues()
    }
    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .section': {
                    p: 5,
                    mb: 5,
                },
                '& .submit-btn': {
                    width: '100%',
                },
                '& .MuiSvgIcon-root': {
                    fontSize: 28,
                    mb: 0,
                    alignSelf: 'center',
                },
                '& .MuiFormControlLabel-root': {
                    mt: 0.7,
                }
            }}
        >
            <Typography variant="h6" gutterBottom>
                Add content to the Wi-Fi QR code
            </Typography>
            <form>
                <Paper className="section" variant="outlined">
                    <TextField
                        required
                        name="wifiName"
                        label="Name your QR code"
                        fullWidth
                        error={errors.wifiName?.error || false}
                        helperText={errors.wifiName?.message || ''}
                        value={values.wifiName}
                        onChange={handleChange}
                        onBlur={validateField}
                    />
                </Paper>
                <Paper className="section" variant="outlined">
                    <Typography mb={5} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        Provide your Wi-Fi name, the type of encryption and your password
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                name="networkName"
                                label="Network name"
                                fullWidth
                                error={errors.networkName?.error || false}
                                helperText={errors.networkName?.message || ''}
                                value={values.networkName}
                                onChange={handleChange}
                                onBlur={validateField}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="encryptionType">Encryption type</InputLabel>
                                <Select
                                    id="encryptionType"
                                    name="encryptionType"
                                    label="Encryption type"
                                    value={values.encryptionType}
                                    onChange={handleChange}
                                >
                                    <MenuItem value=''>None</MenuItem>
                                    <MenuItem value='wpa'>WPA</MenuItem>
                                    <MenuItem value='wep'>WEP</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                type="password"
                                name="password"
                                label="Password"
                                fullWidth
                                error={errors.password?.error || false}
                                helperText={errors.password?.message || ''}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={validateField}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel control={<Checkbox
                                color="default"
                                name="hidden"
                                value={values.hidden}
                                onChange={handleChange}/>}
                                label="Hidden network"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </Grid>
    );
}

export default Form;