import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker(params) {
    const [value, setValue] = React.useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
            <DatePicker
                label={params.label}
                inputFormat="yyyy/MM/dd"
                minDate={params.startDate}
                value={value?value:new Date()}
                onChange={(newValue) => {
                    setValue(newValue);
                    params.onChange(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                error={true}
            />
        </LocalizationProvider>
    );
}
