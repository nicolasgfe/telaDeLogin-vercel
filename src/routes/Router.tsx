import { Route, Routes } from "react-router-dom";

import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Deshboard";
import { SigIn } from "../pages/SigIn";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<SigIn />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}
