import React, { useContext } from 'react'
import { NameContext } from './ParentuseContext';

export default function NastedChild() {
    const name = useContext(NameContext);
    return (
        <>
            <h1>{name.firstName}</h1>
        </>
    )
}


