import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export const Laptop = () => {
    const [data, setData]=useState([])
    const [filtering,setFiltering]=useState([])
    const getData=()=>{
        axios.get('https://backend1242.herokuapp.com/laptops').then((res)=>{
            setData(res.data)
            setFiltering(res.data)
        })
    }
    useEffect(()=>{
        getData();
    },[])
  

     
     function handlesort(e){
       let x;
       if(e.target.value === "asc"){
        x = data.sort((a,b) => (+a.price.split(",").join(""))-(+b.price.split(",").join("")) )
       }
       else if(e.target.value === "desc"){
        x = data.sort((a,b) => (+b.price.split(",").join(""))-(+a.price.split(",").join("")) )
       }
       setData([...x]);
     }
     
      function handleFilter(e){
        let x;
        if(e.target.value === "all"){
          x = filtering;
        }
        else{
          x = filtering.filter((el) => {
            return el.title === e.target.value;
          })
        }
        setData(x);
      }
      return (
        <>
        
          <div className="container py-5">
            <div className="row">
              <div className="col-12 text-center">
                <h1>Laptop</h1>
                <hr />
                 <div className="sortbtn">
                 <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                      <InputLabel id="demo-simple-select-filled-label">Sort by price</InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value=""
                        onChange={handlesort}
                      >
                        <MenuItem value="asc">Ascending</MenuItem>
                        <MenuItem value="desc">Descending</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                      <InputLabel id="demo-simple-select-filled-label">Filter by title</InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value=""
                        onChange={handleFilter}
                      >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="Mac Book">Mac Book</MenuItem>
                        <MenuItem value="Mac Book pro">Mac Book pro</MenuItem>
                      </Select>
                    </FormControl>
                 </div>
              </div>
            </div>
          </div>
          <div style={{width:"90%"}} className="container">
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,30%)",justifyContent:"space-between",gap:"20px"}}>
                {data.map((e) => {
                  return (
                    <div key={e.id} style={{width:"350px",border:"1px solid grey"}}>
                      <img src={e.img} alt={e.title} width="100%" height="70%"/>
                      <div style={{textAlign:"center",fontSize:"25px"}}>
                        <h5>{e.title}</h5>
                        <p>Price: {e.price}</p>
                        <Link style={{textDecoration:"none"}} to={`/laptop/${e._id}`}><Button style={{background: 'black',width:"200px",height:"50px"}} variant="contained">Buy Now</Button></Link>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </>
      );
}
