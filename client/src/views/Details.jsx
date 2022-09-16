import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
    const [pet, setPet] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                console.log("Get One Response: ", res)
                setPet(res.data.results)
            })
            .catch(err => console.log("Get One Request Error: ", err))
    }, [id])

    const deleteButton = () => {
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
            .then(res => {
                console.log("Successfully deleted: ", res)
                navigate('/')
            })
            .catch(err => console.log("Error when trying to delete: ", err))
    }

    return (
        <>
            <div className='d-flex justify-content-between w-75 p-3 ms-5'>
                <h1>Pet Shelter</h1>
                <Link to={'/'}>back to home</Link>
            </div>
            {
                pet ? 
                <>
                    <div className='d-flex justify-content-between w-75 p-3 ms-5'>
                        <h1>Details about: {pet.name}</h1>
                        <button onClick={ () => deleteButton() } className='btn btn-danger'>Adopt {pet.name}</button>
                    </div>
                    <div>
                        <p><strong>Pet type:</strong> {pet.type}</p>
                        <p><strong>Description:</strong> {pet.description}</p>
                        <p><strong>Skills:</strong></p>
                        <p>{pet.one}</p>
                        <p>{pet.two}</p>
                        <p>{pet.three}</p>
                    </div> 
                </> :
                <p></p>
            }
        </>
    )

}

export default Details;