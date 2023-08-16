import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7007/WeatherForecast')
            .then(response => {
                console.log('response', response)
                setBooks(response.data);
            })
            .catch(error => {
                console.log('err', error)
                console.error('Error fetching books:', error);
            });
    }, []);

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book.temperatureC}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
