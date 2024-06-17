import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Form'
import Layout from './components/layout'
import Table from './components/Table'
import History from './components/History'
import About from './components/About'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem('KF_DATA'));
    allData = allData || [];
    setData(allData);
  }, []);

  const handleSetData = (obj) => {
    const nd = [...data, obj];
    setData(nd);
    localStorage.setItem('KF_DATA', JSON.stringify(nd));
  }
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Form data={data} handleSetData={handleSetData} />} />
        <Route path="history" element={<History data={data} />} />
        <Route path="about" element={<About />} />
        <Route path=":id" element={<Table data={data} />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
