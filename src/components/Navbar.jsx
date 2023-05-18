import React from 'react'

const Navbar = () => {
  return (<>
    <nav class="navbar">
    <div className="parent">
      <div class="left-sde">
        <a href="#">PHLOX</a>
      </div>
      <div class="middle-side">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About us</a>
        <a href="#">Blog</a>
        <a href="#">Contact us</a>
      </div>
    </div>

    <div class="right-side">
      <a href="#">Login</a>
      <a class="join-us" href="#">
        Join Us
      </a>
    </div>
  </nav>
    </>
    
  )
}

export default Navbar