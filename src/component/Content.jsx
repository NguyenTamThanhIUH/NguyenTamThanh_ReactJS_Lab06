import data  from "../data/data.json";
 import dataTable  from "../data/dataTable.json";
 
 
 const Content = () => {
 
     return (
       <div className="w-full p-5">
         <div className="grid grid-cols-12">
             <div className="col-span-12 flex">
             <img src="./Squares four 1.png" alt="" />
             <p className="font-bold text-xl  ml-2">Overviews</p>
             </div>
         </div>
         <br />
         <div className="grid grid-cols-12 gap-1">
           {data.map((item,index)=>(
               <div key={index} className={`col-span-4 p-3 rounded flex ${item.bg}`}>
               <div className="flex-1">
               <p className="font-bold">{item.title}</p>
               <h1 className="font-bold text-4xl">{item.price}</h1>
               <br />
               <i><b className="text-green-400">{item.tile}</b> period of change</i>
               </div>
               <img src={item.image} alt="" className="w-10 h-10"/>
               </div>
           ))}
         </div>
         
         <br />
         <div className="grid grid-cols-12">
             <div className="col-span-2">
               <div className="flex">
                 <img src="./File text 1.png" alt="" />
                 <h1 className="font-bold ml-2 text-xl">Detailed Report</h1>
               </div>
             </div>
             <div className="col-span-10 text-end">
               <button className="rounded border-1 border-pink-400 p-1 text-pink-400">Add User</button>
               <button className="rounded border-1 border-pink-400 p-1 ml-3 text-pink-400">Export</button>
             </div>
         </div>
         {/* table */}
         <br />
         <div className="w-full border-1 border-gray-200 rounded">
         <table className="table-auto w-full">
                 <thead>
                   <tr className="bg-blue-50">
                     <th className="py-3"><input type="checkbox" /></th>
                     <th className="py-3">CUSTOMER NAME</th>
                     <th className="py-3">COMPANY</th>
                     <th className="py-3">ORDER VALUE</th>
                     <th className="py-3">ODER DATE</th>
                     <th className="py-3">STATUST</th>
                     <th className="py-3">UPDATE</th>
                   </tr>
                 </thead>
                 <tbody className="text-center">
                   {dataTable.map((item,index)=>(
                     <tr key={index}>
                  <td className="p-3"><input type="checkbox" /></td>
                   <td className="flex items-center justify-center p-3">
                     <img src={item.avatar} alt="" className="w-10 h-10"/>
                     <h1 className="ml-4 p-1">{item.name}</h1>
                   </td>
                   <td>{item.company}</td>
                   <td className="text-center">{item.ordervalue}</td>
                   <td>{item.orderdate}</td>
                   <td className={`p-3 ${item.status === 'New' ? 'text-blue-400' : item.status === 'In-progress' ? 'text-yellow-400' : item.status === 'Completed' ? 'text-green-400' : 'text-blue-400'}`}>{item.status}</td>
                   <td className=" flex items-center justify-center"><img src={item.image} alt=""/></td>
                  </tr>
                   ))}
                  
                 </tbody>
               </table>
         </div>
         <br />
         <div className="grid grid-cols-12">
             <div className="col-span-2">
             <p className="ml-5">5 result</p>  
             </div>
 
             <div className="col-span-10 flex justify-end">
             <div className="flex items-center space-x-2">
                 <button className="w-8 h-8 flex items-center justify-center text-gray-40">
                   &lt;
                 </button>
 
                 <button className="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full">
                   1
                 </button>
                 <button className="w-8 h-8 flex items-center justify-center text-gray-400">
                   2
                 </button>
                 <button className="w-8 h-8 flex items-center justify-center text-gray-400 ">
                   3
                 </button>
                 <button className="w-8 h-8 flex items-center justify-center text-gray-400 ">
                   4
                 </button>
 
                 <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
 
                 <button className="w-8 h-8 flex items-center justify-center text-gray-400 ">
                   10
                 </button>
                 <button className="w-8 h-8 flex items-center justify-center text-gray-400 ">
                   11
                 </button>
 
                 <button className="w-8 h-8 flex items-center justify-center text-gray-400 ">
                   &gt;
                 </button>
             </div>
             </div>
         </div>
       </div>
     );
   };
 
   export default Content;