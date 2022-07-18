import { Grid, FormControl } from '@mui/material';
import DatePicker from '../components/DatePicker';

export default function DualDatePicker(params) {
    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth>
                    <DatePicker
                        label="请选择开始日期"
                        startDate={params.startDate}
                        onChange={params.setStartDate} />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth>
                    <DatePicker
                        label="请选择结束日期"
                        startDate={params.startDate ? params.startDate : new Date()}
                        onChange={params.setEndDate} />
                </FormControl>
            </Grid>
        </Grid>
    )
}