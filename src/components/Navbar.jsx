import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";
// import Cart from "../buttons/Cart";
function Navbar({setLog,log}) {
  const user = JSON.parse(localStorage.getItem("app")) || null;
  const handlelog = () => {
    localStorage.removeItem("app");
    setLog(false)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lD8NLdZfIG30yYrTJjoV5TdjQgUAQlVGWaXrwdOZQgaj1n2G1ebov7qaj1VwlQdB2bc&usqp=CAU" alt="" width="200px" height="100%" />
          </Link>
        <div className="container-fluid py-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                 <span className=""></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{color: 'white'}} className="nav-link" to="/Product">
                 Mobile
                </Link>
              </li>
              <li  className="nav-item">
                <Link style={{color: 'white'}}  className="nav-link" aria-current="page" to="/laptop">
                  Laptop
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{color: 'white'}} className="nav-link" aria-current="page" to="/Ipad">
                  Ipad
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{color: 'white'}} className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
            
          {/* <Cart></Cart> */}
          <div style={{display:"flex",paddingRight:"50px"}}>
              {console.log(log)}
              {log ? 
              <button style={{backgroundColor:"white",color:"black",fontSize:"25px"}} className="btn btn-outline-primary ms-2"  onClick={() => handlelog()}>{user.name} Logout</button> : 
              <Link style={{backgroundColor:"white",color:"black",fontSize:"25px"}} to="/SignUp" className="btn btn-outline-primary ms-2">
                SignUp
              </Link>
              }
              
              <CartBtn></CartBtn>
            </div>
          </div>
      
        </div>
      </nav>
    </>
  );
}

export default Navbar;
