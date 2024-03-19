import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Features = () => {

  useGSAP(() => {

    gsap.to('.stagger-box',{
      y:-20,
      stagger: 0.5,
      opacity: 1,
    })

  },[])

  return (
    <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="opacity-0 transform translate-y-0 scale-y-100 origin-bottom pl-4 border-l border-[#4E5862] relative h-32 md:mb-8 md:h-auto lg:mb-0 lg:h-60 stagger-box">
        <p className="font-bold opacity-100 transform translate-y-0 md:mt-0">Passionné</p>
        <p className="text-[#697887] opacity-100 transform translate-y-0">J'adore apprendre et me dépasser.</p>
      </div>
      <div className="opacity-0 transform translate-y-0 scale-y-100 origin-bottom pl-4 border-l border-[#4E5862] relative h-32 md:mb-8 md:h-auto lg:mb-0 lg:h-60 stagger-box">
        <p className="font-bold opacity-100 transform translate-y-0 md:mt-0">Curieux</p>
        <p className="text-[#697887] opacity-100 transform translate-y-0">Je suis quelqu'un d'autonome qui pose beaucoup de questions.</p>
      </div>
      <div className="opacity-0 transform translate-y-0 scale-y-100 origin-bottom pl-4 border-l border-[#4E5862] relative h-32 md:mb-8 md:h-auto lg:mb-0 lg:h-60 stagger-box">
        <p className="font-bold opacity-100 transform translate-y-0 md:mt-0">Rigoureux</p>
        <p className="text-[#697887] opacity-100 transform translate-y-0">C'est comme ça que j'aime travailler.</p>
      </div>
      <div className="opacity-0 transform translate-y-0 scale-y-100 origin-bottom pl-4 border-l border-[#4E5862] relative h-32 md:mb-8 md:h-auto lg:mb-0 lg:h-60 stagger-box">
        <p className="font-bold opacity-100 transform translate-y-0 md:mt-0">Engagé</p>
        <p className="text-[#697887] opacity-100 transform translate-y-0">Quand je m'implique dans un projet, je ne lâche rien.</p>
      </div>
    </div>
  );
};

export default Features;