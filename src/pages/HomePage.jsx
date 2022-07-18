import { Button, Container, Grid, TextField, Typography, OutlinedInput, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function HomePage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [idError, setIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [changed, setChanged] = useState(false);

    const [values, setValues] = useState({
        showPassword: false,
    });
    
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // const checkEmpty = () => {
    //     if (id === "") {
    //         setIdError(true);
    //     }
    //     else {
    //         setIdError(false);
    //     }
    //     if (password === "") {
    //         setPasswordError(true);
    //     }
    //     else {
    //         setPasswordError(false);
    //     }
    // }

    const submit = () => {
        if (idError !== true && passwordError !== true)
            console.log("submitted!!");
    }

    return (
        <Container maxWidth="sm">
            <Grid container spacing={3} direction="column">
                <Grid item>
                    <Typography variant="h3">申请出校测试网页</Typography>
                </Grid>
                <Grid item>
                    {/* <Container maxWidth="xxs"> */}
                    <TextField
                        label="请输入学号"
                        variant="outlined"
                        fullWidth
                        value={id}
                        onChange={e => {
                            setId(e.target.value);
                            setChanged(true);
                            if (!e.target.value) {
                                setIdError(true);
                            } else {
                                setIdError(false);
                            }
                        }}
                        error={Boolean(idError)}
                    />
                    {/* </Container> */}
                </Grid>
                <Grid item>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">请输入统一认证密码</InputLabel>
                        <OutlinedInput
                            label="请输入统一认证密码"
                            variant="outlined"
                            type={values.showPassword ? 'text' : 'password'}
                            fullWidth
                            value={password}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={e => {
                                setPassword(e.target.value);
                                setChanged(true);
                                if (!e.target.value) {
                                    setPasswordError(true);
                                } else {
                                    setPasswordError(false);
                                }
                            }}
                            error={Boolean(passwordError)}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        size="large"
                        disabled={!changed || Boolean(idError || passwordError)}
                        onClick={() => submit()}>提交</Button>
                </Grid>
            </Grid>
        </Container>
    )

}