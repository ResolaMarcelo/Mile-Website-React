
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

function App() {
  return (
    <>
      <div>
        <div className="section1">
          {/* <nav className="navbar">
            <a className="logo" href>Logo</a>
            <div className="nav-links"> 
              <ul>
                <li><a href>Team</a></li>
                <li><a href>Team</a></li>
                <li><a href>Team</a></li>
                <li><a href>Team</a></li>
              </ul>
            </div>
          </nav> */}


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
        <span>Accordion Heading One</span>
        <div class="icon"><i class="fa-sharp fa-solid fa-plus"></i></div>
      </label>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing thelit. Quam, repellendus facere, id porro magnam blanditiiss quoteos dolores ratione quidem ipsam esse quos pariatur, repellat obcaecati!</p>
      </div>
    </div>
   
    <div class="parent-tab">
    <input type="radio" name='tab' id='tab-2' />
      <label for="tab-2">
        <span>Accordion Heading Two</span>
        <div class="icon"><i class="fas fa-plus"></i></div>
      </label>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing thelit. Quam, repellendus facere, id porro magnam blanditiiss quoteos dolores ratione quidem ipsam esse quos pariatur, repellat obcaecati!</p>
      </div>
    </div>
   
    <div class="parent-tab tab-3">
    <input type="radio" name='tab' id='tab-3' />
      <label for="tab-3" class="tab-3">
        <span>Accordion Heading Three</span>
        <div class="icon"><i class="fas fa-plus"></i></div>
      </label>
      <div class="content">
       
        <div class="child-tab">
        <input type="radio" name='tab' id='tab-4' />
          <label for="tab-4">
            <span>Sub Heading One</span>
            <div class="icon"><i class="fas fa-plus"></i></div>
          </label>
          <div class="sub-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing thelit dolor. Utfacilis labore, exercitationem fuga minima a illo modi vitaerse dignissimos? Vero?</p>
          </div>
        </div>
       
        <div class="child-tab">
        <input type="radio" name='tab' id='tab-5' />
          <label for="tab-5">
            <span>Sub Heading Two</span>
            <div class="icon"><i class="fas fa-plus"></i></div>
          </label>
          <div class="sub-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing thelit dolor. Utfacilis labore, exercitationem fuga minima a illo modi vitaerse dignissimos? Vero?</p>
          </div>
        </div>
      </div>
    </div>
  
    <div class="parent-tab">
    <input type="radio" name='tab' id='tab-6' />
      <label for="tab-6">
        <span>Accordion Heading Four</span>
        <div class="icon"><i class="fa-solid fa-plus"></i></div>
      </label>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing thelit. Quam, repellendus facere, id porro magnam blanditiiss quoteos dolores ratione quidem ipsam esse quos pariatur, repellat obcaecati!</p>
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
