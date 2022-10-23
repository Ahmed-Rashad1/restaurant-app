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

export default App
  