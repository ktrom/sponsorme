import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>SponsorMe</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/companyhome">Company Home</Link> |{" "}
        <Link to="/influencerhome">Influencer Home</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
