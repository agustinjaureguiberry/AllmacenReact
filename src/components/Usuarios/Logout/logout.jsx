import Stack from '@mui/material/Stack';
import Fingerprint from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { UserContext } from '../../Contextos/UserContext';

export const InfoUser = () => {

    const { user, Logout } = useContext(UserContext)
    return (
        <div className="logout">
            <h2>Usted esta logueado como: '{user ? user.email : ''}'</h2>
            <p>Para cerrar sesion haga click en la huella roja</p>
            <Stack direction="row" spacing={1}>
                <IconButton onClick={Logout} type='submit' aria-label="fingerprint" color="error">
                    <Fingerprint />
                </IconButton>
            </Stack>
        </div>
    )
}