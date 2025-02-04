import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const CustomTextField = ({ ref, type }: { ref: React.RefObject<HTMLInputElement | null>, type: string }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <TextField
            inputRef={ref}
            variant="outlined"
            fullWidth
            label= {type}
            margin="normal"
            type={type === 'password' && !showPassword ? 'password' : 'text'}
            InputProps={{
                endAdornment: type === 'password' && (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default CustomTextField;