import React from "react";
import "./footer.css";
const Footer = () => {
  return (
  <div className="footer container-fluid">
    <div className="first-section row">
      <div className="statement col-6">
        <h1 className="statement-content">Wir sind das größte Online-Kleinanzeigen-Portal Deutschlands!</h1>
      </div>
      <div className="element-one col-2" id="h2">
      <h2>mehr als 900 Millionen aufgezeichnete Aufrufe</h2>
      </div>
      <div className="element-two col-2" id="h2">
      <h2>Über 50 Millionen Anzeigen geschaltet</h2>
      </div>
      <div className="element-three col-2" id="h2">
      <h2>Täglich 1 Millionen neue Anzeigen inseriert</h2>
      </div>
    </div>
    <div className="second-section row">
    <div className="one col-3">
<ul className="eBay Kleinanzeigen">
  <li className="list-title-first">EBAY KLEINENANZEIGEN</li>
  <li><a href="Karriere">Karriere</a></li>
  <li><a href="Presse">Presse</a></li>
  <li><a href="Magazin">Magazin</a></li>
  <li><a href="Nachhaltigkeit">Nachhaltigkeit</a></li>
  <li><a href="Mobile Apps">Mobile Apps</a></li>
  <li><a href="Bug Bounty">Bug Bounty</a></li>
</ul>
    </div>
    <div className="one col-3">
<ul className="eBay Kleinanzeigen">
  <li className="list-title-second">INFORMATIONEN</li>
  <li><a href="Karriere">Tipps für deine Sicherheit</a></li>
  <li><a href="Presse">Datenschutzerklärung</a></li>
  <li><a href="Magazin">Datenschutzeinstellungen</a></li>
  <li><a href="Nachhaltigkeit">Nutzungsbedingungen</a></li>
  <li><a href="Mobile Apps">Impressum</a></li>
  </ul>
    </div>
    <div className="one col-3">
<ul className="eBay Kleinanzeigen">
  <li className="list-title-third">SOCIAL MEDIA</li>
  <li><a href="Karriere"><img style={{height:"26px", width:"26px"}} alt="facebook-logo" src="https://img.icons8.com/fluency/48/null/facebook-new.png"/>Facebook</a></li>
  <li><a href="Presse"><img style={{height:"26px", width:"26px"}} alt="youtube-logo" src="https://img.icons8.com/color/48/null/youtube-play.png"/>YouTube</a></li>
  <li><a href="Magazin"><img style={{height:"26px", width:"26px"}} alt="instragram-logo" src="https://img.icons8.com/fluency/48/null/instagram-new.png"/>Instagram</a></li>
  <li><a href="Nachhaltigkeit"><img style={{height:"26px", width:"26px"}} alt="twitter-logo" src="https://img.icons8.com/color/48/null/twitter--v1.png"/>Twitter</a></li>
  <li><a href="Mobile Apps"><img style={{height:"26px", width:"26px"}} alt="pinterest-logo" src="https://img.icons8.com/color/48/null/pinterest--v1.png"/>Pinterest</a></li>
</ul>
    </div>
    <div className="one col-3">
<ul className="eBay Kleinanzeigen">
  <li className="list-title-fourth">ALLGEMEIN</li>
  <li><a href="Karriere">Beliebte Suchen</a></li>
  <li><a href="Presse">Anzeigen Übersicht</a></li>
  <li><a href="Magazin">Übersicht der Firmasseiten</a></li>
  <li><a href="Nachhaltigkeit">Autobewertung</a></li>
</ul>
    </div>
    <div className="copyright">
    <h6>Copyright © 2005-2023 Marktplaats B.V</h6>
    </div>
    </div>
  </div>
  )
};

export default Footer;
