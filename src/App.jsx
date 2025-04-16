import Header from "./component/Header"
 import Siderbar from "./component/Siderbar"
 import Footer from "./component/Footer";
 
 function App() {
 
   return (
       <div className="w-full">
           <div className="grid grid-cols-12 ">
             <div className="col-span-2 shadow-2xl">
             <Siderbar />
             </div>
             <div className="col-span-10 shadow-lg">         
             <Header />
             </div>
           </div>
          <br />
 
           <div className="grid grid-cols-12">
             <div className="col-span-12">
             <Footer />
             </div>
           </div>
            
       </div>
   )
 }
 
 export default App