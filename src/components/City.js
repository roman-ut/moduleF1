import React, {useState} from "react";
import "../styles/City.css";

function City(props) {
    const {setValueCity} = props
    function handleChange(event) {
        setValueCity(event.target.value);
    }
    return (
        <div className="jquerysel">
            <h>Выберите город: </h>
            <select onChange={handleChange} >
                <option>--------------------</option>
                <option value="London">Лондон</option>
                <option value="Moscow">Москва</option>
                <option value="Sankt-Peterburg">Санкт-Петербург</option>
                <option value="Krasnodar">Краснодар</option>
                <option value="Sochi">Сочи</option>
            </select>
        </div>
    );
}

export default City;