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
        <p className="font-bold opacity-100 transform translate-y-0 md:mt-0">Modular</p>
        <p className="text-[#697887] opacity-100 transform translate-y-0">Go beyond teaching with just video. Choose from our library of interactive modules or create your own.</p>
      </div>
      <div className="opacity-0 transform translate-y-0 scale-y-100 origin-bottom pl-4 border-l border-[#4E5862] relative h-32 md:mb-8 md:h-auto lg:mb-0 lg:h-60 stagger-box">
        <p className="font-bold opacity-100 transform translate-y-0 md:mt-0">Customizable</p>
        <p className="text-[#697887] opacity-100 transform translate-y-0">Use our Headless API to build truly custom frontends.</p>
      </div>
      <div className="opacity-0 transform translate-y-0 scale-y-100 origin-bottom pl-4 border-l border-[#4E5862] relative h-32 md:mb-8 md:h-auto lg:mb-0 lg:h-60 stagger-box">
        <p className="font-bold opacity-100 transform translate-y-0 md:mt-0">PPP &amp; Managed Payments</p>
        <p className="text-[#697887] opacity-100 transform translate-y-0">Offer parity pricing, and leave the headache of processing to us.</p>
      </div>
      <div className="opacity-0 transform translate-y-0 scale-y-100 origin-bottom pl-4 border-l border-[#4E5862] relative h-32 md:mb-8 md:h-auto lg:mb-0 lg:h-60 stagger-box">
        <p className="font-bold opacity-100 transform translate-y-0 md:mt-0">Built by Teachers</p>
        <p className="text-[#697887] opacity-100 transform translate-y-0">Co-Founder Gary Simon has been teaching online for over 12 years. We know what teachers want.</p>
      </div>
    </div>
  );
};

export default Features;