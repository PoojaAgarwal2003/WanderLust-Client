import React,{useContext,useRef,useEffect,useState} from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'
const Navbar = () => {
  const {state,dispatch} = useContext(UserContext)
  const history = useNavigate()
  const renderList = ()=>{
    if(state){
        return [
        //  <li key="1"><i  data-target="modal1" className="large material-icons modal-trigger" style={{color:"black"}}>search</i></li>,
         <li><Link to="/profile">Profile</Link></li>,
         <li><Link to="/create">Create Post</Link></li>,
         <li><Link to="/myfollowingpost">My Following</Link></li>,
         <li>
             <button className="btn #c62828 red darken-3"
            onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history('/signin')
            }}
            >
                Logout
            </button>
            </li>
        ]
    }else{
      return [
       <li><Link to="/signin">Signin</Link></li>,
       <li><Link to="/signup">Signup</Link></li>
      
      ]
    }
  }
  return (
    <nav>
    <div className="nav-wrapper white ml-3" >
      <Link to={state?"/":"/signin"}className="brand-logo left "> {"  "}Wanderlust</Link>
      <ul id="nav-mobile" className="right">
        {renderList()}
      </ul>
    </div>
  </nav>
  )
}

export default Navbar