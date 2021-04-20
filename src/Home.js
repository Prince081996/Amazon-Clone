import React from "react";
import "./Home.css";
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="homepage_banner"
      />
      {/* {//Products id title price rating image} */}
      <div className="home__row">
      <Product
      id="12321451"
      title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
      price={521}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
      />
       <Product
      id="12321452"
      title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
      price="45,916"
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SX522_.jpg"
      />
      </div>
      <div className="home__row">
      <Product
      id="12321453"
      title="realme Fashion Watch 1.4 Large HD Color Display, Full Touch Screen, SpO2, Continuous Heart Rate Monitor, Black, Free Size (RMA161)"
      price={3499}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/71pYXdg9%2BIL._SY679_.jpg"
      />
       <Product
      id="12321454"
      title="All-new Echo (4th Gen) | Premium sound powered by Dolby and Alexa (Blue)"
      price={7999}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/61B0Zf0bjNL._SX569_.jpg"
      />
       <Product
      id="12321455"
      title="New Apple iPad Pro (12.9-inch, Wi-Fi, 512GB) - Space Grey (4th Generation)"
      price="1,16,821"
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SX679_.jpg"
      />
      </div>
      <div className="home__row">
      <Product
      id="12321456"
      title="Samsung 189 cm (75 Inches) 4K Ultra HD Smart QLED TV QA75Q80RAKXXL (Black) (2019 Model)"
      price="4,89,540.00"
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/81Pp%2BKXbrjL._SX425_.jpg"
      />
      </div>
    </div>
  );
}

export default Home;
