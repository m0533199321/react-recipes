import { Outlet, useNavigate } from "react-router";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import EditUser from "./EditUser";
import UserName from "./UserName";
import Login from "./LogIn";

const LayOut = () => {
    const navigate = useNavigate();
    const [isLogIn, setIsLogIn] = useState(false);

    const log_in_home = () => {
        setIsLogIn(true)
    }

    useEffect(() => {
        navigate('/Home');
    }, [navigate]);
    
    return (<>
        {isLogIn === false && <Login log_in={log_in_home}></Login>}
        {isLogIn && <EditUser></EditUser>}
        {isLogIn && <UserName></UserName>}
        <NavBar logIn={isLogIn} />
        <div style={{ marginTop: '20vh', marginLeft: '10vw', marginRight: '20vw' }}>
            <Outlet />
        </div>
    </>
    );
}

export default LayOut;