<<<<<<< HEAD
import React from "react";
import { CreateContainer, Header, MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen flex flex-col h-auto bg-primary">
        <Header />
        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};
=======
import React from 'react'
import { Header }from './components'
import { Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <div className="w-screen flex flex-col h-auto bg-primary">
     <Header />
     <main className="mt-24 p-8 w-full">
       <Routes>
        <Route path="/*" element={<MainContainer/>}/>
        <Route path="/createItem" element={<CreateContainer/>}/>
       </Routes>
      </main>
  </div>
  )
}
>>>>>>> 7431edef32829a67ea78845f0b85932c75a60867

export default App
  