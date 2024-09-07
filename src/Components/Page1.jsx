import { useState } from "react";
import icon from "../assets/Images/Icon.png";
import Autolayout from "../assets/Images/Autolayout.png";
import User from  "../assets/Images/User.svg"
import "./Page1.css";
import Star from "../assets/Images/Star.png";
import Ellipse17 from "../assets/Images/Ellipse17.svg";
import Ellipse18 from "../assets/Images/Ellipse18.svg";
import Ellipse19 from "../assets/Images/Ellipse19.svg";
import Circle from "../assets/Images/Circle.png";
import Quote from "../assets/Images/Quote.png";
import Starline from "../assets/Images/Starline.png";
import Home from "../assets/Images/Home.png";
import Stars from "../assets/Images/Stars.png";
import Twitter from "../assets/Images/Twitter.png";
import Web from "../assets/Images/Web.png";
import Instagram from "../assets/Images/Instagram.png";
import Facebook from "../assets/Images/Facebook.png";
import Frame20 from "../assets/Images/Frame20.png";
import One from "../assets/Images/One.png";
import Two from "../assets/Images/Two.png";
import Three from "../assets/Images/Three.png";
import FrameLine from "../assets/Images/FrameLine.svg";
import Framelines from "../assets/Images/Framelines.svg";

export default function Page() {
    return (
        <>
        <div className="Znisa-container">
        <div className="Znisa">
        <div className="Head">
          <img src={icon} alt="" />
          <div className="nav-List">
          <ul className="List">
            <li><img src={Home} alt="" /></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          </div>


         
    <div className="buttons">
          <button className="button1" type="Button">Hire me</button>
           <button className="button2" type="Button"> <img src={User} alt="" /></button>
           </div>
        </div>


        <div className="heroDiv">
          <img src={Autolayout} alt="" className="HeroImg" />
        </div>
        <div className="marque">
          <p>Framer</p>
          <p><img src={Stars} alt="" /></p>
          <p>Webflow</p>
          <p><img src={Stars} alt="" /></p>
          <p>Figma</p>
          <p><img src={Stars} alt="" /></p>
          <p>Notion</p>
          <p><img src={Stars} alt="" /></p>
        </div>


        <div className="design">
          <h3 className="designs">My process to design</h3>
          <img src={Star} alt="#" className="Design"/>
        </div>


        <div className="Ellipses">
        
        <div className="Ellipses-text-one"> 
        
          <div className="img-circle">

            <div className="Ellipses-text-one-circle">
              
            <ul>
            <li>1</li>
            </ul>
            <div className="line-one"> <img src={FrameLine} alt="" />  </div>
          </div>
         
          <img src={Ellipse17} alt="" />
          </div>
          

          <h4>Step 1: Product design Research</h4>
          <p>This initial step involves a systematic and thorough exploration of the market landscape, user needs and existing solutions. </p>
          <button className="button">See Examples</button>
         </div>


        <div className="Ellipses-text-two">

        <div className="img-circle">

          
        <div className="Ellipses-text-two-circle">
            <ul>
            <li>2</li>
            </ul>
            <div className="line-two"> <img src={FrameLine} alt="" className="img-line-two" />  </div>
          </div>
          
        <img src={Ellipse18} alt="" />
     
        </div>
         

          <h4>Step 2: UI design in figma</h4>
          <p>This initial step involves a systematic and thorough exploration of the market landscape, user needs and existing solutions. </p>




        </div>
       

        <div className="Ellipses-text-three">

            <div className="img-circle">

            <div className="Ellipses-text-three-circle">
          <ul>
            <li>3</li>
          </ul>
             </div>

           <img src={Ellipse19} alt="" />
            </div>
        
          <h4>Step 3: No-code develop in webflow</h4>
          <p>This initial step involves a systematic and thorough exploration of the market landscape, user needs and existing solutions. </p>
          
          </div>
          </div>


          <div className="Project">
            <h3 className="project">Some Featured projects</h3>
            <img src={Star} alt="" className=""/>
          </div>

          <div className="box-img">
          <div className="Box">
            <img src={Frame20} alt="" className="box-imgs"/>
            <div className="Combo">
            <img src={One} alt="" className="Num"/>
            <h3 className="Name">Project Name</h3>
            </div>
          </div>

          <div className="Box">
            <img src={Frame20} alt="" className="box-imgs"/>
            <div className="Combo">
            <img src={Two} alt="" className="Num"/>
            <h3 className="Name">Project Name</h3>
            </div>
          </div>

          <div className="Box">
            <img src={Frame20} alt="" className="box-imgs"/>
            <div className="Combo">
            <img src={Three} alt="" className="Num"/>
            <h3 className="Name">Project Name</h3>
            </div>
          </div>


          <div className="project-container">
          <div className="Project">
            <h3 className="project">Clients testimonials</h3>
            <img src={Star} alt="" />
          </div>
          </div>
          </div>

          <div className="card-container">
            
            <div className="Card-container">
            <div className="Card">
              <div className="card">
                <div className="img-client">
                <img src={Circle} alt="" />
                <div className="img-text"> 
                <h5>Clients Name .</h5>
                <p>Product designer</p>
                </div>
                <img src={Quote} alt="" className="quote" />
                </div>
                <p className="text">a simply dummy text of the printing and typesetting industry. lorem ipsum as been the industry's standard dummy text ever since the</p>
              </div>
            </div>
            </div>
            

            <div className="Card-container">
            <div className="Card">

            <div className="card">
              <div className="img-client">
                <img src={Circle} alt="" />
                <div className="img-text">
                <h5 >Clients Name .</h5>
                <p>Product designer</p>
                </div>
                <img src={Quote} alt="" className="quote" />
                </div>
                
                <div className="client">
              </div>
              <p className="text">a simply dummy text of the printing and typesetting industry. lorem ipsum as been the industry's standard dummy text ever since the</p>
              </div>
            </div>
            </div>



            <div className="Card-container">
            <div className="Card">

              <div className="card">
                
                <div className="img-client">
                <img src={Circle} alt="" />
                <div className="img-text">
                <h5>Clients Name .</h5>
                <p>Product designer</p>
                </div>
                <img src={Quote} alt=""className="quote" />
                </div>
      
              <div className="client">
                </div>

                <p className="text">a simply dummy text of the printing and typesetting industry. lorem ipsum as been the industry's standard dummy text ever since the</p>
              </div>
            </div>
            </div>



            <div className="Card-container">
            <div className="Card">

              <div className="card">
                
                <div className="img-client">
                <img src={Circle} alt="" />
                <div className="img-text">
                <h5>Clients Name .</h5>
                <p>Product designer</p>
                </div>
                <img src={Quote} alt="" className="quote"/>
                </div>
      
              <div className="client">
                </div>

                <p className="text">a simply dummy text of the printing and typesetting industry. lorem ipsum as been the industry's standard dummy text ever since the</p>
              </div>
            </div>
          </div>
          </div>
          
          <div className="idea-container">
            <div className="idea">
              <div className="about-idea">
                <div className="Quest"><h2 className="question">Have idea about projects?</h2>
                <img src={Star} alt="" className="stars"/></div>
              

              <div className="Ideas">
            <p className="paragraph">write anything here something about yourself to showcase what actually you doing or targeting etc.</p>
            <div className="bttn">
            <button className="btns">
              Send us a message
            </button>
            </div>
            </div>
              </div>
           <div className="img-starline"><img src={Framelines} alt="" className="starline" /></div>
            
            </div>
            </div>
           

          <div className="Head">
          <img src={Logo} alt="" />
          <ul className="List">
            <li><img src={Twitter} alt="" /></li>
            <li><img src={Web} alt="" /></li>
            <li><img src={Instagram} alt="" /></li>
            <li><img src={Facebook} alt="" /></li>
          </ul>
          <div className="buttons">
          <button className="button1">Hire me</button>
           <button className="button2"> <img src={User} alt="" /></button>
           </div>
        </div>
        </div>
        </div>
        </>

    );

}