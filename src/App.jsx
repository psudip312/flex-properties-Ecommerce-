
import "./App.css";
import "../src/components/home.css";
import picture from "./black.jpg";
import a from "./a.jpg";
import b from "./b.jpg";
import c from "./c.jpg";
import d from "./ear.jpg";
import e from "./e.jpg";
import f from "./f.jpg";
import g from "./g.jpg";
import h from "./h.jpg";
import i from "./head.png";
import j from "./www.png";
import k from "./watc.jpg";
import l from "./mac.jpg";
import m from "./vr.jpg";
import n from "./headphone.png";
import o from "./ff.jpg";
import p from "./lap.jpg";
import q from "./download.jpg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    
      <Navbar/>
      //This is main content
      <div className="main-content">
        <div className="left-side">
          <div className="left-content">
            <h3>Beats Solo</h3>
            <h1 className="vj">Wireless</h1>
            <h1 className="VJP">HEADPHONES</h1>
            <div className="he">
            <img src={n}></img>
          </div>
            <button className="red-button">Shop by category</button>
          </div>
          <div></div>
        </div>
      </div>
      // This is Devices Content
      <div className="devices">
        <div className="leftt-side">
          <div className="stpic">
            <img src={o}></img>
            <div className="movpic">
              <h4>Enjoy</h4>
              <h2>With</h2>
              <h1 className="H1TAG">EARPHONE</h1>
              <button className="b">Browse</button>
            </div>
          </div>
          <div className="stpic">
            <img src={p}></img>
            <div className="movpic">
              <h4>Enjoy</h4>
              <h2>With</h2>
              <h1 className="H1TAG">EARPHONE</h1>
              <button className="b">Browse</button>
            </div>
          </div>
        </div>

        <div className="righttt-side">
          <div className="stpicc">
            <img className="lap" src={q}></img>
            <div className="movpicc">
              <h4>Enjoy</h4>
              <h2>With</h2>
              <h1 className="H1TAG">Earphone</h1>
              <button className="b"> Browsssss</button>
            </div>
          </div>
        </div>
      </div>
      <div className="devices">
      <div className="righttt-side">
        <div className="stpicc">
          <img className="lap" src={q}></img>
          <div className="movpicc">
            <h4>Enjoy</h4>
            <h2>With</h2>
            <h1 className="H1TAG">Earphone</h1>
            <button className="b"> Browsssss</button>
          </div>
        </div>
      </div>
      <div className="leftt-side">
      <div className="stpic">
        <img src={o}></img>
        <div className="movpic">
          <h4>Enjoy</h4>
          <h2>With</h2>
          <h1 className="H1TAG">EARPHONE</h1>
          <button className="b">Browse</button>
        </div>
      </div>
      <div className="stpic">
        <img src={p}></img>
        <div className="movpic">
          <h4>Enjoy</h4>
          <h2>With</h2>
          <h1 className="H1TAG">EARPHONE</h1>
          <button className="b">Browse</button>
        </div>
      </div>
    </div>
    </div>
      <div className="downsection">
        <div className="ico">
          <i class="fa-solid fa-truck-fast"></i>
          <div className="ic">
            <h3>Free Shiping</h3>
          </div>
        </div>
        <div className="ico">
          <i class="fa-solid fa-star"></i>
          <div className="ic">
            <h3>Money Guarantee</h3>
          </div>
        </div>
        <div className="ico">
          <i class="fa-solid fa-headphones"></i>
          <div className="ic">
            <h3>Online Support 24/7</h3>
          </div>
        </div>
        <div className="ico">
          <i class="fa-sharp fa-solid fa-building-lock"></i>
          <div className="ic">
            <h3>Secure Payment</h3>
          </div>
        </div>
      </div>
      <div className="sale-section">
        <div className="imgse">
          <img src={i}></img>
        </div>
        <div className="leftside">
          <div className="leftsidecon">
            <p>20% off</p>
            <h1>FINE</h1>
            <h1>SMILE</h1>
            <p>15 Nov To 7 Dec</p>
          </div>
        </div>
        <div className="rightside">
          <div className="rightsidecon">
            <p>Beats Solo Air</p>
            <h1>Summer Sale</h1>
            <h1>SMILE</h1>
            <p>Company thats growwn from 270 to 480 </p>
            <button> Shop</button>
          </div>
        </div>
      </div>
      // this is best seller prodducts section
      <div className="sellersection">
        <h1 className="h"> Best Seller Products </h1>
        <p className="ptag"> Speaker there are many variations passages</p>
      </div>
      <div className="sell">
        <div>
          <img src={a}></img>
          <h5>Beats</h5>
          <p>$995</p>
        </div>
        <div>
          <img src={b}></img>
          <h5>Rocky Mountain</h5>
          <p>$8,250</p>
        </div>
        <div>
          <img src={c}></img>
          <h5>Game Console Controller </h5>
          <p>$9,787</p>
        </div>
        <div>
          <img src={d}></img>
          <h5>Bitebook</h5>
          <p>$9,950</p>
        </div>
      </div>
      <div className="sell">
        <div>
          <img src={e}></img>
          <h5>Beats</h5>
          <p>$995</p>
        </div>
        <div>
          <img src={f}></img>
          <h5>Rocky Mountain</h5>
          <p>$8,250</p>
        </div>
        <div>
          <img src={g}></img>
          <h5>Game Console Controller </h5>
          <p>$9,787</p>
        </div>
        <div>
          <img src={h}></img>
          <h5>Bitebook</h5>
          <p>$9,950</p>
        </div>
      </div>
      <div className="sale-sectionn">
        <div className="imgsee">
          <img class="watch" src={j}></img>
        </div>
        <div className="leftside">
          <div className="leftsidecon">
            <p>20% off</p>
            <h1>HAPPY </h1>
            <h1>HOURS</h1>
            <p>15 Nov To 7 Dec</p>
          </div>
        </div>
        <div className="rightside">
          <div className="rightsidecon">
            <p>Beats Solo Air</p>
            <h1>Summer Sale</h1>
            <h1>SMILE</h1>
            <p>Company thats growwn from 270 to 480 </p>
            <button> Shop</button>
          </div>
        </div>
      </div>
      <div className="sellersection">
        <h1 className="h"> Recent News </h1>
        <p className="ptag"> There are many variations passages</p>
      </div>
      <div>
        <div className="newscontainer">
        <div>
        <img  class=""src={k}></img>
        <p>October 9, 2009 By Paul</p>
        <h5>How to choose perfect gadgets</h5>
        <p>,fnjashdfjh dfhuos jdkfjd joaspdfjpao</p>
        </div>
         
          <div>
            <img class="mac" src={l}></img>
            <p>October 9, 2009 By Paul</p>
            <h5>How to choose perfect gadgets</h5>
            <p>,fnjashdfjh dfhuos jdkfjd joaspdfjpao</p>
          </div>
          <div>
            <img src={m}></img>
            <p>October 9, 2009 By Paul</p>
            <h5>How to choose perfect gadgets</h5>
            <p>,fnjashdfjh dfhuos jdkfjd joaspdfjpao</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
