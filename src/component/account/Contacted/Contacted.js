import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar1 from '../../home/Navbar1';
import { useDispatch, useSelector } from 'react-redux';
import { DeletAll, favcounter } from '../../../redux/counterSlice';
import { datacity } from '../../home/Data';

const Contacted = () => {


    const counterfav=useSelector(favcounter);
    const dispatch=useDispatch();
    
    
      const delet=()=>{
        dispatch(DeletAll())
      }

  return (
    <div>
      <Navbar1 />
      <div className="container">
        <div className="row">
          <div className="col-12 accountcol">
            <div className="MyAccount">My Account</div>
            <div className="Category">
              <label htmlFor="Category">Category:</label>
              <select id="Category">
                {datacity.map((item) => {
                  return <option value={item.value}>{item.label}</option>;
                })}
              </select>
              <div className="delet btn" onClick={()=>{delet()}}>
              <i class="fa-solid fa-trash"></i>
                Delet all
              </div>
            </div>
            <div className="sortby">
                <label htmlFor="">Sort by:</label>
                <select name="" id="sortby">
                    <option value="Recently saved">Recently saved</option>
                    <option value="price (low)">price (low)</option>
                    <option value="price (high)">price (high)</option>
                </select>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 items">
            <NavLink to="/account" activeClassName="activelineaccunt" className="item">Saved properties({counterfav})</NavLink>
            <NavLink to="/Contacted" activeClassName="activelineaccunt" className="item">Contacted properties()</NavLink>
            <NavLink to="/mynotes" activeClassName="activelineaccunt" className="item">my notes()</NavLink>
          </div>
          <div className="col-lg-6 col-sm-12">


          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacted