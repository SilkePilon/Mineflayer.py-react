import React, { useState, useEffect } from 'react';
import axios from "axios";



function api () {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/full')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    return data
}

export default api;
