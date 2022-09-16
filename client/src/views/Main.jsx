import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/all')
            .then(res => {
                console.log("Get All Response: ", res)
                setPets(res.data.results)
            })
            .catch(err => console.log("Error finding all: ", err))
    }, []);

    return (
        <>
            <div className='d-flex justify-content-between w-75 p-3 ms-5'>
                <h1>Pet Shelter</h1>
                <Link to={'/pets/new'}>add a pet to the shelter</Link>
            </div>
            <h3 className='w-75 p-3 ms-5'>These pets are looking for a good home</h3>
            <table className='table table-bordered border-dark w-75 p-3 ms-5'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map( (pet, idx) =>
                        <tr key={idx}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>
                                <Link to={`/pets/${pet._id}`}>details</Link>
                                <span className='mx-2'>|</span>
                                <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )

}

export default Main;