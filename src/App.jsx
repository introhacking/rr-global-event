import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ClientLayout from './components/layout/ClientLayout'
import Home from './pages/home/Home'
import BlogDetails from './pages/blogDetail/BlogDetails'
import BlogListPage from './pages/blogDetail/BlogListPage'
import ErrorPage from './pages/ErrorPage'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* CLIENT UI  */}
          <Route path='/' element={<ClientLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='blog' element={<BlogListPage />} />
            <Route path="blog/:route" element={<BlogDetails />} />
            <Route path='*' element={<ErrorPage errMsg={'Page Not Found'} />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App