import data  from "../data/data.json";
 
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
         
       </div>
     );
   };
   
   export default Content;