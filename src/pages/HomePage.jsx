import { Button, Container, Grid, TextField, Typography, OutlinedInput, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import DatePicker from '../components/DatePicker';
import DualDatePicker from "../components/DualDatePicker";

export default function HomePage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [idError, setIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [changed, setChanged] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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
        if (idError !== true && passwordError !== true) {
            console.log("submitted!!");
            console.log(id);
            console.log(password);
            console.log(startDate);
            console.log(endDate);
        }

    }

    return (
        <Container maxWidth="sm">
            <Grid container spacing={3} direction="column">
                <Grid item>
                    <Typography variant="h3">申请出校测试网页</Typography>
                </Grid>
                <Grid item>
                    {/* <Container maxWidth="xxs"> */}
                    <FormControl variant="outlined" fullWidth>
                        <TextField
                            label="请输入学号"
                            variant="outlined"
                            fullWidth
                            value={id}
                            onChange={e => {
                                setId(e.target.value);
                                if (password !== "")
                                    setChanged(true);
                                if (!e.target.value || e.target.value.length !== 12) {
                                    setIdError(true);
                                } else {
                                    setIdError(false);
                                }
                            }}
                            error={Boolean(idError)}
                        // helperText={id.length!==12?"请输入12位学号":" "}
                        />
                        {/* </Container> */}
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">请输入统一认证密码</InputLabel>
                        <OutlinedInput
                            label="请输入统一认证密码"
                            variant="outlined"
                            required
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
                                if (id !== "")
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
                    <DualDatePicker
                        startDate={new Date()}
                        setStartDate={setStartDate}
                        endDate={new Date()}
                        setEndDate={setEndDate}
                    />
                    {/* <Grid container direction="row" spacing={2}>
                        <Grid item xs={6}>
                            <FormControl variant="outlined" fullWidth>
                                <DatePicker
                                    label="请选择开始日期"
                                    startDate={new Date()}
                                    onChange={setStartDate} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl variant="outlined" fullWidth>
                                <DatePicker
                                    label="请选择结束日期"
                                    startDate={startDate ? startDate : new Date()}
                                    onChange={setEndDate} />
                            </FormControl>
                        </Grid>
                    </Grid> */}

                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        size="large"
                        disabled={!changed || idError || passwordError}
                        onClick={() => submit()}>提交</Button>
                </Grid>
            </Grid>
        </Container>
    )

}