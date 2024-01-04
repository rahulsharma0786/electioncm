
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./Layout";
import Home from "./Home";
import Display from "./Display"



const App=()=>
{
  return(

    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/display" element={<Display/>}/>
        
        
        

        </Route>
      </Routes>
    </BrowserRouter>
  
    </>
  );
}
export default App;