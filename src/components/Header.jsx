import { useGSAP } from "@gsap/react"
import { logoSHADOW } from "../utils"
import { logoSHADOWCOLOR } from "../utils"
import gsap from "gsap"

const Header = () => {
  const duration = 2; // Durée du fondu en secondes
  const delay = 3; // Délai en secondes avant de déclencher l'effet

  useGSAP(() => {
    gsap.set("#logo2", { opacity: 0, x: 100 }); // Initialise l'opacité du logo 2 à 0 et le décale vers la droite

    setTimeout(() => {
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
    }, delay * 1000); // Convertit le délai en millisecondes
  }, []);

  return (
    <header className="relative">
      <div className="absolute">
        <img
          src={logoSHADOW}
          alt="logo Shadow"
          className="w-32"
          id="logo1"
        />
        <img
          src={logoSHADOWCOLOR}
          alt="logo Shadow Color"
          className="w-32 absolute top-0 left-0"
          id="logo2"
        />
      </div>
    </header>
  );
};

export default Header;