import axios from "axios";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../models/Context";
import { Button, Typography, Container, Paper, Modal, Alert, Snackbar, IconButton } from "@mui/material";
import CustomTextField from './CustomTextField';
import ChatIcon from '@mui/icons-material/Chat';

const LogIn = ({ log_in }: { log_in: Function }) => {
    const [open, setOpen] = useState(false);
    const [botOpen, setBotOpen] = useState(false);
    const context = useContext(UserContext);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [signIn, setSignIn] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setOpen(false);
        const email = emailRef.current?.value, password = passwordRef.current?.value;

        try {
            const endpoint = signIn ? 'login' : 'register';
            const res = await axios.post(`http://localhost:3000/api/user/${endpoint}`, { email, password });
            context?.userDispatch({ type: signIn ? "LOGIN_IN_USER" : "CREATE_USER", data: signIn ? res.data.user : { id: res.data.userId, email, password } });
            setSuccessMessage("Successfully logged in!");
            setTimeout(log_in, 800);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const status = err.response?.status;
                setError(signIn ? (status === 401 ? "'User doesn\'t exist'" : null) : (status === 400 ? "User already signed up" : (status === 422 ? "Please enter valid email and password" : null)));
            }
        } finally {
            if (emailRef.current) emailRef.current.value = '';
            if (passwordRef.current) passwordRef.current.value = '';
        }
    };

    const renderButton = (label: string, isSignIn: boolean) => (
        <Button onClick={() => { setOpen(true); setSignIn(isSignIn); }} variant="contained" color="inherit" sx={{ top: isSignIn ? '0vh' : '6.2vh', right: '2.5vw', fontSize: '15px', width: '10vw', color: '#1976d2', bgcolor: `#F0F0F0`, padding: 0, margin: 0, height: '7vh', fontWeight: 'bold', position: 'fixed', boxShadow: 0, ":hover": { boxShadow: 0 } }}>
            {label}
        </Button>
    );

    const renderSnackbar = (message: string | null, severity: 'error' | 'success', setMessage: React.Dispatch<React.SetStateAction<string | null>>) => (
        <Snackbar open={!!message} autoHideDuration={6000} onClose={() => setMessage(null)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
            <Alert severity={severity} variant="filled" onClose={() => setMessage(null)}>{message}</Alert>
        </Snackbar>
    );

    return (
        <>
            {renderButton("Sign in", true)}
            {renderButton("Sign up", false)}
            <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="form-modal-title" aria-describedby="form-modal-description">
                <Container style={{ position: 'absolute', top: 200, left: 510, maxWidth: '35%' }}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5" align="center">Sign</Typography>
                        <form onSubmit={handleSubmit}>
                            <CustomTextField ref={emailRef} type='email' />
                            <CustomTextField ref={passwordRef} type='password' />
                            <Button type="submit" variant="contained" color="primary" fullWidth>Enter</Button>
                        </form>
                    </Paper>
                </Container>
            </Modal>
            {renderSnackbar(error, 'error', setError)}
            {renderSnackbar(successMessage, 'success', setSuccessMessage)}
            <IconButton onClick={() => setBotOpen(!botOpen)} sx={{ position: 'fixed', bottom: '5%', right: '2%', bgcolor: '#F0F0F0', borderRadius: '50%', boxShadow: 2 }}>
                <ChatIcon sx={{ fontSize: 40, color: '#1976d2' }} />
            </IconButton>
            <Modal open={botOpen} onClose={() => setBotOpen(false)} aria-labelledby="bot-modal-title" aria-describedby="bot-modal-description" BackdropProps={{ style: { backgroundColor: 'transparent' } }}>
                <Container style={{ position: 'absolute', bottom: '70px', right: '85px', backgroundColor: 'white', border: '2px solid #1976d2', borderRadius: '20px 20px 0 20px', width: '200px', transition: 'all 0.3s ease', padding: '10px' }}>
                    <Typography variant="h6" align="center">The bot is in development...</Typography>
                </Container>
            </Modal>
            <footer style={{ position: 'fixed', bottom: '0', height: '5.5%', width: '20%', textAlign: 'center', backgroundColor: `#F0F0F0`, color: '#0038d8', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px' }}>
                <div style={{ marginRight: '10px' }}>follow us</div>
                {["../../img/p1.png", "../../img/c1.png", "../../img/t1.png"].map(src => <img key={src} src={src} alt="Footer Image" style={{ margin: '0 10px', height: 'auto', width: '4vh', maxHeight: '4vh', maxWidth: '100%' }} />)}
            </footer>
        </>
    );
};

export default LogIn;




