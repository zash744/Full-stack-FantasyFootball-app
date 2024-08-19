import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function RushingTable(){
    const [data, setData] = useState([]);
    

    useEffect(() => {
        // Fetch data from backend
        axios.get("http://localhost:8080/api/data/getAllRushing")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <table>
            <thead>
            <tr>
            <th>Ranking</th>
    <th>Player</th>
    <th>Rush Yards</th>
    <th>ATT</th>
    <th>TDs</th>
    <th>Rush 1st%</th>
    <th>Fum</th>

    
  </tr>
  </thead>
  <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.player}</td>
                        <td>{item.rushyds}</td>
                        <td>{item.att}</td>
                        <td>{item.td}</td>
                        <td>{item.rperc}</td>
                        <td>{item.fumbles}</td>
                    </tr>
                ))}
            </tbody>

         
        </table>
    )
}