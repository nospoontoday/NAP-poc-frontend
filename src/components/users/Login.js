import React, { useRef, useState, useEffect } from 'react';
import {
    useMutation,
    gql
} from '@apollo/client';
import { LOGIN_USER } from '../../graphql/mutations';

const Login = () => {

    const [login, { error }] = useMutation( LOGIN_USER );

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await login({
            variables: {
                username: user,
                password: pwd
            },
            update: (store, { data }) => {
                if (!data) {
                    return null;
                }
            }
        });

        console.log(response);

        if(error) console.log(error);
    }

    return (
        <section>
            <p 
                ref={errRef} 
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
            >
                {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />

                <button type="submit">Sign In</button>
            </form>
            <p>
                Need an Account? <br />
                <span className="line">
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
    )
}

export default Login