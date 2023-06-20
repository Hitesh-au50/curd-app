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
    axios.put(`https://641fe55282bea25f6df68b0f.mockapi.io/apis/${id}`,{
        e_name:name,
        e_age:age,
        e_email:email
    }).then(()=>{
        navigate('/')
    })
   }
  return (
    <>
    <div className="row">
        <div className="col-md-4">
        <div className="bg-success p-4">
            <h1>update data</h1>
        </div>
            <form onSubmit={handleUpdate} >
                <div className="form-group">
                    <label>enter name:</label>
                    <input type='text' placeholder='Name' className='form-control' onChange={(e)=>setName(e.target.value)} value={name}/>
                    </div>
                   <div className="form-group">
                   <label>enter age:</label>
                    <input type='number' placeholder='Age' className='form-control' onChange={(e)=>setAge(e.target.value)} value={age}/>
                   </div>
                   <div className="form-group">
                   <label>enter Email:</label>
                    <input type='email' placeholder='Email' className='form-control' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                   </div><br/>
                   <div className="d-grid">
                    <input type='submit' value='update' className='btn btn-primary'/>
                   </div>

                
            </form>
           
        </div>
    </div>
  </>
  )
}

export default Edit

