import { useGSAP } from "@gsap/react"
import { logoSHADOW } from "../utils"
import { logoSHADOWCOLOR } from "../utils"
import gsap from "gsap"

const Header = () => {
  const duration = 2; // Durée du fondu en secondes

  useGSAP(() => {
    gsap.set("#logo2", { opacity: 0, x: 100 }); // Initialise l'opacité du logo 2 à 0 et le décale vers la droite
    
    gsap.to("#logo1", {
      opacity: 0, // Fait disparaître le logo 1
      duration: duration,
      ease: "power2.inOut",
    });

    gsap.to("#logo2", {
      opacity: 1, // Fait apparaître le logo 2
      x: 0, // Déplace le logo 2 vers la gauche pour qu'il se superpose au logo 1
      duration: duration,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <header className="relative">
      <div className="absolute"> {/* Ajoute un conteneur avec la classe absolute */}
        <img
          src={logoSHADOW}
          alt="logo Shadow"
          className="w-32"
          id="logo1"
        />
        <img
          src={logoSHADOWCOLOR}
          alt="logo Shadow Color"
          className="w-32 absolute top-0 left-0" // Positionne le logo 2 en haut à gauche du conteneur
          id="logo2"
        />
      </div>
    </header>
  );
};

export default Header;