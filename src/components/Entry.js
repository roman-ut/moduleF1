import React, {useState} from "react";
import "../styles/Entry.css";

function Entry(props) {
    return (
        <tr className={"selected-entry"}>
            <td>{props.entry.dt_txt}</td>
            <td>{props.entry.main.temp_min}</td>
            <td>{props.entry.main.temp_max}</td>
            <td>{props.entry.pop}</td>
        </tr>
    );
}

export default Entry;