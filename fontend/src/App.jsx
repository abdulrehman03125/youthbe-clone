import { useState } from 'react'
import './App.css'
// import Topbar from './components/topbar/Topbar'
// import Sidebar from './components/sidbar/Sidebar'
import DashboardLayout from "./pages/DashboardLayout"
function App() {
  const [count, setCount] = useState(0)

  return (
<>
<DashboardLayout/>
{/* <Topbar /> */}
{/* <Sidebar/> */}
</>
  )
}

export default App
