import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TableShow(){
    const [data, setData] = useState([]);
    

    useEffect(() => {
        // Fetch data from backend
        axios.get("http://localhost:8080/api/data/getAll")
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
    <th>Pass Yards</th>
    <th>Comp %</th>
    <th>TD</th>
    <th>Int</th>
    <th>Rate</th>
    
  </tr>
  </thead>
  <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.player}</td>
                        <td>{item.passYds}</td>
                        <td>{item.cmpPct}</td>
                        <td>{item.td}</td>
                        <td>{item.inter}</td>
                        <td>{item.rate}</td>
                    </tr>
                ))}
            </tbody>

         
        </table>
    )
}