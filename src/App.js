import React from "react";
import Main from "./Component/Main"
import ShowMoney from "./Test1/ShowMoney";
import ShowTrafficRate from "./Test1/ShowTrafficRate";
import ExcRate from "./Component/Frame/ExcRate";
import ContactUs from "./Component/ContactUs/ContactUs";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="world">
      <Routes>
        <Route path='/cu' element={<ContactUs/>} />
        <Route path='/er' element={<ExcRate/>}/>
        <Route path ='/' element={<Main/>}/>
        <Route path = '/sm' element={<ShowMoney/>}/>
        <Route path = '/st' element={<ShowTrafficRate/>}/>
      </Routes>
    </div>
  );
}

export default App;