import Header from "./component/Header"
 import Siderbar from "./component/Siderbar"
 import Content from "./component/Content"
 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import AnaLitics from "./pages/Analytics";
 import Project from "./pages/Project";
 import Team from "./pages/Team";
 import Messager from "./pages/Messager";
 import Intergations from "./pages/Intergations";
 import Fount404 from "./pages/Fount404";
 import Footer from "./component/Footer";
 
 
 
 
 
 
 function App() {
 
   return (
     <BrowserRouter>
       <div className="w-full">
        
           <div className="grid grid-cols-12 ">
             <div className="col-span-2 shadow-2xl">
             <Siderbar />
             </div>
             <div className="col-span-10 shadow-lg">         
             <Header />
             <Content/>
               <Routes>
                 <Route path="/" element={<Content />} />
                 <Route path="/dashboar" element={<Content />} />
                 <Route path="/analytis" element={<AnaLitics />} />
                 <Route path="/project" element={<Project />} />
                 <Route path="/team" element={<Team />} />
                 <Route path="/messager" element={<Messager />} />
                 <Route path="/intergations" element={<Intergations />} />
                 <Route path="/*" element={<Fount404 />} />
               </Routes>
             </div>
           </div>
          <br />
 
           <div className="grid grid-cols-12">
             <div className="col-span-12">
             <Footer />
             </div>
           </div>
 
       </div>
       </BrowserRouter>
   )
 }
 
 export default App