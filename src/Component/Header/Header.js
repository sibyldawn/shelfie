import React from 'react';
import logo from '../../shelfie_icon.png';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import {Link} from 'react-router-dom'


export default function Header(){

    return(
    <div className="header-flex">
       <div className="logo">
          <span>
           <img src={logo} alt="shelfie logo" className="imgleft"/>
           <h3 className="name">SHELFIE</h3>
           </span>
       </div>
       <nav className="nav">
       <Link to='/dashboard'><button className='btn'>DASHBOARD</button></Link>
       <Link to='/form'><button className='btn'>ADD INVENTORY</button></Link>
      
       </nav>
    </div>
    )}