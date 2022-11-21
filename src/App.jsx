
import './App.css';

import nft1 from "./img/nft1.png"
import nft2 from "./img/nft2.png"
import nft3 from "./img/nft3.png"
import nft4 from "./img/nft4.png"
import nft5 from "./img/nft5.png"
import nft6 from "./img/nft6.png"
import nft7 from "./img/nft7.png"
import nft8 from "./img/nft8.png"
import nft9 from "./img/nft9.png"
import coin from "./img/coin.png"

import Navbar from './components/Navbar';


import Camera from './components/Camera';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lights from './components/Lights';
import { Scene } from './components/Scene';
import { Suspense } from 'react';
import imgMenu from "./img/menu-btn.png"

function App() {

  const menuHamburger = () => {
    document.querySelector(".menu-hamburger").scrollIntoView();
  };


  const navLinks = () => {
    document.querySelector(".menu-hamburger").scrollIntoView();
  };

  return (
    <>
      <div>

<Navbar></Navbar>
      
     

<div
className='Container'
style={   {width: "100vw", height: "80vh"} }
>

  <Canvas>
    <Camera/>
    <Lights/>
   
   <Suspense fallback={null}>
   
   <Scene/>
   </Suspense>

     <OrbitControls target={ [1, 10, 0] } />
  </Canvas>

</div>


        <div className="section1">
         
         

        


          <div className="scroll">
            <a href="#section2"><span>EXPLORE</span></a>
          </div>
        </div>

        <div id="section2">
          <div className="info1">
            <img className="logo-section" src="./img/logo.png" alt="" />
            <p>5900 NEXT-GENERATION MILE HIGH APES <br />
              UNIQUELY DESIGNED AND BUILT ON THE SOLANA <br /> BLOCKCHAIN.</p>
          </div>
        </div>
        <div className="section3">
          <div className="container-carousel">
            <div className="slider-container">
              <div className="slider">
                <div className="slider-track">
                  <div className="slide">
                    <img src={nft1} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft2} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft3} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft4} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft5} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft6} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft7} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft8} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft9} alt="" />
                  </div>
                  {/* MSIMAS 9 */}
                  <div className="slide">
                    <img src={nft1} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft2} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft3} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft4} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft5} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft6} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft7} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft8} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft9} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="team">
          <h3 className="title-team">TEAM</h3>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>CryptoChris247 <br /> <span> CEO</span></h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>JOHN316<br /> <span> CEO </span></h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>HAILEY <br /> <span> CEO</span></h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>HAILEY <br /> <span> CEO</span></h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>HAILEY <br /> <span> CEO</span></h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>HAILEY <br /> <span> CEO</span></h3>
                </div>
              </div>
            </div>
          </div>
        </section>


<div className="section-faq">

  
<div class="wrapper">
  
    <div class="parent-tab">
      <input type="radio" name='tab' id='tab-1' />
      <label for="tab-1">
        <span>Where can I stake my Mile High Ape?</span>
        
      </label>
      <div class="content">
        <p>This is the most up to date link! <a href="">https://staking.milehighapes.io/</a></p>
      </div>
    </div>
   
    <div class="parent-tab">
    <input type="radio" name='tab' id='tab-2' />
      <label for="tab-2">
        <span>What will I be able to do with my $MILES?</span>
       
      </label>
      <div class="content">
        <p>You will be able to turn your $miles into actual flight miles! </p>
      </div>
    </div>
   
   
  
    <div class="parent-tab">
    <input type="radio" name='tab' id='tab-3' />
      <label for="tab-3">
        <span>What are the pros of holding a og MHAC ape?</span>
        
      </label>
      <div class="content">
        <p>There will be different staking emissions for MHAC vs Runawway apes! <br />
The rates are as follows <br />
x <br />
x <br />
x <br />
x</p>
      </div>
    </div>



    <div class="parent-tab">
    <input type="radio" name='tab' id='tab-4' />
      <label for="tab-4">
        <span>What airlines do my $miles to Miles work at?</span>
        
      </label>
      <div class="content">
        <p>Private and commercial airlines! </p>
      </div>
    </div>
   


    <div class="parent-tab">
    <input type="radio" name='tab' id='tab-5' />
      <label for="tab-5">
        <span>Can I use my $miles for giveaways?</span>
     
      </label>
      <div class="content">
        <p>Yes! Make sure your tuned in to the discord for all of the active giveaways!</p>
      </div>
    </div>
   



    <div class="parent-tab">
    <input type="radio" name='tab' id='tab-6' />
      <label for="tab-6">
        <span>Where can I purchase an OG Mile High Ape (MHAC)?</span>
      
      </label>
      <div class="content">
        <p>You can purchase one here on secondary: <a href="https://magiceden.io/marketplace/mile_high_ape_club">https://magiceden.io/marketplace/mile_high_ape_club</a></p>
      </div>
    </div>
   



    <div class="parent-tab">
    <input type="radio" name='tab' id='tab-7' />
      <label for="tab-7">
        <span>Where can I purchase a Runaway ape?</span>
       
      </label>
      <div class="content">
        <p>You can purchase one here on secondary: <a href="https://magiceden.io/marketplace/runaway_apes">https://magiceden.io/marketplace/runaway_apes</a> </p>
      </div>
    </div>
   

    <div class="parent-tab">
    <input type="radio" name='tab' id='tab-8' />
      <label for="tab-8">
        <span>When is $miles to miles coming?</span>
       
      </label>
      <div class="content">
       <p>The team is working really hard to get this utility, we are looking at spring/summer of 2023</p>
             </div>
    </div>
   


    <div class="parent-tab">
    <input type="radio" name='tab' id='tab-9' />
      <label for="tab-9">
        <span> I purchased a runaway ape or OG MHAC ape, how do I stay up to date? </span>
      
      </label>
      <div class="content">
       <p>Easy! you can either join our discord or you can follow us on twitter!</p>
            </div>
    </div>
   


  
   










  </div>
</div>


        <section className="coin-section">
          <img src={coin} className="coin-img" alt="" />
          <div className="text-coin">
            <h4>$MHAC</h4>
            <span>THE COIN</span>
            <p>Our native token $KUSH gives daily rewards <br /> with an array of emissions rates depending <br />
              on the rarity of your Shiba collectible. <br />
              It is our main utility token that will be offered <br />
              to obtain certain cannabis related products <br />
              and other rewards in the <a href="https://www.inceptionaio.io/">InceptionAIO</a> network.</p>
          </div>
        </section>
        <section className="faq-section">
        </section>
      </div>
    </>
  );
}

export default App;
