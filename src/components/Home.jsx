import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate()
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  onClick={()=>{navigate("/product")}} src="https://i3-prod-assets.indiaistore.com/files/uploads/banners/home-page-hero/banner_1652556674_7635.jpg" class="d-block w-100" alt="iphone" height="630px"/>
          </div>
          <div class="carousel-item">
            <img onClick={()=>{navigate("/Ipad")}} src="https://i3-prod-assets.indiaistore.com/files/uploads/banners/home-page-hero/banner_1652556493_5976.jpg" class="d-block w-100" alt="iphone" height="630px"/>
          </div>
          <div class="carousel-item">
            <img onClick={()=>{navigate("/laptop")}} src="https://i3-prod-assets.indiaistore.com/files/uploads/banners/home-page-hero/banner_1648751532_7702.jpg" class="d-block w-100" alt="iphone" height="630px" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className="center">Products</h1>
      <div className="cont2" style={{width:"90%",height:"500px",margin:"auto"}}>
        
           <div className="cont2in" >
             <img onClick={()=>{navigate("/product")}} height="100%" width="100%" src="https://i3-prod-assets.indiaistore.com/files/uploads/categories/iphone/thumbnail-1647932502_0919.png" alt="" />
             <h3>Mobile</h3>
           </div>
           <div className="cont2in">
            <img onClick={()=>{navigate("/laptop")}} height="100%" width="100%" src="https://i3-prod-assets.indiaistore.com/files/uploads/categories/mac/thumbnail-1622643147_1503.png" alt="" />
            <h3>Laptop</h3>
           </div>
           <div className="cont2in">
            <img onClick={()=>{navigate("/Ipad")}} height="100%" width="100%" src="https://i3-prod-assets.indiaistore.com/files/uploads/categories/ipad/thumbnail-1622643123_7395.png" alt="" />
            <h3>Tab</h3>
           </div>
           
      </div>
      <div className="images">
      <img onClick={()=>{navigate("/Ipad")}} width="100%" src="https://i3-prod-assets.indiaistore.com/files/uploads/banners/home-page-hero/banner_1648751437_0198.jpg" alt="" />
  
      </div>
      <h1 className="center">Trending</h1>

      <div className="container2">
          
          <div className="container2in">
            
            <img height="100%" width="100%"  src="https://i3-prod-assets.indiaistore.com/files/uploads/banners/home-page-trending-offers/banner_1649138727_2834.jpg" alt="" />
          </div>
          <div className="container2in">
            <img height="100%" width="100%"  src="https://i3-prod-assets.indiaistore.com/files/uploads/banners/home-page-trending-offers/banner_1649139013_162.jpg" alt="" />
          </div>
      </div>
      
    </>
  );
}

export default Home;
