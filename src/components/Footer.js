import "../assets/footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";




function Footer() {
  return (
    <footer>
        
             
          <div className="logo">
          <img className="facebook" src={facebook} alt="facebook" />
          <img className="instagram" src={instagram} alt="instagram" />
          <img className="twitter" src={twitter} alt="twitter" />
          <img className="youtube" src={youtube} alt="youtube" />
          </div>
           {/* <div classcolonne0="colonne0"> */}
           <div className="contain">
              <nav className="navi">
                <a className="">
                  <a href="#">Audio & Sous Titre</a>
                </a>
                <a className="">
                  <a href="#">Presse</a>
                  </a>
                <a className="">
                  <a href="#">Confidentialité</a>
                  </a>
                <a className="">
                  <a href="#">Nous Contacter</a>
                  </a>
          
                <div className="contour">
                <a className="">
                <a href="#">Service Code</a>
                </a>
                </div>
                <a className="">© 1997-2018 Netflix, Inc.</a>
                
          
              </nav>
              
              <nav className="navi">
              <a className="">
              <a href="#">Autodescription</a>
              </a>
              
              <a className="">
              <a href="#">Relations Investisseurs</a>
              </a>
              <a className="">
              <a href="#">Informations légales</a>
              </a>
              <a className=""></a>
              </nav>
              
              <nav className="navi">
              <a className="">
              <a href="#">Centre d'Aide</a>
              </a>
              <a className="">
              <a href="#">Recrutement</a>
              </a>
              <a className="">
              <a href="#">Préférences de Cookies</a>
              </a>
              <a className=""></a>
              </nav>

              <nav className="navi">
              <a className="">
              <a href="#">Cartes Cadeaux</a>
              </a>
              <a className="">
              <a href="#">Conditions d'Utilisation</a>
              </a>
              <a className="">
              <a href="#">Mentions Légales</a>
              </a>
              <a className=""></a>

          
              </nav>
                
              </div>

        



    </footer>



  )
}

export default Footer;
