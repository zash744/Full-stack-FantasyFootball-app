import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function RushingTable(){
    const [data, setData] = useState([]);
    

    useEffect(() => {
        // Fetch data from backend
        axios.get("http://localhost:8080/api/data/getAllReceiving")
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
    <th>Receptions</th>
    <th>Yards</th>
    <th>TDs</th>
    <th>Long</th>
    <th>Fum</th>
    <th>YAC</th>
    <th>Targets</th>


    
  </tr>
  </thead>
  <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.player}</td>
                        <td>{item.rec}</td>
                        <td>{item.yards}</td>
                        <td>{item.td}</td>
                        <td>{item.lng}</td>
                        <td>{item.fum}</td>
                        <td>{item.yac}</td>
                        <td>{item.tgts}</td>
                    </tr>
                ))}
            </tbody>

         
        </table>
    )
}