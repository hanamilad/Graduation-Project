import React from 'react';

import './Login.css';
import { Link } from 'react-router-dom';
const Loginbage = () => {

  const log=document.querySelector(".Log");
  const re=document.querySelector(".Resgistration");

  const clicklog=()=>{
    log.classList.add("active");
    re.classList.remove("active")

  }
  const clickre=()=>{
    re.classList.add("active");
    log.classList.remove("active")

  }

  return (
    <div className="Login">
    <form action=''>
                 <div className="logation mb-3">
                    <Link to="/"><div className="Log active " onClick={clicklog}>Login</div></Link>
                    <Link to="/rej"><div className="Resgistration " onClick={clickre} >Resgistration</div></Link>
                 </div>
                 <div className="email mb-3"><input className='form-control' type="email" placeholder='Enter your email' required /></div>
                 <div className="passowrd mb-3"><input className='form-control' type="password" placeholder='Confirm a password ' required/></div>
                 <div className="raido mb-3">
                    <div className="radioinput">
                    <label htmlFor="check">Remmber me </label>
                        <input type="checkbox" name='check'  id='check'  /></div>
                    <Link to="">Forget password?</Link>
                 </div>
                    <input type="submit"  value="Login Now" className='btn btn-primary mb-3 form-control' />
                <div className="newaccount">
                    Dont have an account? <span><Link to='/rej' className=''>signup now</Link></span>
                </div>
    </form>
                </div>
  )
}
export default Loginbage
