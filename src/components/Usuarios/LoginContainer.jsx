
import './style/Login.scss'
import { Login } from './Login/Login';
import { useContext } from 'react';
import { UserContext } from '../Contextos/UserContext';
import { InfoUser } from './Logout/logout';


export const LoginContainer = () => {

    const { user } = useContext(UserContext)


    return (
        <div className='loguerContainer'>
            {user ? <InfoUser /> : <Login />
            }
        </div>
    )
}