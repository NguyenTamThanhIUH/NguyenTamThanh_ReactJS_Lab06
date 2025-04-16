 import { createContext, useState, useEffect, useContext } from "react";
 import { toast } from "react-toastify";
 
 const TableContext = createContext();
 
 export const TableProvider = ({ children }) => {
   const [dataTB, setData] = useState([]);
   const API_URL = "https://67c865040acf98d070866108.mockapi.io/user"
 
 
   //GET
 useEffect(() => {
   fetch(API_URL)
     .then((res) => res.json())     
     .then((data) => {
       setData(data);        
       console.log(data);    
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
       toast.error("Lấy dữ liệu thất bại. Vui lòng thử lại!");
     });
 }, []);
 
   //PUT
   const HandleUpdateUser = async (updatedUser,index) => {
     try {
       const response = await fetch(`${API_URL}/${index}`, {
         method: "PUT", 
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(updatedUser),
       });
 
       if (!response.ok) throw new Error("Failed to update user");
 
       setData((prev) =>
         prev.map((user,id) => (id === index ? updatedUser : user))
       );
       toast.success("Update successfully");
     } catch (error) {
       console.error(error);
       toast.error("Failed to update user");
     }
   };
 
   const HandleAddUser = async (newUser) => {
     try {
       const response = await fetch(API_URL, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(newUser),
       });
 
       if (!response.ok) throw new Error("Failed to add user");
 
       const savedUser = await response.json();
       setData((prev) => [...prev, savedUser]);
       toast.success("Add successfully");
     } catch (error) {
       console.error(error);
       toast.error("Failed to add user");
     }
   };
 
   const totalUser = dataTB.length;
 
   return (
     <TableContext.Provider
       value={{ dataTB, HandleUpdateUser, totalUser }}
       value={{ dataTB, HandleUpdateUser, totalUser ,HandleAddUser}}
     >
       {children}
     </TableContext.Provider>
   );
 };
 
 export const useTable = () => useContext(TableContext);