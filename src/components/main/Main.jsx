import React from 'react'
import "./main.css";
import products from "../../products/productData";
import { useEffect } from 'react';

const Main = () => {
  const slideright = () => {
    const carouselItems = document.getElementById("carousel-items"); 
    const carouselWidth = carouselItems.getBoundingClientRect().width;
    carouselItems.scrollLeft += carouselWidth;
  }
  const slideleft = () => {
    const carouselItems = document.getElementById("carousel-items"); 
    const carouselWidth = carouselItems.getBoundingClientRect().width;
    carouselItems.scrollLeft -= carouselWidth;
  }

  useEffect(() => {
    setInterval(() => {
      const carouselItems = document.getElementById("carousel-items"); 
    const carouselWidth = carouselItems.getBoundingClientRect().width;
    carouselItems.scrollLeft += carouselWidth;
    }, 8000);
  }, [])

  return (
    <>
    <div className="header container-fluid">
        <div className='header-title row'>
          <h1 className='page-title'>Wir sind das größte Online-Kleinanzeigen-Portal Deutschlands!</h1>
        </div>
        <div className="header-buttons">
          <button className='header-btn-one btn btn-primary' style={{fontSize: "17px"}}>Inserate Durchsuchen</button>
          <span style={{fontWeight: "700"}}>oder</span>
          <button className='header-btn-two btn btn-primary' style={{fontSize: "17px"}}><img alt="create-ad-icon" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/create-new.png"/> Anzeige Aufgeben</button>
      </div>
    </div>
    <div className=" main-container container-fluid row">
      <div className="accordion categories col-2" id="accordionPanelsStayOpenExample">
      <div className="accordion-button" type="button" id='header'>
      Beliebte Kategorien:
      </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      Auto, Rad & Boot
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <ul className='accordion-links'>
          <li><a href='#Fahrräder & Zubehör'>Fahrräder & Zubehör</a></li>
          <li><a href='#Autoteile & Reifen'>Autoteile & Reifen</a></li>
          <li><a href='#Boote & Bootszubehör'>Boote & Bootszubehör</a></li>
          <li><a href='#Motorräder & Motorroller'>Motorräder & Motorroller</a></li>
          <li><a href='#Motorradteile & Zubehör'>Motorradteile & Zubehör</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Immobilien
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      <ul className='accordion-links'>
          <li><a href='#Gewerbeimmobilien'>Gewerbeimmobilien</a></li>
          <li><a href='#Häuser zum Kauf'>Häuser zum Kauf</a></li>
          <li><a href='#Mietwohnungen'>Mietwohnungen</a></li>
          <li><a href='#Auf Zeit & WG'>Auf Zeit & WG</a></li>
          <li><a href='#Eigentumswohnungen'>Eigentumswohnungen</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Dienstleistungen
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      <ul className='accordion-links'>
          <li><a href='#Babysitter & Kinderbetreuung'>Babysitter & Kinderbetreuung</a></li>
          <li><a href='#Haus & Garten'>Haus & Garten</a></li>
          <li><a href='#Altenpflege'>Altenpflege</a></li>
          <li><a href='#Künstler & Musiker'>Künstler & Musiker</a></li>
          <li><a href='#Tierbetreuung & Training'>Tierbetreuung & Training</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Jobangebote
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      <ul className='accordion-links'>
          <li><a href='#Gastronomie & Tourismus'>Gastronomie & Tourismus</a></li>
          <li><a href='#Bau, Handwerk & Produktion'>Bau, Handwerk & Produktion</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
      <div className="products-container col-10">
      <div className='carousel'>  
      <div className='carousel-header'>
        <div className='carousel-title'>
            <h2>Galerie</h2>
        </div>
        <div className='carousel-buttons'>
        <button className='button-left btn btn-primary' id='left-btn' onClick={slideleft}></button>
        <button className='button-right btn btn-primary' id='right-btn' onClick={slideright}></button>
        </div>
      </div>
      <div className='carousel-items' id='carousel-items'>
      {products.map(product => {
        return (
            <div className="card-container" key={product.id} id="carousel">
                <img src={product.image} alt="product" className="product-image" style={{width:"100%", height: "155px"}}/>
                <div className='product-price'>
                    <p className='price'>{product.price}</p>
                </div>
                <div className='product-content'>
                <h4 className='product-name'>{product.name}</h4>
                <div className='last-content'>
                <p className="product-address text-primary">{product.address}</p>
                <button className='btn btn-primary'>Details Anzeigen</button>
                </div>
                </div>
            </div>
        )
    })}
      </div>
      </div>
    {products.map(product => {
        return (
            <div className="card-container" key={product.id}>
                <img src={product.image} alt="product" className="product-image" style={{width:"100%", height: "155px"}}/>
                <div className='product-price'>
                    <p className='price'>{product.price}</p>
                </div>
                <div className='product-content'>
                <h4 className='product-name'>{product.name}</h4>
                <div className='last-content'>
                <p className="product-address text-primary">{product.address}</p>
                <button className='btn btn-primary'>Details Anzeigen</button>
                </div>
                </div>
            </div>
        )
    })}
    </div>
    </div>
    </>
  )
}

export default Main