import React from "react";
import './style.css'


const Footer = () =>{
    return(
        <>

        
     <footer>

            <div class="footer">

        <div class="one">
            
          <h3>Download Our App</h3>
            <div>
                   <span><img src alt="" /></span> <h1 className="logo">M<span>oo</span>vie</h1>
                  
                </div>
        </div>

        <div class="two">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>My List</p>
            <p>About Us</p>
        </div>

        <div class="two">
            <h3>Legal</h3>
            <p>General info</p>
            <p>Smart Gadget</p>
            <p>Bill Payment Verification</p>
            
        </div>
    
           
        <div class="two">
            <h3>Contact Us:</h3>
            <p>support@egymoviees.com</p>
            <p>tel: +201045963322</p>
            <p>OR By Using:</p>
            <div className="icons">
                

            </div>
        </div>

        <div class="two">
            <h3>Share Website Via:</h3>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
        </div>
        <hr/>
        <p className="Copyright"> 2023 Moovie. All Rigts Reserved.</p>
    </footer>    


        </>

    );
}

export default Footer;


