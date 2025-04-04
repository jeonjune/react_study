import './App.css';
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from "./data/data.js";
import Main from "./pages/main.js";
import Detail from "./pages/detail.js";
import About from "./pages/about.js";
import Event from "./pages/event.js";

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link> */}
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        
        <Route path='/' element={<Main shoes={shoes}/>}/>
        <Route path='*' element={<div>404 ERROR</div>}/>
        
        <Route path='/detail/:id/' element={<Detail shoes={shoes}/>}/>

        <Route path='/about' element={<About />}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문 시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
