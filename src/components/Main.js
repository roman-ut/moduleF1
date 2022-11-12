import React, {useState} from "react";

import City from "./City";
import Weather from "./Weather";

import "../styles/Main.css";

function Main() {
    const [valueCity, setValueCity] = useState();
    return (
        <main>
            <City setValueCity={setValueCity}/>
            <Weather valueCity={valueCity}/>
        </main>
    );
}

export default Main;