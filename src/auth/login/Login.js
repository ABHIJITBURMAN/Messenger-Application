import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core';
import { auth,provider } from '../../firebase'
import { actionTypes } from '../../State/reducer';
import { useStateValue } from '../../State/StateProvider';

export default function Login() {
    const [{}, dispatch] = useStateValue();
    const signin = ()=>{
        auth
        .signInWithPopup(provider)
        .then((result)=> {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        })
        .catch((err)=> alert(err.message))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="" />
            
            <div className="login_text">
                <h1>Sign in to Whatsapp</h1>
            </div>
            
            <Button type="submit" onClick={signin}>
                Sign in with Google
            </Button>
            </div>
        </div>
    )
}
