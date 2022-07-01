import React from 'react'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delItem } from '../redux/actions/index';
import {updateaddd} from "../redux/actions/index";
import Button from '@mui/material/Button';

function Cart() {
    const state = useSelector((state)=>state.addItems)
    const dispatch=useDispatch()
    const handleClose=(item)=>{
        dispatch(delItem(item))
    }
    const cartItems =(cartItem)=>{
        return (
            <div style={{border: '1px solid',width:"50%",margin:"auto",marginBottom:"10px",marginTop:"10px"}} key = {cartItem.id} >
            <div className="container py-4">
                <button onClick={()=>handleClose(cartItem)} className='btn-close float-end' aria-label='Close' ></button>
                    <div className="row justify-content-center">
                        <div style={{width:"200px"}} className="col-mid-1">
                            <img height="200px" width="180px" src={cartItem.img} alt="" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>Rs : {cartItem.price}</p>
                        </div>
                        <div className="col-md-4">
                            <button onClick={() => dispatch(updateaddd(cartItem,state,1))} style={{width:"50px",height:"50px",fontSize:"25px"}}>+</button>
                            <span style={{fontSize:"25px",margin:"0px 10px"}}>{cartItem.quantity}</span>
                            <button onClick={() => dispatch(updateaddd(cartItem,state,-1))} style={{width:"50px",height:"50px",fontSize:"25px"}}>-</button>
                        </div>
                    </div>
                
            </div>
        </div>
        )
    }
    const button=()=>{
        return(
            <div className="container">
                <div className="row">
                    <Link style={{textDecoration:"none"}} to="/checkout"><Button style={{background: 'black',width:"200px",height:"50px",marginLeft:"40%"}} variant="contained">Proceed to Checkout</Button></Link>
                </div>
            </div>
        )
    }
    const emptyCart = () => {
        return ( 
            <div className="px-4 my-5 bg-light rounded-3" >
                <div className="container py-4">
                    <div className="row">
                        <h1>
                            Your Cart is Empty
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
  return (
  <>
  {state.length===0 && emptyCart() }
  {state.length !==0 && state.map(cartItems)}
  {state.length !==0 && button()}
</>
    
 
  )
}

export default Cart