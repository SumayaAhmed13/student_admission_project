import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {Create, Update,GetById} from "../APIRequest/ApiRequest";
import { useNavigate } from 'react-router-dom';
 const RegisterForm = () => {
  let navigate=useNavigate();
  let [formValue,setFormValue]=useState({firstName:"",lastName:"",gender:"",nationality:"",
                                address:"",email:"",phone:"",courses:"",dateOfBirth:"",admissionDate:""});

   let [editId,setEditId]=useState(null);

   useEffect(()=>{
      const urlParam=new URLSearchParams(window.location.search);
      const id=urlParam.get('id');
      if(id){
        // alert(id)
         setEditId(id)
       }

       ( async()=>{
      if(id !==null)
            await FillForm(id)
       })()

   },[])

   const onChangeInput=(name,value)=>{

      setFormValue((formValue)=>({
              ...formValue,
              [name]:value }))
    } 
   const FillForm=async(id)=>{

     let res=await GetById(id);
     setFormValue({firstName:res['firstName'],lastName:res['lastName'],gender:res['gender'],nationality:res['nationality'],
     address:res['address'],email:res['email'],phone:res['phone'],courses:res['courses'],dateOfBirth:res['dateOfBirth'],admissionDate:res['admissionDate']})

   } 
    
  const onSubmitHandler=async ()=>{
     if(formValue.firstName.length===0){
      toast.error("FirstName is Requried !");
     }
    else if(formValue.lastName.length===0){
      toast.error("LastName is Requried !");
     }
    else if(formValue.gender.length===0){
      toast.error("Gender is Requried !");
     }
    else if(formValue.nationality.length===0){
      toast.error("Nationality is Requried !");
     }
    else if(formValue.address.length===0){
      toast.error("Address is Requried !");
     }
    else if(formValue.email.length===0){
      toast.error("Email is Requried !");
     }
    else if(formValue.phone.length===0){
      toast.error("Phone is Requried !");
     }
    else if(formValue.courses.length===0){
      toast.error("Courses is Requried !");
     }
    else if(formValue.dateOfBirth.length===0){
      toast.error("Date Of Birth is Requried !");
     }
     else if(formValue.admissionDate.length===0){
      toast.error("Admission Date is Requried !");
     }
     else{
      if(editId==null){
         let res=await Create(formValue);
         if(res){
           toast.success("Data save Successfully");
           navigate("/");
   
         }
         else{
           toast.error("Data Save failed");
         }
   
        }
        else{
         let res=await Update(formValue,editId);
         if(res){
           toast.success("Data Update Successfully");
           navigate("/");
   
         }
         else{
           toast.error("Data Update failed");
         }

        }
      }
      
      
  }  
  return (
    <div className='container pe-5 mt-5'>
           <div className='row'>
            <div className='col-3'></div>
            <div className='col-6 card pb-4 rounded-3'>
            <h2 className='mb-3 text-center'>Student Register Form</h2>
            <div className='col-6'>
                 <label className=' form-label'>First Name</label>
                 <input type='text' value={formValue.firstName} onChange={(e)=>onChangeInput('firstName',e.target.value)} placeholder='FirstName' className='form-control mb-3'/>
              </div>
              <div className='col-6'>
                 <label className=' form-label'>Last Name</label>
                 <input type='text' value={formValue.lastName} onChange={(e)=>onChangeInput('lastName',e.target.value)}  placeholder='LastName' className='form-control mb-3'/>
              </div>
              <div className='col-6'>
                 <label className=' form-label'> Gender</label>
                 <input type='text'  value={formValue.gender} onChange={(e)=>onChangeInput('gender',e.target.value)} placeholder='Gender' className='form-control mb-3'/>
              </div>
              <div className='col-6'>
                 <label className=' form-label'>Nationality</label>
                 <input type='text' value={formValue.nationality} onChange={(e)=>onChangeInput('nationality',e.target.value)}  placeholder='Nationality' className='form-control mb-3'/>
              </div>
              <div className='col-6'>
                 <label className=' form-label'>Address</label>
                 <input type='text'  value={formValue.address} onChange={(e)=>onChangeInput('address',e.target.value)} placeholder='Address' className='form-control mb-3'/>
              </div>
              <div className='col-6'>
                 <label className=' form-label'>Email</label>
                 <input type='text'  value={formValue.email} onChange={(e)=>onChangeInput('email',e.target.value)} placeholder='Email' className='form-control mb-3'/>
              </div>
              <div className='col-6'>
                 <label className=' form-label'>Phone</label>
                 <input type='text'  value={formValue.phone}  onChange={(e)=>onChangeInput('phone',e.target.value)}  placeholder='Phone' className='form-control mb-3'/>
              </div>
              <div className='col-6'>
                 <label className=' form-label'>Courses</label>
                 <input type='text'  value={formValue.courses} onChange={(e)=>onChangeInput('courses',e.target.value)}   placeholder='Courses' className='form-control mb-3'/>
              </div>
              <div className='col-6'>
                 <label className=' form-label'>Date Of Birth</label>
                 <input type='text'  value={formValue.dateOfBirth} onChange={(e)=>onChangeInput('dateOfBirth',e.target.value)}  placeholder='DateOfBirth' className='form-control mb-3'/>
              </div>
              <div className='col-6'>
                 <label className=' form-label'>Admission Date</label>
                 <input type='text'  value={formValue.admissionDate} onChange={(e)=>onChangeInput('admissionDate',e.target.value)} placeholder='Admission Date' className='form-control mb-3'/>
              </div>
              <div className='col-6'>
                
                 <button onClick={onSubmitHandler} className=' btn btn-success w-100 pt-2'>Save</button>
              </div>
            </div>
              
              <Toaster position="top-center" />
           </div>

    </div>
  )
}
export default RegisterForm
