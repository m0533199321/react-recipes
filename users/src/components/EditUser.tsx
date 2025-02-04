import { useContext, useEffect, useState } from "react";
import { UserContext } from "../models/Context";
import { Alert, Button, Container, Modal, Paper, Snackbar, Typography } from "@mui/material";
import axios from "axios";
import UserInputField from "./UserInputField";

const EditUser = () => {
    const context = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [userData, setUserData] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phone: ''
    });

    useEffect(() => {
        if (open) {
            setUserData({
                id: context.user.id || 0,
                firstName: context.user.firstName || '',
                lastName: context.user.lastName || '',
                email: context.user.email,
                password: context.user.password,
                address: context.user.address || '',
                phone: context.user.phone || ''
            });
        }
    }, [open, context.user]);

    const handleSubmit = async () => {
        setOpen(false);
        try {
            const res = await axios.put('http://localhost:3000/api/user/', userData, {
                headers: {
                    'user-id': userData.id
                }
            });
            context.userDispatch({ type: "EDIT_USER", data: { ...context.user, ...res.data } });
        } catch (err) {
            if (axios.isAxiosError(err) && err.response?.status === 404)
                setError('user doesn\'t exist');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <Button onClick={() => { setOpen(true); }} variant="contained" color="inherit" sx={{ top: '0vh', right: '2.5vw',fontSize: '17px',height:'13.2vh', width: '10vw', color: '#1976d2',bgcolor: `#F0F0F0`, fontWeight: 'bold', position: 'fixed' ,boxShadow: 0, ":hover": { boxShadow: 0 }}}>Update</Button>
            <Modal
                open={open}
                onClose={() => { setOpen(false); }}
                aria-labelledby="form-modal-title"
                aria-describedby="form-modal-description"
            >
                <Container style={{ position: 'absolute', top: 60, left: 510, maxWidth: '35%' }}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5" align="center">Update your details</Typography>
                        <form>
                            <UserInputField name="firstName" value={userData.firstName} onChange={handleInputChange} label="First Name" />
                            <UserInputField name="lastName" value={userData.lastName} onChange={handleInputChange} label="Last Name" />
                            <UserInputField name="email" value={userData.email} onChange={handleInputChange} label="Email" />
                            <UserInputField name="password" value={userData.password} onChange={handleInputChange} label="Password" />
                            <UserInputField name="address" value={userData.address} onChange={handleInputChange} label="Address" />
                            <UserInputField name="phone" value={userData.phone} onChange={handleInputChange} label="Phone" />
                            <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
                                Update
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Modal>
            <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}
                            anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                            <Alert severity="error" variant="filled" onClose={() => setError(null)}>
                                {error}
                            </Alert>
                        </Snackbar>
        </>
    );
};

export default EditUser;
