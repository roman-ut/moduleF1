import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Entry from "./Entry";
import "../styles/Weather.css";

const Weather = (props) => {
    const {valueCity} = props
    const [city, setCity] = useState([])
    const [weather, setWeather] = useState([])
    const [wind, setWind]= useState([])
    const [list, setList]= useState([])
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + valueCity + '&units=metric&lang=ru&APPID=9f6e39d5164ffaa8f93b137046a1ae75')
            .then(res =>{console.log(res);
                setCity(res.data);
                setWeather(res.data.main);
                setWind(res.data.wind);
            });
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + valueCity + '&units=metric&lang=ru&APPID=9f6e39d5164ffaa8f93b137046a1ae75')
            .then(res =>{console.log(res);
                setList(res.data.list);
            });
    }, [valueCity]);
    return (
        <div>
            <h1>Текущая погода</h1>
            <Table className={"weather"}>
                <thead><tr><th>Наименование города</th><th>Температура, градус цельсия</th><th>Влажность, %</th>
                            <th>Скорость ветра, м/сек</th><th>Направление ветра, градусы</th><th>Атмосферное давление, гПа</th>
                        </tr>
                </thead>
                <tbody>
                    <td>{city.name}</td>
                    <td>{weather.temp}</td>
                    <td>{weather.humidity}</td>
                    <td>{wind.speed}</td>
                    <td>{wind.deg}</td>
                    <td>{weather.pressure}</td>
                </tbody>
            </Table>
            <h1>Погода на предыдущие 5 дней</h1>
            <Table striped bordered hover className={"list"}>
                <thead><tr><th>Дата и время</th><th>Минимальная температура</th><th>Максимальная температура</th>
                    <th>Вероятность осадков</th></tr></thead>
                <tbody>
                {list.map(entry => <Entry key={entry.id} entry={entry}/>)}
                </tbody>
            </Table>
        </div>
    );

}

export default Weather;