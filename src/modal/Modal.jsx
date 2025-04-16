import React, { useEffect } from "react";
 import "./StyleModal.css";
 import { useTable } from "../context/TableAPI";
 import { useState } from "react";
 
 const Modal = ({ isOpen, closeModal,editIndex,Edituser,setIndex}) => {
   if (!isOpen) return null;
 
   const [avatar, setAvatar] = useState(undefined);
   const [name, setName] = useState("");
   const [company, setCompany] = useState("");
   const [ordervalue, setOrderValue] = useState("");
   const [orderdate, setOrderDate] = useState("");
   const [status, setStatus] = useState("");
   const {HandleAddUser,HandleUpdateUser} = useTable();
 
   useEffect(()=>{
     if(editIndex !== null){
       setAvatar(Edituser.avatar);
       setName(Edituser.name);
       setCompany(Edituser.company);
       setOrderValue(Edituser.ordervalue);
       setOrderDate(Edituser.orderdate);
       setStatus(Edituser.status);
       console.log(avatar)
     }
   },[Edituser,editIndex])
 
   const handleAddOrUpdate = () => {
     const newUser = {
       avatar:`./${avatar}`,
       name,
       company,
       ordervalue,
       orderdate,
       status,
       image: "./create.png"
     };
 
     if(editIndex !== null) {
       HandleUpdateUser(newUser, editIndex);
       setIndex(null);
     }
     else {
     HandleAddUser(newUser);
     }
     setAvatar(undefined);
     setName("");
     setCompany("");
     setOrderValue("");
     setOrderDate("");
     setStatus("");
   }
 
 
   return (
     <div className="modal-overlay">
       <div className="modal-content relative">
         <button 
           className="absolute top-2 right-2 text-gray-500 text-2xl font-bold"
           onClick={closeModal}
           aria-label="Close"
         >
           &times;
         </button>
 
         <h2 className="font-bold text-3xl text-blue-500">Information User</h2>
         <hr />
         <br />
         <div className="grid grid-cols-12">
           <div className="col-span-4">
           <label className="font-bold">Avatar: </label>
           </div>
           <div className="col-span-8">
           <input type="file" className="border-1 rounded w-[400px] h-[35px] " onChange={(e)=>{
                                                                             if (e.target.files[0]){
                                                                               setAvatar(e.target.files[0].name)}}} />
           </div>
         </div>
         <br />
         <div className="grid grid-cols-12">
           <div className="col-span-4">
           <label className="font-bold">User Name: </label>
           </div>
           <div className="col-span-8">
           <input type="text" className="border-1 rounded w-[400px] h-[35px] text-blue-600" placeholder="Name user" value={name} onChange={(e)=>setName(e.target.value)}/>
           </div>
         </div>
         <br />
         <div className="grid grid-cols-12">
           <div className="col-span-4">
           <label className="font-bold">Company: </label>
           </div>
           <div className="col-span-8">
           <input type="text" className="border-1 rounded w-[400px] h-[35px]  text-blue-600" placeholder="Company" value={company} onChange={(e)=>setCompany(e.target.value)} />
           </div>
         </div>
         <br />
         <div className="grid grid-cols-12">
           <div className="col-span-4">
           <label className="font-bold">OderValue: </label>
           </div>
           <div className="col-span-8">
           <input type="text" className="border-1 rounded w-[400px] h-[35px]  text-blue-600" placeholder="Order value" value={ordervalue} onChange={(e)=>setOrderValue(e.target.value)}/>
           </div>
         </div>
         <br />
         <div className="grid grid-cols-12">
           <div className="col-span-4">
           <label className="font-bold">OderDate: </label>
           </div>
           <div className="col-span-8">
           <input type="date" className="border-1 rounded w-[400px] h-[35px]  text-blue-600" placeholder="DD/MM/YYYY" value={orderdate} onChange={(e)=>setOrderDate(e.target.value)}/>
           </div>
         </div>
         <br />
         <div className="grid grid-cols-12">
           <div className="col-span-4">
           <label className="font-bold">Statust: </label>
           </div>
           <div className="col-span-8">
           <input type="text" className="border-1 rounded w-[400px] h-[35px]  text-blue-600" placeholder="Statust" value={status} onChange={(e)=>setStatus(e.target.value)}/>
           </div>
         </div>
         <br />
         <div className="grid grid-cols-12">
           <div className="col-span-4">
          
           </div>
           <div className="col-span-8 flex items-end justify-end">
           <button className="bg-red-400 rounded p-2 px-5 text-white font-bold mr-4" onClick={closeModal}>Close</button> 
           <button className="bg-green-400 rounded p-2 px-5 text-white font-bold mr-4" onClick={handleAddOrUpdate}>{editIndex!==null?"Update User":"Add User"}</button>
           </div>
         </div>
      
         
 
         <br />
       </div>
     </div>
   );
 };
 
 export default Modal;