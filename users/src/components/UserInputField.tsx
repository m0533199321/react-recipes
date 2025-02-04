import React from "react";
import { TextField } from "@mui/material";

interface UserInputFieldProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const UserInputField: React.FC<UserInputFieldProps> = ({ name, value, onChange, label }) => {
    return (
        <TextField
            name={name}
            value={value}
            onChange={onChange}
            label={label}
            variant="outlined"
            fullWidth
            margin="normal"
        />
    );
};

export default UserInputField;

