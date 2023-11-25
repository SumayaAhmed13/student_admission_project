
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Read,Delete } from '../APIRequest/ApiRequest';
import Table from 'react-bootstrap/Table';
 const ListItem = () => {
  const [data,setData]=useState([]);
  const [change,setChange]=useState(0);
  useEffect(()=>{
    (async()=>{
          let res= await Read();
          console.log(res)
          setData(res);
        
    })()

 },[change]);

 const onDelete=async(id)=>{
  let res=await Delete(id);
 // alert(res)
 if(res){
    toast.success("Delete Successfully");
    setChange(new Date().getTime())
 }
 else{
   toast.error("Delete Failed")
 }


}

if(data.length===0){
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    )
  }
  else{
    return(
      <div className='container pt-5 px-5'>
          <div className='row'>
            <h2>Register Student List</h2>
            <div className='col-md-12'>
               <div className='table-responsive'>
               <Table striped bordered hover size="sm">
                     <thead>
                        <tr>
                           <th>FirstName</th>
                           <th>LastName</th>
                           <th>Gender</th>
                           <th>Nationality</th>
                           <th>Address</th>
                           <th>Email</th>
                           <th>Phone</th>
                           <th>Courses</th>
                           <th>Date Of Birth</th>
                           <th>Admission Date</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                      {
                         data.map((item,index)=>{
                          return (
                            <tr key={index}>
                              <td>{item['firstName']}</td>
                              <td>{item['lastName']}</td>
                              <td>{item['gender']}</td>
                              <td>{item['nationality']}</td>
                              <td>{item['address']}</td>
                              <td>{item['email']}</td>
                              <td>{item['phone']}</td>
                              <td>{item['courses']}</td>
                              <td>{item['dateOfBirth']}</td>
                              <td>{item['admissionDate']}</td>
                              <td>
                                <button onClick={()=>{onDelete(item['_id'])}} className='btn btn-danger'>Delete</button>
                              </td>
                             </tr>
                          )

                         })
                      }
                       
                     </tbody>
                  </Table>
               </div>
            </div>
            <Toaster position="top-center" />
          </div>
      </div>
    )
  }
}

export default ListItem 
