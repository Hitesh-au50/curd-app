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
    axios.post('https://641e8000f228f1a83ea4fc65.mockapi.io/crud',{
      e_name:name,
      e_age:age,
      e_email:email
    }).then(()=>{
      navigate('/');
    })


    }
  return (
  <main className='main'>
    <div className="row w-25 border pt-4 pb-4 p-2 rounded ">
        <div className="col">
        <div className="p-2 pb-1 border-bottom">
            <h1>create data</h1>
        </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-4 mb-3">
                    <label className='mb-2'>Name</label>
                    <input type='text' placeholder='Name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                   <div className="form-group mb-3">
                   <label className='mb-2'>Age</label>
                    <input type='number' placeholder='Age' className='form-control' onChange={(e)=>setAge(e.target.value)}/>
                   </div>
                   <div className="form-group mb-2">
                   <label className='mb-2'>Email</label>
                    <input type='email' placeholder='Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                   </div><br/>
                   <div className="d-grid">
                    <input type='submit' value='submit' className='btn btn-success p-2'/>
                   </div>

                
            </form>
           
        </div>
    </div>
  </main>
  )
}

export default Create