import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Edit() {
   const [id,setId]= useState();
   const [name,setName]= useState();
   const [age,setAge]= useState();
   const [email,setEmail]= useState();
  const navigate= useNavigate();

   useEffect(()=>{
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setAge(localStorage.getItem('age'));
    setEmail(localStorage.getItem('email'));
   },[])

   const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`https://641fe0cb82bea25f6df64c24.mockapi.io/m7q1${id}`,{
        e_name:name,
        e_age:age,
        e_email:email
    }).then(()=>{
        navigate('/')
    })
   }
  return (
    <main className='main'>
    <div className="row w-25 border pt-4 pb-4 p-2 rounded">
        <div className="col">
        <div className="p-2 pb-1 border-bottom">
            <h1>update data</h1>
        </div>
            <form onSubmit={handleUpdate} >
                <div className="form-group mt-4 mb-3">
                    <label className='mb-2'>Name</label>
                    <input type='text' placeholder='Name' className='form-control' onChange={(e)=>setName(e.target.value)} value={name}/>
                    </div>
                   <div className="form-group mb-3">
                   <label className='mb-2'>Age</label>
                    <input type='number' placeholder='Age' className='form-control' onChange={(e)=>setAge(e.target.value)} value={age}/>
                   </div>
                   <div className="form-group mb-2">
                   <label className='mb-2'>Email</label>
                    <input type='email' placeholder='Email' className='form-control' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                   </div><br/>
                   <div className="d-grid">
                    <input type='submit' value='update' className='btn btn-success p-2'/>
                   </div>
            </form>
        </div>
    </div>
  </main>
  )
}

export default Edit