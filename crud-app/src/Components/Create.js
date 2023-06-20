import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [email,setEmail]=useState('');

  const navigate=useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('https://641fe55282bea25f6df68b0f.mockapi.io/apis',{
      e_name:name,
      e_age:age,
      e_email:email
    }).then(()=>{
      navigate('/');
    })


    }
  return (
  <>
    <div className="row">
        <div className="col-md-3">
        <div className="bg-success p-4">
            <h1>New data</h1>
        </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>enter name:</label>
                    <input type='text' placeholder='Name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                   <div className="form-group">
                   <label>enter age:</label>
                    <input type='number' placeholder='Age' className='form-control' onChange={(e)=>setAge(e.target.value)}/>
                   </div>
                   <div className="form-group">
                   <label>enter Email:</label>
                    <input type='email' placeholder='Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                   </div><br/>
                   <div className="d-grid">
                    <input type='submit' value='Create' className='btn btn-primary'/>
                   </div>

                
            </form>
           
        </div>
    </div>
  </>
  )
}

export default Create