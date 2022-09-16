import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PetForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const submitPet = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet/new', {name, type, description, one, two, three})
            .then(res => {
                console.log("Successfully created pet response: ", res)
                navigate('/')
            })
            .catch(err => {
                console.log("Error Creating Pet: ", err)
                const errorResponse = err.response.data.err.errors;
                console.log("Create Validations: ", err.response.data.err.errors)
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    return (
        <>
            <div className='d-flex justify-content-between w-75 p-3 ms-5'>
                <h1>Pet Shelter</h1>
                <Link to={'/'}>back to home</Link>
            </div>
            <div>
                <h3>Know a pet needing a home?</h3>
            </div>
            <div>
                <form onSubmit={ submitPet }>
                {errors.map((err, i) => {
                    return (
                        <p key={i} className='text-danger'>{err}</p>
                    )
                })}
                    <div>
                        <p><label>Pet Name:</label></p>
                        <input type="text" name='name' onChange={ (e) => setName(e.target.value) } value={ name }/>
                    </div>
                    <div>
                        <p className='mt-2'><label>Pet Type:</label></p>
                        <input type="text" name='type' onChange={ (e) => setType(e.target.value) } value={ type }/>
                    </div>
                    <div>
                        <p className='mt-2'><label>Pet Description:</label></p>
                        <input type="text" name='description' onChange={ (e) => setDescription(e.target.value) } value={ description }/>
                    </div>
                    <p>Skills (optional):</p>
                    <div>
                        <p className='mt-2'><label>Skill 1:</label></p>
                        <input type="text" name='one' onChange={ (e) => setOne(e.target.value) } value={ one }/>
                    </div>
                    <div>
                        <p className='mt-2'><label>Skill 2:</label></p>
                        <input type="text" name='two' onChange={ (e) => setTwo(e.target.value) } value={ two }/>
                    </div>
                    <div>
                        <p className='mt-2'><label>Skill 3:</label></p>
                        <input type="text" name='three' onChange={ (e) => setThree(e.target.value) } value={ three }/>
                    </div>
                    <input type="submit" value="Add Pet" className='btn btn-primary mt-2' />
                </form>
            </div>
        </>
    )
}

export default PetForm;