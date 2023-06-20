import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {

    
const [apiData,setApiData]=useState([]);

function getData(){
axios.get('https://641fe0cb82bea25f6df64c24.mockapi.io/m7q1').then((res)=>{
setApiData(res.data);
})
}

function handleDelete(id){
axios.delete(`https://641fe0cb82bea25f6df64c24.mockapi.io/m7q1${id}`).then(()=>{
    getData();
})
}

function setDataToStorage(id,name,age,email){
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('age',age);
    localStorage.setItem('email',email);
}
useEffect(()=>{
getData();
},[])



  return (
   <main className='main'>
    <div className="row w-75 fix">
        <div className="col">
        <div className='mb-2 mt-2'>
   <Link to='/create'>
    <button className='btn btn-success float'>Add New Data</button>
   </Link>
        </div>
            <table className='table table-bordered table-striped table-dark table-hover '>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    apiData.map((item)=>{
                        return(
                            <>
                            <tr>
                    <th>{item.id}</th>
                        <td>{item.e_name}</td>
                        <td>{item.e_age}</td>
                        <td>{item.e_email}</td>
                        <td>
                           <Link to='/edit'>
                           <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id,item.e_name,item.e_age,item.e_email)}>Edit</button>
                           </Link>
                        </td>
                        <td>
                        <button className='btn btn-danger' onClick={()=>{if(window.confirm("r u sure")){handleDelete(item.id)}}}>Delete</button>
                        </td>
                    </tr>
                            </>
                        )
                    })
                   }
                </tbody>
            </table>
        </div>
    </div>
   </main>
  )
}

export default Read