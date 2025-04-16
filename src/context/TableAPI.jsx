import { createContext, useState, useEffect, useContext } from "react";
 
 const TableContext = createContext();
 
 export const TableProvider = ({ children }) => {
   const [dataTB, setData] = useState([]);
   const API_URL = "https://67c865040acf98d070866108.mockapi.io/user"
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(API_URL);
         const data = await response.json();
         setData(data);
       } catch (error) {
         console.error("Fetch error:", error);
         toast.error("Failed to fetch data");
       }
     };
 
     fetchData();
   }, []);
 
   const totalUser = dataTB.length;
 
  
   return (
     <TableContext.Provider
       value={{ dataTB,totalUser}}
     >
       {children}
     </TableContext.Provider>
   );
 };
 
 export const useTable = () => useContext(TableContext);