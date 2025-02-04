import { useContext, useEffect, useState } from "react";
import { UserContext } from "../models/Context";
import { Avatar, Typography, Tooltip } from "@mui/material";

const UserName = () => {
    const context = useContext(UserContext);
    const [lastN, setLastN] = useState('');
    const [firstN, setFirstN] = useState('');
    const [firstL, setFirstL] = useState('');

    useEffect(() => {
        if (context.user) {
            setLastN(context.user.lastName ? context.user.lastName.toString() : '');
            setFirstN(context.user.firstName ? context.user.firstName.toString() : '');
            setFirstL(context.user.firstName ? context.user.firstName[0] : '');
        }
    }, [context.user]);

    const tooltipTitle = (firstN || lastN) ? `${firstN} ${lastN}` : 'user';

    return (
        <>
            <div style={{ display: 'block', top: 0, right: '18vw' }}>
                <Tooltip title={tooltipTitle} arrow>
                    <Avatar sx={{
                        display: 'flex',
                        top: '2vh',
                        right: '12vw',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 65,
                        height: 65,
                        bgcolor: "#1976d2",
                        fontSize: 40,
                        zIndex: 200,
                        position: 'fixed'
                    }}>
                        {firstL}
                    </Avatar>
                </Tooltip>
            </div>
            {firstN && (
                <Typography
                    variant="h5"
                    sx={{
                        display: 'block',
                        top: '5vh',
                        right: '20vw',
                        fontWeight: 'bold',
                        position: 'fixed',
                        zIndex: 200,
                        color: '#1976d2'
                    }}
                >
                    Hi {firstN} !
                </Typography>
            )}
        </>
    );
}

export default UserName;

