import './App.css'
import Sidebar from '../src/components/Sidebar'
import Header from '../src/components/Header'
import CustomerTable from './components/CustomerTable'



const App = () => {
  return (
    <>
    <Sidebar/>
    <Header/>
    <CustomerTable/>
    </>
  )
}

export default App;