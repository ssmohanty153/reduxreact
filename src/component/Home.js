import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setLogOut, setIncrement, setDecrement, } from '../services/actions/Action';

export default function Home() {
    const [users, setusers] = useState("subhransu");
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const currentUser = useSelector((state) => state.currentUser)

    const login = () => {
        dispatch(setUser(users));
    }
    const logout = () => {
        dispatch(setLogOut());
    }
    const increment = () => {
        dispatch(setIncrement());
    }
    const decrement = () => {
        dispatch(setDecrement());
    }
    console.log(counter);
    console.log(currentUser.user);
    return (
        <>
            <>
                <h1 className=''>Hello {currentUser.user} </h1>
                <button onClick={logout} className='btn btn-primary'>Logout</button>
            </>
            <>
                <h1>Login </h1>
                <button onClick={login} className='btn btn-primary'>Login</button>
            </>

            <>
                <h1>Counter:{counter}</h1>
                <button className='btn btn-primary' onClick={increment}>Increment</button>
                <button className='btn btn-primary' onClick={decrement}>Decrement</button>
            </>

        </>
    )
}
