import React from 'react'
import ChilduseContext from './ChilduseContext';

const name = { firstName: "Subhransu", lastName: "Mohanty", middleName: "Sekhar" };
export const NameContext = React.createContext(name);
export default function ParentuseContext() {
    // const [firtstName, setFirstName] = useState("Subhransu");
    // const [lastName, setLastName] = useState("Mohanty");
    // const [middleName, setMiddleName] = useState("Sekhar");
    // const name = { "firstName": firtstName, "lastName": lastName, "middleName": middleName };



    return (
        <>
            <NameContext.Provider value={name}>
                <ChilduseContext />

            </NameContext.Provider>
        </>

    )
}
