import { createContext } from "react"
import { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase'
import Swal from 'sweetalert2'
import { useEffect } from "react";


export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const loguer = async (form) => {
        signInWithEmailAndPassword(auth, form.usuario, form.password)
            .catch((e) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo anduvo mal',
                    text: `Error: ${e.code}`,
                })
            })
    }
    const Logout = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
    }, [])

    return (
        <UserContext.Provider value={{ loguer, Logout, user }}>
            {children}
        </UserContext.Provider>
    )
}